import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import linkStyle from 'src/theme/styles/link';

const Wrapper = styled(Link)`
  ${linkStyle}
`;

interface IProps {
  to: string;
  children: React.ReactNode;
}

const StyledLink = (props: IProps) => <Wrapper activeClassName="current" {...props} />;

export default StyledLink;
