'use client';

import DeviceTabletIcon from '@heroicons/react/24/outline/DeviceTabletIcon';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import {Box, Button, Container, Stack, Unstable_Grid2 as Grid, useTheme} from '@mui/material';
import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { useCustomization } from 'src/hooks/use-customization';
import { Layout } from 'src/layouts';
import ProfileCardAlternate
  from "../../../../../components/application-ui/progress-grid-lists/profile-card-alternate/profile-card-alternate";
import AlternateIconIndicatorsVertical
  from "../../../../../components/application-ui/stats-grid-lists/alterante-icon-indicators-vertical/alternate-icon-indicators-vertical";
import OrganizationsList
  from "../../../../../components/application-ui/description-grid-lists/organizations-list/organizations-list";
import RecentActivity from "../../../../../components/application-ui/stacked-lists/recent-activity/recent-activity";
import Tasks from "../../../../../components/application-ui/timelines/tasks/tasks";
import NavigationPills from "../../../../../components/application-ui/stacked-lists/navigation-pills/navigation-pills";
import SectionHeading, {
  BreadcrumbItem
} from "../../../../../components/application-ui/section-headings/basic/basic";
import {DesignServicesOutlined, SaveAltOutlined} from '@mui/icons-material';
import PageHeading from "../../../../../components/base/page-heading";
import {AvatarState} from "../../../../../components/base/styles/avatar";
import RecentActivityUser
  from "../../../../../components/application-ui/stacked-lists/recent-activity/recent-activity-user";
import NavigationPillsOverview from 'src/components/application-ui/stacked-lists/navigation-pills/nagigation-pills-overview';
function Page(): React.JSX.Element {
  const customization = useCustomization();
  const theme = useTheme();
  const { t } = useTranslation();
  const pageMeta = {
    title: 'Overview',
    description: 'Welcome to your dashboard',
    icon: <DeviceTabletIcon />,
  };
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/blueprints/generic-admin-dashboard/dashboards/overview'}
  ];
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
          <SectionHeading
            title={pageMeta.title}
            breadcrumbs={breadcrumbs}
            icon={<DesignServicesOutlined sx={{ mr: 1 }} />}
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
            sm: 5,
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
            <AlternateIconIndicatorsVertical/>
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
                <RecentActivityUser />
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
              <NavigationPillsOverview
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default Page;
