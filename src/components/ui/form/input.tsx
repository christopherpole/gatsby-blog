import styled, { css } from 'styled-components';
import { Field } from 'formik';
import { lighten } from 'polished';

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
    margin-bottom: 0;
  }
`;

export default StyledField;
