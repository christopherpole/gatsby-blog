import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  line-height: 1.2;
  font-size: ${props => props.theme.sizing.xxl};
  margin-bottom: ${props => props.theme.spacing.large};
  text-align: center;
`;

interface IProps {
  children: string;
  className?: string;
}

const Headline = (props: IProps) => <Wrapper {...props} />;

export default Headline;
