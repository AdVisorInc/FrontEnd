'use client';

import BuildingOfficeIcon from '@heroicons/react/24/outline/BuildingOfficeIcon';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Container, Unstable_Grid2 as Grid, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import DoctorProfile from 'src/components/application-ui/description-grid-lists/doctor-profile/doctor-profile';
import PrescriptionRequests from 'src/components/application-ui/description-grid-lists/prescriptions-requests/prescriptions-requests';
import RevenueBlock from 'src/components/application-ui/description-grid-lists/revenue-block/revenue-block';
import TwoColumnStats from 'src/components/application-ui/horizontal-lists/stats-blocks/two-column';
import AccountVerification from 'src/components/application-ui/icon-grid-lists/account-verification/account-verification';
import HospitalStatus from 'src/components/application-ui/line-charts/hospital-status/hospital-status';
import HealthcareStatus from 'src/components/application-ui/pie-doughnut-charts/healthcare-status/healthcare-status';
import HospitalDepartments from 'src/components/application-ui/pie-doughnut-charts/hospital-departments/hospital-departments';
import PatientNotifications from 'src/components/application-ui/stacked-lists/patient-notifications/patient-notifications';
import RecentPatients from 'src/components/application-ui/tables/recent-patients/recent-patients';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';
import { useCustomization } from 'src/hooks/use-customization';
import { Layout } from 'src/layouts';

function Page(): React.JSX.Element {
  const customization = useCustomization();
  const theme = useTheme();
  const { t } = useTranslation();
  const pageMeta = {
    title: 'Hospital',
    description: 'Manage hospital operations and patient data',
    icon: <BuildingOfficeIcon />,
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
              <AccountVerification />
            </Grid>
            <Grid xs={12}>
              <RecentPatients />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <DoctorProfile />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <HealthcareStatus />
            </Grid>
            <Grid
              xs={12}
              xl={8}
              container
              spacing={{
                xs: 2,
                sm: 3,
              }}
            >
              <Grid xs={12}>
                <HospitalDepartments />
              </Grid>
              <Grid xs={12}>
                <TwoColumnStats />
              </Grid>
            </Grid>
            <Grid
              xs={12}
              xl={4}
              container
              spacing={{
                xs: 2,
                sm: 3,
              }}
            >
              <Grid
                xs={12}
                md={6}
                xl={12}
              >
                <RevenueBlock />
              </Grid>
              <Grid
                xs={12}
                md={6}
                xl={12}
              >
                <HospitalStatus />
              </Grid>
            </Grid>
            <Grid
              xs={12}
              lg={5}
            >
              <PatientNotifications />
            </Grid>
            <Grid
              xs={12}
              lg={7}
            >
              <PrescriptionRequests />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default Page;
