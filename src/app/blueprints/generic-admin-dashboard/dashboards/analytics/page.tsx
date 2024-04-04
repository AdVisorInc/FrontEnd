'use client';

import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Container, Unstable_Grid2 as Grid, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ComposedGauge from 'src/components/application-ui/composed-visualization-blocks/composed-gauge/composed-gauge';
import TopAgents1 from 'src/components/application-ui/description-grid-lists/top-agents/top-agents';
import ConversionsGauge from 'src/components/application-ui/gauge-indicators/conversions-gauge/conversions-gauge';
import AudienceOverview from 'src/components/application-ui/line-charts/audience-overview/audience-overview';
import LandingPages from 'src/components/application-ui/stacked-lists/landing-pages/landing-pages';
import AccentIconIndicators from 'src/components/application-ui/stats-grid-lists/accent-icon-indicators/accent-icon-indicators';
import Wallets from 'src/components/application-ui/stats-grid-lists/wallets/wallets';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';
import { useCustomization } from 'src/hooks/use-customization';
import { Layout } from 'src/layouts';

function Page(): React.JSX.Element {
  const customization = useCustomization();
  const theme = useTheme();
  const { t } = useTranslation();
  const pageMeta = {
    title: 'Analytics',
    description: 'Delve into analytics and performance metrics',
    icon: <ChartBarIcon />,
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
      <Container
        disableGutters
        maxWidth={customization.stretch ? false : 'xl'}
      >
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
          <Grid
            container
            spacing={{
              xs: 2,
              sm: 3,
            }}
          >
            <Grid xs={12}>
              <AccentIconIndicators />
            </Grid>
            <Grid xs={12}>
              <AudienceOverview />
            </Grid>
            <Grid xs={12}>
              <Wallets />
            </Grid>
            <Grid xs={12}>
              <TopAgents1 />
            </Grid>
            <Grid xs={12}>
              <ComposedGauge />
            </Grid>
            <Grid
              xs={12}
              xl={7}
            >
              <LandingPages />
            </Grid>
            <Grid
              xs={12}
              xl={5}
            >
              <ConversionsGauge />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default Page;
