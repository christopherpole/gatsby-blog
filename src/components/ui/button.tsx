import React from 'react';
import styled from 'styled-components';

import buttonStyles from 'src/theme/styles/button';

const Wrapper = styled(({ altStyle, ...rest }: IProps) => <button {...rest} />)`
  ${buttonStyles};
`;

interface IProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  altStyle?: boolean;
}

const ButtonLink = (props: IProps) => <Wrapper {...props} />;

export default ButtonLink;
