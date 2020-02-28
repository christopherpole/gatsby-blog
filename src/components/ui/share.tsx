import React from 'react';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton } from 'react-share';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const buttonStyles = css`
  color: #fff !important;
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
`;

const Wrapper = styled.ul`
  padding: 0;
  display: flex;
`;

const IconWrapper = styled.li`
  list-style-type: none;
  margin-right: ${props => props.theme.spacing.small};

  &:last-child {
    margin-right: 0;
  }
`;

//  POS sharing library
const FacebookButton = styled(FacebookShareButton)`
  ${buttonStyles}
  background-color: #3a579a !important;

  &:hover,
  &:focus {
    background-color: ${darken(0.1, '#3a579a')}!important;
  }
`;

const TwitterButton = styled(TwitterShareButton)`
  ${buttonStyles}
  background-color: #00abf0!important;

  &:hover,
  &:focus {
    background-color: ${darken(0.1, '#00abf0')}!important;
  }
`;

const PinterestButton = styled(PinterestShareButton)`
  ${buttonStyles}
  background-color: #c92228!important;

  &:hover,
  &:focus {
    background-color: ${darken(0.1, '#c92228')}!important;
  }
`;

const EmailButton = styled.a`
  ${buttonStyles}
  background-color: #f65002!important;

  &:hover,
  &:focus {
    background-color: ${darken(0.1, '#f65002')}!important;
  }
`;

interface IProps {
  url: string;
  title: string;
  media: string;
}

const Share = ({ url, title, media }: IProps) => (
  <Wrapper>
    <IconWrapper>
      <FacebookButton url={url} quote={title}>
        <FontAwesomeIcon icon={faFacebookF} />
      </FacebookButton>
    </IconWrapper>

    <IconWrapper>
      <TwitterButton url={url} title={title}>
        <FontAwesomeIcon icon={faTwitter} />
      </TwitterButton>
    </IconWrapper>

    <IconWrapper>
      <PinterestButton url={url} media={media} description={title}>
        <FontAwesomeIcon icon={faPinterestP} />
      </PinterestButton>
    </IconWrapper>

    <IconWrapper>
      <EmailButton href={`mailto:?Subject=${title}&body=Check%20out%20this%20article%3A%20${url}`}>
        <FontAwesomeIcon icon={faEnvelope} />
      </EmailButton>
    </IconWrapper>
  </Wrapper>
);

export default Share;
