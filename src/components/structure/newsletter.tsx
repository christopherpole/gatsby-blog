import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form } from 'formik';

import Button from 'src/components/ui/button';
import ErrorMessage from 'src/components/ui/form/errorMessage';
import FieldWrapper from 'src/components/ui/form/fieldWrapper';
import Input from 'src/components/ui/form/input';
import Label from 'src/components/ui/form/label';

const opacityWrapper = css<{ isShowing: boolean }>`
  opacity: 0;
  transition: ${props => `opacity 500ms ${props.theme.transitions.easing}`};

  ${props =>
    props.isShowing &&
    css`
      opacity: 1;
    `}
`;

const Wrapper = styled.nav`
  position: relative;
`;

const FormWrapper = styled.div<{ isShowing: boolean }>`
  ${opacityWrapper}
`;

const StyledInput = styled(({ hasError, ...rest }) => <Input {...rest} />)`
  padding: ${props => props.theme.spacing.extraSmall};
  border-color: ${props => props.theme.colors.tertiary};

  &:focus {
    border-color: ${props => props.theme.colors.secondary};
  }

  ${props =>
    props.hasError &&
    css`
      border-color: ${props.theme.colors.error.primary};
      background-color: ${props.theme.colors.error.secondary};
    `}
`;

const FormErrorMessage = styled.p`
  color: ${props => props.theme.colors.error.primary};
`;

const ConfirmationMessage = styled.p<{ isShowing: boolean }>`
  ${opacityWrapper}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition-delay: 500ms;
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
      <ConfirmationMessage isShowing={formHasSubmitted} aria-hidden={formHasSubmitted}>
        Thanks for subscribing!
      </ConfirmationMessage>

      <FormWrapper isShowing={!formHasSubmitted} aria-hidden={!formHasSubmitted}>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={NewsLetterSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors, handleSubmit }) => (
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
                <Label htmlFor="newsletter-contact">
                  Enter your email address below to get updates sent directly to your inbox!
                </Label>

                <StyledInput
                  placeholder="Email"
                  id="newsletter-contact"
                  component="input"
                  type="email"
                  name="email"
                  hasError={!!errors.email}
                />
                <ErrorMessage name="email" component="p" />
              </FieldWrapper>

              {!!formError && <FormErrorMessage>{formError}</FormErrorMessage>}

              <Button
                altStyle
                type="submit"
                submitting={isSubmitting}
                aria-hidden={!!formHasSubmitted}
              >
                Subscribe
              </Button>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </Wrapper>
  );
};

export default NewsLetter;
