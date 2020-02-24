import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondaryFont};
  width: 100%;
  display: flex;
`;

const WrapperInner = styled.div`
  max-width: ${props => props.theme.maxPageWidth};
  padding: ${props => props.theme.spacing.large};
  margin: auto;
`;

const Footer = () => (
  <Wrapper>
    <WrapperInner>Footer</WrapperInner>
  </Wrapper>
);

export default Footer;
