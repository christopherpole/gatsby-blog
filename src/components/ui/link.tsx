import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import linkStyle from 'src/theme/styles/link';

const Wrapper = styled(({ altStyle, ...rest }) => <Link {...rest} />)`
  ${linkStyle};
`;

interface IProps {
  to: string;
  children: React.ReactNode;
  altStyle?: boolean;
}

const StyledLink = (props: IProps) => <Wrapper activeClassName="current" {...props} />;

export default StyledLink;
