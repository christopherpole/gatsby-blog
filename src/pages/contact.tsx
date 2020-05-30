import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form } from 'formik';
import Recaptcha from 'react-recaptcha';

import ErrorMessage from 'src/components/ui/form/errorMessage';
import FieldWrapper from 'src/components/ui/form/fieldWrapper';
import Button from 'src/components/ui/button';
import Input from 'src/components/ui/form/input';
import Label from 'src/components/ui/form/label';
import TextArea from 'src/components/ui/form/textArea';
import SEO from 'src/components/structure/seo';
import Headline from 'src/components/ui/headline';

const Wrapper = styled.div``;

const opacityWrapper = css<{ isShowing: boolean }>`
  opacity: 0;
  transition: ${props => `opacity 500ms ${props.theme.transitions.easing}`};

  ${props =>
    props.isShowing &&
    css`
      opacity: 1;
    `}
`;

const FormAndConfirmationMessageWrapper = styled.div`
  position: relative;
`;

const FormWrapper = styled.div<{ isShowing: boolean }>`
  ${opacityWrapper}
  max-width: 50rem;
  margin: auto;
`;

const ConfirmationMessage = styled.p<{ isShowing: boolean }>`
  ${opacityWrapper}
  text-align: center;
  font-size: ${props => props.theme.sizing.medium};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition-delay: 500ms;
`;

const ContactSchema = Yup.object().shape({
  subject: Yup.string()
    .min(2, 'Subject too short')
    .required('Required'),
  email: Yup.string()
    .min(2, 'Email too short')
    .email('Invalid email')
    .required('Required'),
  message: Yup.string()
    .min(10, 'Message too short')
    .required('Required'),
  'g-recaptcha-response': Yup.string().required('Please complete the reCAPTCHA'),
});

const StyledRecaptcha = styled(Recaptcha)`
  margin-bottom: ${props => props.theme.spacing.small};

  &:last-child {
    margin-bottom: 0;
  }
`;

const FormErrorMessage = styled.p`
  color: ${props => props.theme.colors.error.primary};
`;

const ContactPage = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [formHasSubmitted, setFormHasSubmitted] = useState<boolean>(false);

  const onSubmit = (
    values: {},
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    axios
      .post(`https://formspree.io/${process.env.GATSBY_FORMSPREE_CONTACT_FORM_ID}`, {
        ...values,
      })
      .then(({ data: { ok } }: { data: { ok: boolean } }) => {
        if (ok) {
          setFormHasSubmitted(true);
        } else {
          console.error('Unknown contact form submission error');
          setFormError('There was a problem submitting the form');
          setSubmitting(false);
        }
      })
      .catch((error: { response: { data: { error: string } } }) => {
        console.error(`Contact form submission error: ${error.response.data.error}`);
        setFormError(error.response.data.error);
        setSubmitting(false);
      });
  };

  return (
    <Wrapper>
      <SEO title="Contact" pathname="/contact" />

      <Headline>Contact</Headline>

      <FormAndConfirmationMessageWrapper>
        <ConfirmationMessage isShowing={formHasSubmitted} aria-hidden={formHasSubmitted}>
          Thanks for your message. I&apos;ll get back to you shortly!
        </ConfirmationMessage>

        <FormWrapper isShowing={!formHasSubmitted} aria-hidden={!formHasSubmitted}>
          <Formik
            initialValues={{ subject: '', email: '', message: '', 'g-recaptcha-response': '' }}
            validationSchema={ContactSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, errors, setFieldValue, handleSubmit }) => (
              <Form
                onSubmit={
                  isSubmitting || formHasSubmitted
                    ? e => {
                        e.preventDefault();
                      }
                    : handleSubmit
                }
              >
                <FieldWrapper>
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input
                    id="contact-subject"
                    component="input"
                    type="text"
                    name="subject"
                    hasError={errors.subject}
                  />
                  <ErrorMessage name="subject" component="p" />
                </FieldWrapper>

                <FieldWrapper>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    component="input"
                    type="email"
                    name="email"
                    hasError={errors.email}
                  />
                  <ErrorMessage name="email" component="p" />
                </FieldWrapper>

                <FieldWrapper>
                  <Label htmlFor="contact-message">Message</Label>
                  <TextArea
                    id="contact-message"
                    component="textarea"
                    name="message"
                    hasError={errors.message}
                  />
                  <ErrorMessage name="message" component="p" />
                </FieldWrapper>

                <FieldWrapper>
                  <StyledRecaptcha
                    sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                    verifyCallback={(val: string) => {
                      setFieldValue('g-recaptcha-response', val);
                    }}
                    expiredCallback={() => {
                      setFieldValue('g-recaptcha-response', '');
                    }}
                  />
                  <ErrorMessage name="g-recaptcha-response" component="p" />
                </FieldWrapper>

                {!!formError && <FormErrorMessage>{formError}</FormErrorMessage>}

                <Button
                  altStyle
                  type="submit"
                  submitting={isSubmitting}
                  aria-hidden={!!formHasSubmitted}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </FormAndConfirmationMessageWrapper>
    </Wrapper>
  );
};

export default ContactPage;
