import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { darken } from 'polished';

import Link from 'src/components/ui/link';
import IArticleSummary from 'src/types/articleSummary';
import buttonStyles from 'src/theme/styles/button';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: ${props => props.theme.spacing.large};

  &:last-child {
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled(({ spotlight, ...rest }) => <Link {...rest} />)`
  display: block;
  margin-bottom: ${props => props.theme.spacing.small};

  ${props =>
    props.spotlight &&
    props.theme.breakpoints.medium`
      margin-bottom: 0;
  `}
`;

const CopyWrapper = styled.div<{ spotlight?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  ${props =>
    props.spotlight &&
    props.theme.breakpoints.medium`
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: ${props.theme.colors.fonts.secondary};
  `}
`;

const CopyWrapperInner = styled.div<{ spotlight?: boolean }>`
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  display: flex;

  ${props =>
    props.spotlight &&
    props.theme.breakpoints.medium`
      display: block;
      flex-grow: 0;
      max-width: 75%;
      background-color: rgba(0, 0, 0, 0.8);
      padding: ${props.theme.spacing.extraLarge};
  `}

  ${props =>
    props.spotlight &&
    props.theme.breakpoints.large`
      max-width: 50%;
  `}
`;

const TitleAndDescriptionWrapper = styled.div<{ spotlight?: boolean }>`
  margin-bottom: ${props => props.theme.spacing.small};

  ${props =>
    props.spotlight &&
    props.theme.breakpoints.medium`
      margin-bottom: ${props.theme.spacing.large};
    `}
`;

const Title = styled(({ spotlight, ...rest }) => <Link {...rest} />)`
  margin-bottom: ${props => props.theme.spacing.xxs};
  font-size: ${props => props.theme.sizing.extraLarge};
  line-height: 1.3;
  font-weight: bold;
  color: inherit;

  &:hover,
  &:focus {
    color: inherit;
  }

  ${props =>
    props.spotlight &&
    props.theme.breakpoints.medium`
      line-height: 1.2;
      margin-bottom: ${props.theme.spacing.xxs};
      font-size: ${props.theme.sizing.xxl};
  `}
`;

const PublishedOn = styled.p<{ spotlight?: boolean }>`
  font-size: ${props => props.theme.sizing.medium};
  margin-bottom: ${props => props.theme.spacing.small};
  color: ${props => props.theme.colors.fonts.tertiary};

  ${props =>
    props.spotlight &&
    props.theme.breakpoints.medium`
      margin-bottom: ${props.theme.spacing.medium};
      font-size: ${props.theme.sizing.medium};
      color: ${darken(0.3, props.theme.colors.fonts.secondary)};
  `}
`;

const Description = styled.p``;

const StyledLink = styled(({ spotlight, ...rest }) => <Link {...rest} />)`
  ${props =>
    props.spotlight &&
    props.theme.breakpoints.medium`
      ${buttonStyles};
      border: 2px solid white;
      background-color: transparent;
      transition-property: color, background-color;
      
      &:hover,
      &:focus {
        background-color: white;
        color: black;
      }
    `}
`;

const ArrowWrapper = styled.span<{ spotlight?: boolean }>`
  ${props =>
    props.spotlight &&
    props.theme.breakpoints.medium`
      display: none;
    `}
`;

interface IProps extends IArticleSummary {
  spotlight?: boolean;
}

const Article = ({ spotlight, title, description, thumbnail, slug, createdAt }: IProps) => (
  <Wrapper>
    <ImageWrapper aria-label="Visit article" spotlight={spotlight} to={`/article/${slug}`}>
      <Img fluid={thumbnail.fluid} />
    </ImageWrapper>

    <CopyWrapper spotlight={spotlight}>
      <CopyWrapperInner spotlight={spotlight}>
        <TitleAndDescriptionWrapper spotlight={spotlight}>
          <Title spotlight={spotlight} to={`/article/${slug}`}>
            {title}
          </Title>
          <PublishedOn spotlight={spotlight}>{createdAt}</PublishedOn>
          <Description>{description}</Description>
        </TitleAndDescriptionWrapper>

        <StyledLink spotlight={spotlight} to={`/article/${slug}`}>
          <span>
            Read more <ArrowWrapper spotlight={spotlight}>→</ArrowWrapper>
          </span>
        </StyledLink>
      </CopyWrapperInner>
    </CopyWrapper>
  </Wrapper>
);

export default Article;
