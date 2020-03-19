import styled, { css } from 'styled-components';
import { Field } from 'formik';

const StyledField = styled(Field)`
  padding: ${props => props.theme.spacing.small};
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
      border-color: ${props.theme.colors.error.primary};
      background-color: ${props.theme.colors.error.secondary};
    `}

  &:last-child {
    margin-bottom: 0;
  }
`;

export default StyledField;
