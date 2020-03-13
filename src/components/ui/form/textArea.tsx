import styled from 'styled-components';

import Input from 'src/components/ui/form/input';

const StyledTextArea = styled(Input)`
  height: 20rem;
  margin-bottom: ${props => props.theme.spacing.small};

  &:last-child {
    margin-bottom: 0;
  }
`;

export default StyledTextArea;
