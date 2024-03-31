'use client';

import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Container, Unstable_Grid2 as Grid, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SalesAlerts from 'src/components/application-ui/area-charts/sales-alerts/sales-alerts';
import WeeklySales from 'src/components/application-ui/area-charts/weekly-sales/weekly-sales';
import NumbersIconsCardsAccent from 'src/components/application-ui/data-grid-lists/numbers-icons-cards-accent/numbers-icons-cards-accent';
import RevenueProgress from 'src/components/application-ui/horizontal-lists/revenue-progress/revenue-progress';
import UserAnalyticsProgress from 'src/components/application-ui/progress-grid-lists/user-analytics/user-analytics';
import SalesSparklines from 'src/components/application-ui/sparkline-charts/sales-sparklines/sales-sparklines';
import OrdersList from 'src/components/application-ui/tables/orders-list/orders-list';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';
import { useCustomization } from 'src/hooks/use-customization';
import { Layout } from 'src/layouts';

function Page(): React.JSX.Element {
  const customization = useCustomization();
  const theme = useTheme();
  const { t } = useTranslation();
  const pageMeta = {
    title: 'Reports',
    description: 'Generate and access various reports',
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
              <SalesAlerts />
            </Grid>
            <Grid
              xs={12}
              lg={6}
              xl={7}
            >
              <UserAnalyticsProgress />
            </Grid>
            <Grid
              xs={12}
              lg={6}
              xl={5}
            >
              <WeeklySales />
            </Grid>
            <Grid xs={12}>
              <OrdersList />
            </Grid>
            <Grid xs={12}>
              <SalesSparklines />
            </Grid>
            <Grid xs={12}>
              <RevenueProgress />
            </Grid>
            <Grid xs={12}>
              <NumbersIconsCardsAccent />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default Page;
