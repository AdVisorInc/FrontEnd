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

function Page(): React.JSX.Element {
  const customization = useCustomization();
  const theme = useTheme();
  const { t } = useTranslation();
  const pageMeta = {
    title: 'Monitoring',
    description: 'Monitor systems and operations in real-time',
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
            spacing={{
              xs: 2,
              sm: 3,
            }}
          >
            <Grid xs={12}>
              <ServerStatus />
            </Grid>
            <Grid
              xs={12}
              lg={7}
            >
              <HealthStatus />
            </Grid>
            <Grid
              xs={12}
              lg={5}
            >
              <ResourcesAlarm />
            </Grid>
            <Grid xs={12}>
              <DatacenterClusters />
            </Grid>
            <Grid xs={12}>
              <ActiveServers />
            </Grid>
            <Grid xs={12}>
              <VirtualServers />
            </Grid>
            <Grid
              xs={12}
              lg={5}
            >
              <DataCenters />
            </Grid>
            <Grid
              xs={12}
              lg={7}
            >
              <UsageStats />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default Page;
