import Head from 'next/head';
import PropTypes from 'prop-types';
import type { FC } from 'react';

interface HelmetProps {
  heading?: string;
}

export const Helmet: FC<HelmetProps> = (props) => {
  const { heading } = props;

  const pageTitle = heading ? heading + ' - AdVisor' : 'AdVisor - AI-Powered Marketing Optimization Platform';

  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
};

Helmet.propTypes = {
  heading: PropTypes.string,
};
