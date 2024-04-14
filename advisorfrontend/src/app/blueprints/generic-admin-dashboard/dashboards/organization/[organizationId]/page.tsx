'use client';

import DeviceTabletIcon from '@heroicons/react/24/outline/DeviceTabletIcon';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Container, Unstable_Grid2 as Grid, useTheme } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { useCustomization } from 'src/hooks/use-customization';
import { Layout } from 'src/layouts';
import MultiPanel
  from "../../../../../../components/application-ui/composed-blocks/multi-panel/multi-panel";
import SectionHeading, {
  BreadcrumbItem
} from "../../../../../../components/application-ui/section-headings/basic/basic";
import {DesignServicesOutlined} from "@mui/icons-material";
import {useParams} from "next/navigation";
import {useDispatch, useSelector} from "../../../../../../store";
import {router} from "next/client";
import {
  fetchOrganizationData,
  fetchUserOrganizations,
  setSelectedOrganization
} from "../../../../../../slices/organization";
import {useRouter} from "../../../../../../hooks/use-router";
const OrganizationPage: React.FC = () => {
  const params = useParams();
  const organizationId = params.organizationId as string;
  const selectedOrganization = useSelector((state) => state.organization.selectedOrganization);
  const dispatch = useDispatch();
  const customization = useCustomization();
  const theme = useTheme();
  const organizations = useSelector((state) => state.organization.organizations);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchUserOrganizations());
  }, [dispatch]);

  useEffect(() => {
    if (organizationId) {
      dispatch(setSelectedOrganization(organizationId));
    }
  }, [dispatch, organizationId]);

  const handleOrganizationChange = (organizationId: string) => {
    dispatch(setSelectedOrganization(organizationId));
    router.push(`/blueprints/generic-admin-dashboard/dashboards/organization/${organizationId}`);
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/blueprints/generic-admin-dashboard/dashboards/overview' },
    {
      label: 'Organization',
      href: `/blueprints/generic-admin-dashboard/dashboards/organization/${selectedOrganization}`,
      options: organizations,
      selectedOption: selectedOrganization,
      onOptionChange: handleOrganizationChange,
    },
  ];
  const pageMeta = {
    title: 'Organization',
    description: 'Something',
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
              <MultiPanel/>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default OrganizationPage;
