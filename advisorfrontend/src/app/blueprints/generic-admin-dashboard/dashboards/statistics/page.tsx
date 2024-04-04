'use client';

import ChartPieIcon from '@heroicons/react/24/outline/ChartPieIcon';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Container, Unstable_Grid2 as Grid, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import WatchList from 'src/components/application-ui/area-charts/watch-list/watch-list';
import AvatarGroupsDetailsAccent from 'src/components/application-ui/data-grid-lists/avatar-groups-details-accent/avatar-groups-details-accent';
import ProfileNavigationBlocks from 'src/components/application-ui/description-grid-lists/profile-navigation-blocks/profile-navigation-blocks';
import NavigationCards from 'src/components/application-ui/icon-grid-lists/navigation-cards/navigation-cards';
import TopGrossing from 'src/components/application-ui/stacked-lists/top-grossing/top-grossing';
import TopTrainers from 'src/components/application-ui/stacked-lists/top-trainers/top-trainers';
import ActiveSubscriptions from 'src/components/application-ui/stats-grid-lists/active-subscriptions/active-subscriptions';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';
import { useCustomization } from 'src/hooks/use-customization';
import { Layout } from 'src/layouts';

function Page(): React.JSX.Element {
  const customization = useCustomization();
  const theme = useTheme();
  const { t } = useTranslation();
  const pageMeta = {
    title: 'Statistics',
    description: 'View statistics and data trends',
    icon: <ChartPieIcon />,
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
              <NavigationCards />
            </Grid>
            <Grid xs={12}>
              <WatchList />
            </Grid>
            <Grid
              xs={12}
              lg={7}
            >
              <ActiveSubscriptions />
            </Grid>
            <Grid
              xs={12}
              lg={5}
            >
              <TopTrainers />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <ProfileNavigationBlocks />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TopGrossing />
            </Grid>
            <Grid xs={12}>
              <AvatarGroupsDetailsAccent />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default Page;
