'use client';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Container } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductDetails from 'src/components/application-ui/content-shells/product-details/product-details';
import PageHeading from 'src/components/base/page-heading';
import { useCustomization } from 'src/hooks/use-customization';
import { Layout } from 'src/layouts';

function Page(): React.JSX.Element {
  const customization = useCustomization();
  const { t } = useTranslation();
  const pageMeta = {
    title: 'Product Details',
    description: 'View detailed information on products',
  };
  return (
    <>
      {pageMeta.title && (
        <Container
          sx={{
            py: {
              xs: 2,
              sm: 3,
            },
          }}
          maxWidth={customization.stretch ? false : 'xl'}
        >
          <PageHeading
            sx={{
              px: 0,
            }}
            title={t(pageMeta.title)}
            description={pageMeta.description && pageMeta.description}
            actions={
              <>
                <Button
                  sx={{
                    mt: {
                      xs: 2,
                      md: 0,
                    },
                  }}
                  variant="contained"
                  startIcon={<FileDownloadOutlinedIcon fontSize="small" />}
                >
                  {t('Export')}
                </Button>
              </>
            }
          />
        </Container>
      )}
      <Box
        pb={{
          xs: 2,
          sm: 3,
        }}
      >
        <Container maxWidth={customization.stretch ? false : 'xl'}>
          <ProductDetails />
        </Container>
      </Box>
    </>
  );
}
export default Page;
