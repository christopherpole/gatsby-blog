import React, { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form } from 'formik';
import Recaptcha from 'react-recaptcha';

import ErrorMessage from 'src/components/ui/form/errorMessage';
import FieldWrapper from 'src/components/ui/form/fieldWrapper';
import Submission from 'src/components/ui/form/submission';
import Input from 'src/components/ui/form/input';
import Label from 'src/components/ui/form/label';
import TextArea from 'src/components/ui/form/textArea';
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

const StyledRecaptcha = styled(Recaptcha)`
  margin-bottom: ${props => props.theme.spacing.small};

  &:last-child {
    margin-bottom: 0;
  }
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
      <h1>Contact form</h1>

      <Formik
        initialValues={{ subject: '', email: '', message: '', 'g-recaptcha-response': '' }}
        validationSchema={ContactSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors, setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FieldWrapper>
              <Label>Subject</Label>
              <Input component="input" type="text" name="subject" haserror={errors.subject} />
              <ErrorMessage name="subject" component="p" />
            </FieldWrapper>

            <FieldWrapper>
              <Label>Email</Label>
              <Input component="input" type="email" name="email" haserror={errors.email} />
              <ErrorMessage name="email" component="p" />
            </FieldWrapper>

            <FieldWrapper>
              <Label>Message</Label>
              <TextArea component="textarea" name="message" haserror={errors.message} />
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

            <Submission showConfirmation={!!formHasSubmitted} isSubmitting={isSubmitting} />
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default ContactPage;
