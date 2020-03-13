import styled from 'styled-components';

import Button from 'src/components/ui/button';

const StyledButton = styled(Button)<{ isHidden: boolean }>`
  transition: opacity 500ms linear;
  opacity: ${props => (props.isHidden ? '0' : '1')};
`;

export default StyledButton;
