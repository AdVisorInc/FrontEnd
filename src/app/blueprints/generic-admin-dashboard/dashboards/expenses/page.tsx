'use client';

import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Container, Unstable_Grid2 as Grid, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import FinancialStatus from 'src/components/application-ui/composed-visualization-blocks/financial-status/financial-status';
import GaugeIndicators from 'src/components/application-ui/gauge-indicators/gauge-indicators/gauge-indicators';
import AccountBalance from 'src/components/application-ui/pie-doughnut-charts/account-balance/account-balance';
import CryptoWatchlist from 'src/components/application-ui/sparkline-charts/crypto-watchlist/crypto-watchlist';
import RecentActivity from 'src/components/application-ui/stacked-lists/recent-activity/recent-activity';
import TransactionsList from 'src/components/application-ui/tables/transactions-list/transactions-list';
import WeeklySales from 'src/components/application-ui/tables/weekly-sales/weekly-sales';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';
import { useCustomization } from 'src/hooks/use-customization';
import { Layout } from 'src/layouts';

function Page(): React.JSX.Element {
  const customization = useCustomization();
  const theme = useTheme();
  const { t } = useTranslation();
  const pageMeta = {
    title: 'Expenses',
    description: 'Track and analyze your expenses',
    icon: <CurrencyDollarIcon />,
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
              <AccountBalance />
            </Grid>
            <Grid xs={12}>
              <FinancialStatus />
            </Grid>
            <Grid xs={12}>
              <WeeklySales />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TransactionsList />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <RecentActivity />
            </Grid>
            <Grid xs={12}>
              <GaugeIndicators />
            </Grid>
            <Grid xs={12}>
              <CryptoWatchlist />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default Page;
