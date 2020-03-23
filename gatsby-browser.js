import LogRocket from 'logrocket';

import wrapWithProviders from './src/utils/wrapWithProviders';
import wrapWithLayout from './src/utils/wrapWithLayout';

export const wrapRootElement = wrapWithProviders;
export const wrapPageElement = wrapWithLayout;

export const onClientEntry = () => {
  //  Setup Loggly
  if (process.env.NODE_ENV === 'production') {
    LogRocket.init(
      `${process.env.GATSBY_LOGROCKET_ACCOUNT_ID}/${process.env.GATSBY_LOGROCKET_PROJECT_NAME}`,
    );
  }
};
