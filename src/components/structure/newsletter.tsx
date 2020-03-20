import React, { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form } from 'formik';

import ErrorMessage from 'src/components/ui/form/errorMessage';
import FieldWrapper from 'src/components/ui/form/fieldWrapper';
import Submission from 'src/components/ui/form/submission';
import Input from 'src/components/ui/form/input';
import Label from 'src/components/ui/form/label';

const Wrapper = styled.nav``;

const FormErrorMessage = styled.p`
  color: #f00;
`;

const NewsLetterSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Email too short')
    .email('Invalid email')
    .required('Required'),
});

const NewsLetter = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [formHasSubmitted, setFormHasSubmitted] = useState<boolean>(false);

  const onSubmit = (
    values: {},
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    axios
      .post(`https://formspree.io/${process.env.GATSBY_FORMSPREE_NEWSLETTER_FORM_ID}`, {
        ...values,
      })
      .then(({ data: { ok } }: { data: { ok: boolean } }) => {
        if (ok) {
          setFormHasSubmitted(true);
        } else {
          console.error('Unknown newsletter form submission error');
          setFormError('There was a problem submitting the form');
          setSubmitting(false);
        }
      })
      .catch((error: { response: { data: { error: string } } }) => {
        console.error(`Newsletter form submission error: ${error.response.data.error}`);
        setFormError(error.response.data.error);
        setSubmitting(false);
      });
  };

  return (
    <Wrapper>
      <Formik initialValues={{ email: '' }} validationSchema={NewsLetterSchema} onSubmit={onSubmit}>
        {({ isSubmitting, errors, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FieldWrapper>
              <Label>Get the care info you need to keep your houseplants happy and healthy!</Label>
              <Input component="input" type="email" name="email" haserror={errors.email} />
              <ErrorMessage name="email" component="p" />
            </FieldWrapper>

            {!!formError && <FormErrorMessage>{formError}</FormErrorMessage>}

            <Submission showConfirmation={!!formHasSubmitted} isSubmitting={isSubmitting} />
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default NewsLetter;
