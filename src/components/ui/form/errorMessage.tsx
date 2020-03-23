import styled from 'styled-components';
import { ErrorMessage } from 'formik';

const StyledErrorMessage = styled(ErrorMessage)`
  color: ${props => props.theme.colors.error.primary};
`;

export default StyledErrorMessage;
