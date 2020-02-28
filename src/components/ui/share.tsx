import React from 'react';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton } from 'react-share';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const buttonStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.ul`
  padding: 0;
  display: flex;
`;

const IconWrapper = styled.li`
  list-style-type: none;
  margin-right: ${props => props.theme.spacing.small};
  height: 4.5rem;
  width: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: white;
  font-size: 2rem;
  border: none;
  padding: 0;
  position: relative;
  transition: background-color 200ms linear;

  button {
    ${buttonStyles}
  }

  &:last-child {
    margin-right: 0;
  }
`;

const FacebookButtonWrapper = styled(IconWrapper)`
  background-color: #3a579a;

  &:hover,
  &:focus {
    background-color: ${darken(0.1, '#3a579a')};
  }
`;

const TwitterButtonWrapper = styled(IconWrapper)`
  background-color: #00abf0;

  &:hover,
  &:focus {
    background-color: ${darken(0.1, '#00abf0')};
  }
`;

const PinterestButtonWrapper = styled(IconWrapper)`
  background-color: #c92228;

  &:hover,
  &:focus {
    background-color: ${darken(0.1, '#c92228')};
  }
`;

const EmailButtonWrapper = styled(IconWrapper)`
  background-color: #f65002;

  &:hover,
  &:focus {
    background-color: ${darken(0.1, '#f65002')};
  }
`;

const EmailShareButton = styled.a`
  ${buttonStyles}
  text-decoration: none;
  color: inherit;
`;

interface IProps {}

const Share = () => (
  <Wrapper>
    <FacebookButtonWrapper>
      <FacebookShareButton url="google.com">
        <FontAwesomeIcon icon={faFacebookF} />
      </FacebookShareButton>
    </FacebookButtonWrapper>

    <TwitterButtonWrapper>
      <TwitterShareButton url="google.com" title="title" via="@cpole">
        <FontAwesomeIcon icon={faTwitter} />
      </TwitterShareButton>
    </TwitterButtonWrapper>

    <PinterestButtonWrapper>
      <PinterestShareButton url="google.com" media="">
        <FontAwesomeIcon icon={faPinterestP} />
      </PinterestShareButton>
    </PinterestButtonWrapper>

    <IconWrapper>
      <EmailButtonWrapper>
        <EmailShareButton href="mailto:?&amp;subject=&amp;body=Check%20out%20this%20article%20from%20MorningChores%3A%20https://morningchores.com/growing-marshmallow/">
          <FontAwesomeIcon icon={faEnvelope} />
        </EmailShareButton>
      </EmailButtonWrapper>
    </IconWrapper>
  </Wrapper>
);

export default Share;
