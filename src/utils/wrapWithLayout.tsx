import React from 'react';

import Layout from 'src/components/structure/layout';

interface IProps {
  element: React.ReactNode;
}

export default ({ element }: IProps) => <Layout>{element}</Layout>;
