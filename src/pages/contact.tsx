import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Recaptcha from 'react-recaptcha';

import Button from 'src/components/ui/button';
import SEO from 'src/components/structure/seo';

const Wrapper = styled.div``;

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

const FieldWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.medium};

  &:last-child {
    margin-bottom: 0;
  }
`;

const FormSectionsWrapper = styled.div`
  position: relative;
`;

const ConfirmationWrapper = styled.div<{ isHidden: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: opacity 500ms linear;
  transition-delay: 500ms;
  opacity: ${props => (props.isHidden ? '0' : '1')};
`;

const FormWrapper = styled.div<{ isHidden: boolean }>`
  transition: opacity 500ms linear;
  opacity: ${props => (props.isHidden ? '0' : '1')};
  pointer-events: ${props => (props.isHidden ? 'none' : 'auto')};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.small};
`;

const StyledField = styled(Field)`
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #aaa;
  margin-bottom: ${props => props.theme.spacing.small};
  transform: border-color 200ms linear;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }

  ${props =>
    props.haserror &&
    css`
      border-color: #f00;
      background-color: ${lighten(0.4, '#f00')};
    `}

  &:last-child {
    margin-bottom: none;
  }
`;

const StyledTextArea = styled(StyledField)`
  height: 20rem;
`;

const StyledRecaptcha = styled(Recaptcha)`
  margin-bottom: ${props => props.theme.spacing.small};

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: #f00;
`;

const FormErrorMessage = styled.p`
  color: #f00;
`;

const ContactPage = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [formHasSubmitted, setFormHasSubmitted] = useState<boolean>(false);

  const onSubmit = (
    values: {},
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    axios
      .post(`https://formspree.io/${process.env.GATSBY_FORMSPREE_FORM_ID}`, {
        ...values,
      })
      .then(({ data: { ok } }: { data: { ok: boolean } }) => {
        if (ok) {
          setFormHasSubmitted(true);
        } else {
          console.error('Unknown contact form submission error');
          setFormError('There was a problem submitting the form');
        }

        setSubmitting(false);
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
      <h1>Contact form</h1>

      <FormSectionsWrapper>
        <ConfirmationWrapper aria-hidden={!formHasSubmitted} isHidden={!formHasSubmitted}>
          Submitted!
        </ConfirmationWrapper>

        <FormWrapper aria-hidden={!!formHasSubmitted} isHidden={!!formHasSubmitted}>
          <Formik
            initialValues={{ subject: '', email: '', message: '', 'g-recaptcha-response': '' }}
            validationSchema={ContactSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, errors, setFieldValue, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <FieldWrapper>
                  <Label>Subject</Label>
                  <StyledField
                    component="input"
                    type="text"
                    name="subject"
                    haserror={errors.subject}
                  />
                  <StyledErrorMessage name="subject" component="p" />
                </FieldWrapper>

                <FieldWrapper>
                  <Label>Email</Label>
                  <StyledField
                    component="input"
                    type="email"
                    name="email"
                    haserror={errors.email}
                  />
                  <StyledErrorMessage name="email" component="p" />
                </FieldWrapper>

                <FieldWrapper>
                  <Label>Message</Label>
                  <StyledTextArea component="textarea" name="message" haserror={errors.message} />
                  <StyledErrorMessage name="message" component="p" />
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
                  <StyledErrorMessage name="g-recaptcha-response" component="p" />
                </FieldWrapper>

                {!!formError && <FormErrorMessage>{formError}</FormErrorMessage>}

                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </FormSectionsWrapper>
    </Wrapper>
  );
};

export default ContactPage;
