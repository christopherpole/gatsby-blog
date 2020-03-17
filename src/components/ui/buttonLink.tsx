import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import buttonStyles from 'src/theme/styles/button';

const Wrapper = styled(Link)`
  ${buttonStyles};
`;

interface IProps {
  children: string;
  to: string;
}

const ButtonLink = ({ children, to }: IProps) => <Wrapper to={to}>{children}</Wrapper>;

export default ButtonLink;
