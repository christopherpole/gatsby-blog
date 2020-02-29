import React, { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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

  &:last-child {
    margin-bottom: none;
  }
`;

const StyledTextArea = styled(StyledField)`
  height: 20rem;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: #f00;
`;

const FormErrorMessage = styled.p`
  color: #f00;
`;

const ContactPage = () => {
  const [formSubmissionStatus, setFormSubmissionStatus] = useState<
    'error' | 'submitted' | 'unsubmitted'
  >('unsubmitted');

  const onSubmit = (values: {}) => {
    console.log(values);

    axios
      .post(`https://formspree.io/${process.env.GATSBY_FORMSPREE_FORM_ID}`, {
        ...values,
      })
      .then(({ data: { ok } }: { data: { ok: boolean } }) => {
        if (ok) {
          console.info('Form submitted successfully');
          setFormSubmissionStatus('submitted');
        } else {
          console.info('There was an issue submitting the form');
          setFormSubmissionStatus('error');
        }
      })
      .catch(error => {
        console.error(error);
        setFormSubmissionStatus('error');
      });
  };

  return (
    <Wrapper>
      <SEO title="Contact" pathname="/contact" />
      <h1>Contact form</h1>

      <FormSectionsWrapper>
        <ConfirmationWrapper
          aria-hidden={formSubmissionStatus !== 'submitted'}
          isHidden={formSubmissionStatus !== 'submitted'}
        >
          Submitted!
        </ConfirmationWrapper>

        <FormWrapper
          aria-hidden={formSubmissionStatus === 'submitted'}
          isHidden={formSubmissionStatus === 'submitted'}
        >
          <Formik
            initialValues={{ subject: '', email: '', message: '' }}
            validationSchema={ContactSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <FieldWrapper>
                  <Label>Subject</Label>
                  <StyledField component="input" type="text" name="subject" />
                  <StyledErrorMessage name="subject" component="p" />
                </FieldWrapper>

                <FieldWrapper>
                  <Label>Email</Label>
                  <StyledField component="input" type="email" name="email" />
                  <StyledErrorMessage name="email" component="p" />
                </FieldWrapper>

                <FieldWrapper>
                  <Label>Message</Label>
                  <StyledTextArea component="textarea" name="message" />
                  <StyledErrorMessage name="message" component="p" />
                </FieldWrapper>

                {formSubmissionStatus === 'error' && (
                  <FormErrorMessage>There was a problem submitting the form</FormErrorMessage>
                )}

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
