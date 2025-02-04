import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Link from 'src/components/ui/link';
import SEO from 'src/components/structure/seo';
import Headline from 'src/components/ui/headline';
import Byline from 'src/components/ui/byline';
import linkStyle from 'src/theme/styles/link';

const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;

const Wrapper = styled.div``;

const StyledOutboundLink = styled(OutboundLink)`
  ${linkStyle}
`;

const PrivacyPage = () => {
  const {
    site: {
      siteMetadata: { title, siteUrl },
    },
  } = useStaticQuery(query);

  return (
    <Wrapper>
      <SEO title="Privacy Policy" pathname="/privacy" />

      <Headline>Privacy Policy</Headline>

      <p>
        At {title}, accessible from {siteUrl}, one of our main priorities is the privacy of our
        visitors. This Privacy Policy document contains types of information that is collected and
        recorded by {title} and how we use it.
      </p>

      <p>
        If you have additional questions or require more information about our Privacy Policy, do
        not hesitate to contact us.
      </p>

      <Byline>General Data Protection Regulation (GDPR)</Byline>
      <p>We are a Data Controller of your information.</p>

      <p>
        {title} legal basis for collecting and using the personal information described in this
        Privacy Policy depends on the Personal Information we collect and the specific context in
        which we collect the information:
      </p>

      <ul>
        <li>{title} needs to perform a contract with you</li>
        <li>You have given {title} permission to do so</li>
        <li>Processing your personal information is in {title}&apos; legitimate interests</li>
        <li>{title} needs to comply with the law</li>
      </ul>

      <p>
        {title} will retain your personal information only for as long as is necessary for the
        purposes set out in this Privacy Policy. We will retain and use your information to the
        extent necessary to comply with our legal obligations, resolve disputes, and enforce our
        policies. Our Privacy Policy was generated with the help of{' '}
        <StyledOutboundLink target="_blank" href="https://www.gdprprivacynotice.com/">
          GDPR Privacy Policy Generator
        </StyledOutboundLink>{' '}
        and the{' '}
        <StyledOutboundLink target="_blank" href="https://www.privacypolicygenerator.org">
          Privacy Policy Generator
        </StyledOutboundLink>
        .
      </p>

      <p>
        If you are a resident of the European Economic Area (EEA), you have certain data protection
        rights. If you wish to be informed what Personal Information we hold about you and if you
        want it to be removed from our systems, please contact us.
      </p>

      <p>In certain circumstances, you have the following data protection rights:</p>

      <ul>
        <li>The right to access, update or to delete the information we have on you.</li>
        <li>The right of rectification.</li>
        <li>The right to object.</li>
        <li>The right of restriction.</li>
        <li>The right to data portability</li>
        <li>The right to withdraw consent</li>
      </ul>

      <Byline>Log Files</Byline>

      <p>
        {title} follows a standard procedure of using log files. These files log visitors when they
        visit websites. All hosting companies do this and a part of hosting services&apos;
        analytics. The information collected by log files include internet protocol (IP) addresses,
        browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages,
        and possibly the number of clicks. These are not linked to any information that is
        personally identifiable. The purpose of the information is for analyzing trends,
        administering the site, tracking users&apos; movement on the website, and gathering
        demographic information.
      </p>

      <Byline>Cookies and Web Beacons</Byline>

      <p>
        Like any other website, {title} uses &quot;cookies&quot;. These cookies are used to store
        information including visitors&apos; preferences, and the pages on the website that the
        visitor accessed or visited. The information is used to optimize the users&apos; experience
        by customizing our web page content based on visitors&apos; browser type and/or other
        information.
      </p>

      <p>
        For more general information on cookies, please read{' '}
        <StyledOutboundLink target="_blank" href="https://www.cookieconsent.com/what-are-cookies/">
          &quot;What Are Cookies&quot;
        </StyledOutboundLink>
        .
      </p>

      <Byline>Google DoubleClick DART Cookie</Byline>

      <p>
        Google is one of a third-party vendor on our site. It also uses cookies, known as DART
        cookies, to serve ads to our site visitors based upon their visit to www.website.com and
        other sites on the internet. However, visitors may choose to decline the use of DART cookies
        by visiting the Google ad and content network Privacy Policy at the following URL:{' '}
        <StyledOutboundLink target="_blank" href="https://policies.google.com/technologies/ads">
          https://policies.google.com/technologies/ads
        </StyledOutboundLink>
      </p>

      <Byline>Privacy Policies</Byline>

      <p>
        You may consult this list to find the Privacy Policy for each of the advertising partners of
        {title}.
      </p>

      <p>
        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web
        Beacons that are used in their respective advertisements and links that appear on
        {title}, which are sent directly to users&apos; browser. They automatically receive your IP
        address when this occurs. These technologies are used to measure the effectiveness of their
        advertising campaigns and/or to personalize the advertising content that you see on websites
        that you visit.
      </p>

      <p>
        Note that {title} has no access to or control over these cookies that are used by
        third-party advertisers.
      </p>

      <Byline>Third Party Privacy Policies</Byline>

      <p>
        {title}&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are
        advising you to consult the respective Privacy Policies of these third-party ad servers for
        more detailed information. It may include their practices and instructions about how to
        opt-out of certain options. You may find a complete list of these Privacy Policies and their
        links here: Privacy Policy Links.
      </p>

      <p>
        You can choose to disable cookies through your individual browser options. To know more
        detailed information about cookie management with specific web browsers, it can be found at
        the browsers&apos; respective websites.
      </p>

      <Byline>Children&apos;s Information</Byline>

      <p>
        Another part of our priority is adding protection for children while using the internet. We
        encourage parents and guardians to observe, participate in, and/or monitor and guide their
        online activity.
      </p>

      <p>
        {title} does not knowingly collect any Personal Identifiable Information from children under
        the age of 13. If you think that your child provided this kind of information on our
        website, we strongly encourage you to contact us immediately and we will do our best efforts
        to promptly remove such information from our records.
      </p>

      <Byline>Online Privacy Policy Only</Byline>

      <p>
        Our Privacy Policy applies only to our online activities and is valid for visitors to our
        website with regards to the information that they shared and/or collect in {title}. This
        policy is not applicable to any information collected offline or via channels other than
        this website.
      </p>

      <Byline>Consent</Byline>

      <p>
        By using our website, you hereby consent to our Privacy Policy and agree to its{' '}
        <Link to="/terms">terms.</Link>
      </p>
    </Wrapper>
  );
};

export default PrivacyPage;
