import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
  margin-bottom: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.primary};
`;

interface IProps {
  children: string;
}

const Byline = (props: IProps) => <Wrapper {...props} />;

export default Byline;
