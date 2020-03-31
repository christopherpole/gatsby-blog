import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Button from 'src/components/ui/button';
import Link from 'src/components/ui/link';

const Wrapper = styled.div<{ showing: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.background};
  border-top: 1px solid ${props => props.theme.colors.border};
  box-shadow: 0 -0.1rem 0.3rem 0 rgba(0, 0, 0, 0.1);
  max-height: 0;
  font-size: ${props => props.theme.sizing.small};
  transition: ${props =>
    `max-height ${props.theme.transitions.duration} ${props.theme.transitions.easing}`};

  ${props =>
    props.showing &&
    css`
      /* @FIXME - another hack :( */
      max-height: 8.5rem;

      ${props.theme.breakpoints.medium`
        max-height: 7rem;
      `}
    `};
`;

const WrapperInner = styled.div`
  display: flex;
  align-items: center;
  max-width: ${props => props.theme.maxPageWidth};
  margin: auto;
  padding: ${props => props.theme.spacing.extraSmall} ${props => props.theme.spacing.large};
`;

const Copy = styled.p`
  margin-bottom: 0;
  margin-right: ${props => props.theme.spacing.medium};

  ${props => props.theme.breakpoints.medium`
    margin-right: ${props.theme.spacing.large};
  `}
`;

const CookiesNotification = () => {
  const [showing, setShowing] = useState<boolean>(false);

  useEffect(() => {
    const hideCookieNotification = localStorage.getItem('hideCookieNotification');

    if (!hideCookieNotification) {
      setTimeout(() => {
        setShowing(true);
      }, 2000);
    }
  }, []);

  const closeNotification = () => {
    localStorage.setItem('hideCookieNotification', 'true');
    setShowing(false);
  };

  return (
    <Wrapper showing={showing}>
      <WrapperInner>
        <Copy>
          This site uses cookies. By continuing to use this site or clicking &quot;I agree&quot;,
          you agree to the use of cookies. Read our <Link to="/privacy">privacy policy</Link> for
          more information.
        </Copy>
        <Button onClick={closeNotification} type="button">
          I agree
        </Button>
      </WrapperInner>
    </Wrapper>
  );
};

export default CookiesNotification;
