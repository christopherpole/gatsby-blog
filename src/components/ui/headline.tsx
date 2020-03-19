import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1``;

interface IProps {
  children: string;
  className?: string;
}

const Headline = (props: IProps) => <Wrapper {...props} />;

export default Headline;
