import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
  font-size: ${props => props.theme.sizing.extraLarge};
  margin-top: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.extraSmall};
  color: ${props => props.theme.colors.primary};
  line-height: 1.3;
`;

interface IProps {
  children: string;
}

const Byline = (props: IProps) => <Wrapper {...props} />;

export default Byline;
