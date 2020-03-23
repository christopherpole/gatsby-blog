import React from 'react';
import styled, { css } from 'styled-components';
import { Field } from 'formik';

const StyledField = styled(({ hasError, ...rest }) => <Field {...rest} />)`
  padding: ${props => props.theme.spacing.xxs};
  width: 100%;
  border: 1px solid ${props => props.theme.colors.input.border};
  background-color: ${props => props.theme.colors.input.background};
  margin-bottom: ${props => props.theme.spacing.extraSmall};
  transform: ${props =>
    `border-color ${props.theme.transitions.duration} ${props.theme.transitions.easing}`};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.input.background};
  }

  ${props =>
    props.hasError &&
    css`
      border-color: ${props.theme.colors.error.primary};
      background-color: ${props.theme.colors.error.secondary};
    `}

  &:last-child {
    margin-bottom: 0;
  }
`;

export default StyledField;
