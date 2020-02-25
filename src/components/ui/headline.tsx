import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1``;

interface IProps {
  children: string;
}

const Headline = ({ children }: IProps) => <Wrapper>{children}</Wrapper>;

export default Headline;
