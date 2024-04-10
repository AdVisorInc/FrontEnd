'use client';

import DeviceTabletIcon from '@heroicons/react/24/outline/DeviceTabletIcon';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Container, Unstable_Grid2 as Grid, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ActiveServers from 'src/components/application-ui/bar-charts/active-servers/active-servers';
import ResourcesAlarm from 'src/components/application-ui/bar-charts/resources-alarm/resources-alarm';
import DatacenterClusters from 'src/components/application-ui/description-grid-lists/datacenter-clusters/datacenter-clusters';
import ServerStatus from 'src/components/application-ui/gauge-indicators/server-status/server-status';
import DataCenters from 'src/components/application-ui/image-grid-lists/data-centers/data-centers';
import HealthStatus from 'src/components/application-ui/pie-doughnut-charts/health-status/health-status';
import UsageStats from 'src/components/application-ui/pie-doughnut-charts/usage-stats/usage-stats';
import VirtualServers from 'src/components/application-ui/stacked-lists/virtual-servers/virtual-servers';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';
import { useCustomization } from 'src/hooks/use-customization';
import { Layout } from 'src/layouts';
import PlaceholderBox from "../../../../../components/base/placeholder-box";
import ProfileCard from "../../../../../components/application-ui/description-grid-lists/profile-card/profile-card";
import ProfileCardAlternate
  from "../../../../../components/application-ui/progress-grid-lists/profile-card-alternate/profile-card-alternate";
import AlternateIconIndicators
  from "../../../../../components/application-ui/stats-grid-lists/alternate-icon-indicators/alternate-icon-indicators";
import AlternateIconIndicatorsVertical
  from "../../../../../components/application-ui/stats-grid-lists/alterante-icon-indicators-vertical/alternate-icon-indicators-vertical";
import OrganizationsList
  from "../../../../../components/application-ui/description-grid-lists/organizations-list/organizations-list";
import RecentActivity from "../../../../../components/application-ui/stacked-lists/recent-activity/recent-activity";
import Tasks from "../../../../../components/application-ui/timelines/tasks/tasks";
import NavigationPills from "../../../../../components/application-ui/stacked-lists/navigation-pills/navigation-pills";

function Page(): React.JSX.Element {
  const customization = useCustomization();
  const theme = useTheme();
  const { t } = useTranslation();
  const pageMeta = {
    title: 'Overview',
    description: 'Welcome to your dashboard',
    icon: <DeviceTabletIcon />,
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
            spacing={{ xs: 2, sm: 2 }}
          >
            <Grid
              lg={8}
              xs={12}
            >
              <ProfileCardAlternate/>
            </Grid>
            <Grid
              lg={3.9999}
              xs={12}
              spacing={{ xs: 0, sm: 0}}
            >

                <AlternateIconIndicatorsVertical
                />
            </Grid>
            <Grid
              md={12}
              lg={12}
              xs={12}
            >
              <OrganizationsList
              />
            </Grid>
            <Grid
                md={6}
                lg={7}
                xs={12}

            >

                <RecentActivity />
            </Grid>
            <Grid
              md={6}
              lg={5}
              xs={12}
            >
              <Tasks
              />
            </Grid>
            <Grid xs={12}>
              <NavigationPills
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default Page;
