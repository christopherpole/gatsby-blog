import React from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
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
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: white;
  font-size: 2rem !important;
  border: none;
  padding: 0;
  position: relative;
  display: flex;
  transition: background-color ${props => props.theme.transitions.duration}
    ${props => props.theme.transitions.easing};
`;

const Wrapper = styled.ul`
  padding: 0;
  display: inline-flex;
`;

const IconWrapper = styled.li`
  list-style-type: none;
  margin-right: ${props => props.theme.spacing.extraSmall};

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

//  Track the event. We don't actually have to return a Promise here!
const trackEvent = (source: string) => {
  trackCustomEvent({
    category: 'Share buttons',
    action: 'Click',
    label: `${source} button`,
  });
};

const Share = ({ url, title, media }: IProps) => (
  <Wrapper>
    <IconWrapper>
      <FacebookButton
        url={url}
        quote={title}
        beforeOnClick={
          (() => {
            trackEvent('Facebook');
          }) as () => Promise<void>
        }
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </FacebookButton>
    </IconWrapper>

    <IconWrapper>
      <TwitterButton
        url={url}
        title={title}
        beforeOnClick={
          (() => {
            trackEvent('Twitter');
          }) as () => Promise<void>
        }
      >
        <FontAwesomeIcon icon={faTwitter} />
      </TwitterButton>
    </IconWrapper>

    <IconWrapper>
      <PinterestButton
        url={url}
        media={media}
        description={title}
        beforeOnClick={
          (() => {
            trackEvent('Pinterest');
          }) as () => Promise<void>
        }
      >
        <FontAwesomeIcon icon={faPinterestP} />
      </PinterestButton>
    </IconWrapper>

    <IconWrapper>
      <EmailButton
        href={`mailto:?Subject=${title}&body=Check%20out%20this%20article%3A%20${url}`}
        aria-label="Share via email"
        onClick={() => {
          trackEvent('Email');
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </EmailButton>
    </IconWrapper>
  </Wrapper>
);

export default Share;
