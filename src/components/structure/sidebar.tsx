import React from 'react';
import styled from 'styled-components';

import NewsLetter from 'src/components/structure/newsletter';

const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.small};
`;

const Sidebar = () => (
  <Wrapper>
    <NewsLetter />
  </Wrapper>
);

export default Sidebar;
