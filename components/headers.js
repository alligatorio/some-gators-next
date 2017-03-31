import React from 'react';
import Head  from 'next/head';

export default ({title}) => {
  return <Head>
      <title>{title}</title>
      <link rel="stylesheet" href="static/styles.css" />
    </Head>
}
