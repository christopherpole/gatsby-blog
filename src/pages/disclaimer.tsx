import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from 'src/components/structure/seo';
import Headline from 'src/components/ui/headline';
import Byline from 'src/components/ui/byline';

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Wrapper = styled.div``;

const DisclaimerPage = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(query);

  return (
    <Wrapper>
      <SEO title="Affiliate disclaimer" pathname="/disclaimer" />
      <Headline>Affiliate disclaimer</Headline>

      <Byline>General Disclaimer</Byline>
      <p>
        Some of the posts on this site may contain links to products or services that will earn me a
        commission if any decide to make any purchases on that site. That said, I would only promote
        things that I have personally investigated and genuinely believe would be of value to you.
      </p>

      <p>
        Any product reviews on this site have been purchased by myself (unless explicitly stated
        otherwise), and will be fair and balanced regardless of wether I am affiliated with it or
        not. Aside from affiliate commissions, I do not receive any other incentives&mdash;monetary
        or otherwise&mdash;from reviews, placements, or links on the site!
      </p>

      <Byline>Amazon Affiliate Disclaimer</Byline>
      <p>
        {title} is a participant in the Amazon Services LLC Associates Program, an affiliate
        advertising program designed to provide a means for sites to earn advertising fees by
        advertising and linking to amazon.com. Amazon, the Amazon logo, AmazonSupply, and the
        AmazonSupply logo are trademarks of Amazon.com, Inc. or its affiliates.
      </p>
    </Wrapper>
  );
};

export default DisclaimerPage;
