import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

interface IProps {
  to: string;
  children: React.ReactNode;
}

const StyledLink = (props: IProps) => <Wrapper {...props} />;

export default StyledLink;
