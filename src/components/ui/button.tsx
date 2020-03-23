import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import buttonStyles from 'src/theme/styles/button';

interface IProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  submitting?: boolean;
  altStyle?: boolean;
}

const Wrapper = styled(({ altStyle, submitting, ...rest }: IProps) => <button {...rest} />)`
  ${buttonStyles};

  ${props =>
    props.submitting &&
    css`
      pointer-events: none;
      cursor: normal;
    `}
`;

const LoadingIconContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.sizing.large};
`;

const Text = styled.span<{ isShowing?: boolean }>`
  ${props =>
    props.isShowing &&
    css`
      color: transparent;
    `}
`;

const Button = (props: IProps) => (
  <Wrapper {...props}>
    <Text isShowing={props.submitting}>{props.children}</Text>
    {props.submitting && (
      <LoadingIconContainer>
        <FontAwesomeIcon icon={faCircleNotch} spin />
      </LoadingIconContainer>
    )}
  </Wrapper>
);

export default Button;
