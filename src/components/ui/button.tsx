import React from 'react';
import styled from 'styled-components';

import buttonStyles from 'src/theme/styles/button';

const Wrapper = styled.button`
  ${buttonStyles};
`;

interface IProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const ButtonLink = (props: IProps) => <Wrapper {...props} />;

export default ButtonLink;
