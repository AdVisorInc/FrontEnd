'use client';

import CalendarIcon from '@heroicons/react/24/outline/CalendarIcon';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Container, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Calendar from 'src/components/application-ui/content-shells/calendar/calendar';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';
import { useCustomization } from 'src/hooks/use-customization';
import { Layout } from 'src/layouts';

function Page(): React.JSX.Element {
  const customization = useCustomization();
  const theme = useTheme();
  const { t } = useTranslation();
  const pageMeta = {
    title: 'Calendar',
    description: 'Organize your schedule and events',
    icon: <CalendarIcon />,
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
            iconBox={
              pageMeta.icon && (
                <AvatarState
                  isSoft
                  variant="rounded"
                  state="primary"
                  sx={{
                    height: theme.spacing(7),
                    width: theme.spacing(7),
                    svg: {
                      height: theme.spacing(4),
                      width: theme.spacing(4),
                      minWidth: theme.spacing(4),
                    },
                  }}
                >
                  {pageMeta.icon}
                </AvatarState>
              )
            }
          />
        </Container>
      )}
      <Box
        px={{
          xs: 2,
          sm: 3,
        }}
        pb={{
          xs: 2,
          sm: 3,
        }}
      >
        <Calendar />
      </Box>
    </>
  );
}
export default Page;
