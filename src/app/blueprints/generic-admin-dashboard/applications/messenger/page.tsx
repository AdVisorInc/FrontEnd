'use client';

import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Messenger from 'src/components/application-ui/content-shells/messenger/messenger';
import { Layout } from 'src/layouts';

function Page(): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Box
        p={{
          xs: 2,
          sm: 3,
        }}
      >
        <Typography variant="h3">{t('Messenger')}</Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
        >
          {t('Customize the chat layout and appearance to suit your brand')}
        </Typography>
      </Box>
      <Divider />
      <Messenger />
    </>
  );
}
export default Page;
