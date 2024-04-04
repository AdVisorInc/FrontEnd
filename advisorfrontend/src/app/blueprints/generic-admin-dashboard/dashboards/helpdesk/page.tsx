'use client';

import LifebuoyIcon from '@heroicons/react/24/outline/LifebuoyIcon';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Container, Unstable_Grid2 as Grid, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import RecentQuestions from 'src/components/application-ui/description-grid-lists/recent-questions/recent-questions';
import MonthlyGoals from 'src/components/application-ui/gauge-indicators/monthly-goals/monthly-goals';
import RecentCustomers from 'src/components/application-ui/gauge-indicators/recent-customers/recent-customers';
import HelpdeskStatus from 'src/components/application-ui/line-charts/helpdesk-status/helpdesk-status';
import CustomerSatisfaction from 'src/components/application-ui/pie-doughnut-charts/customer-satisfaction/customer-satisfaction';
import MonthlyComparison from 'src/components/application-ui/stats-grid-lists/monthly-comparison/monthly-comparison';
import PendingTickets from 'src/components/application-ui/tables/pending-tickets/pending-tickets';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';
import { useCustomization } from 'src/hooks/use-customization';
import { Layout } from 'src/layouts';

function Page(): React.JSX.Element {
  const customization = useCustomization();
  const theme = useTheme();
  const { t } = useTranslation();
  const pageMeta = {
    title: 'Helpdesk',
    description: 'Support ticketing and customer service interface',
    icon: <LifebuoyIcon />,
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
            <Grid
              xs={12}
              xl={7}
              container
              spacing={{
                xs: 2,
                sm: 3,
              }}
            >
              <Grid xs={12}>
                <HelpdeskStatus />
              </Grid>
              <Grid xs={12}>
                <CustomerSatisfaction />
              </Grid>
              <Grid xs={12}>
                <MonthlyComparison />
              </Grid>
            </Grid>
            <Grid
              xs={12}
              xl={5}
              container
              spacing={{
                xs: 2,
                sm: 3,
              }}
            >
              <Grid xs={12}>
                <RecentQuestions />
              </Grid>
              <Grid
                xs={12}
                md={6}
                xl={12}
              >
                <RecentCustomers />
              </Grid>
              <Grid
                xs={12}
                md={6}
                xl={12}
              >
                <MonthlyGoals />
              </Grid>
            </Grid>
            <Grid xs={12}>
              <PendingTickets />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default Page;
