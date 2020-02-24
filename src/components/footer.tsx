import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  background-color: red;
  width: 100%;
  display: flex;
`;

const WrapperInner = styled.div`
  max-width: ${props => props.theme.maxPageWidth};
  padding: ${props => props.theme.spacing.large};
  margin: auto;
  width: 100%;
`;

const Footer = () => (
  <Wrapper>
    <WrapperInner>Footer</WrapperInner>
  </Wrapper>
);

export default Footer;
