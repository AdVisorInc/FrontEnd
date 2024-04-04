'use client';

import CogIcon from '@heroicons/react/24/outline/CogIcon';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Unstable_Grid2 as Grid,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PowerConsumption from 'src/components/application-ui/area-charts/power-consumption/power-consumption';
import SwitchesAlternate from 'src/components/application-ui/button-groups/switches-alternate/switches-alternate';
import Scenes from 'src/components/application-ui/buttons/scenes/scenes';
import Camera from 'src/components/application-ui/composed-blocks/camera/camera';
import Weather from 'src/components/application-ui/composed-blocks/weather/weather';
import ListWithActions from 'src/components/application-ui/horizontal-lists/horizontal-numbers/list-with-actions';
import TopUsers from 'src/components/application-ui/horizontal-lists/top-users/top-users';
import AutomationSearch from 'src/components/application-ui/input/search/automation-search';
import EnergyStatus from 'src/components/application-ui/sparkline-charts/energy-status/energy-status';
import Energy from 'src/components/application-ui/sparkline-charts/energy/energy';
import Switches from 'src/components/application-ui/switches/switches/switches';
import Thermostat from 'src/components/application-ui/switches/thermostat/thermostat';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';
import { useCustomization } from 'src/hooks/use-customization';
import { Layout } from 'src/layouts';

function Page(): React.JSX.Element {
  const customization = useCustomization();
  const theme = useTheme();
  const { t } = useTranslation();
  const pageMeta = {
    title: 'Automation',
    description: 'Set up and manage automated tasks',
    icon: <CogIcon />,
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
              <Weather />
            </Grid>
            <Grid
              xs={12}
              md={6}
              container
              spacing={{
                xs: 2,
                sm: 3,
              }}
            >
              <Grid xs={12}>
                <Camera />
              </Grid>
              <Grid xs={12}>
                <AutomationSearch />
              </Grid>
              <Grid xs={12}>
                <TopUsers />
              </Grid>
              <Grid xs={12}>
                <Energy />
              </Grid>
            </Grid>
            <Grid
              xs={12}
              md={6}
              container
              spacing={{
                xs: 2,
                sm: 3,
              }}
            >
              <Grid xs={12}>
                <PowerConsumption />
              </Grid>
              <Grid xs={12}>
                <Scenes />
              </Grid>
              <Grid xs={12}>
                <Card>
                  <ListWithActions />
                  <Divider />
                  <ListWithActions />
                </Card>
              </Grid>
            </Grid>
            <Grid xs={12}>
              <Switches />
            </Grid>
            <Grid
              xs={12}
              lg={5}
            >
              <Thermostat />
            </Grid>
            <Grid
              xs={12}
              lg={7}
              container
              spacing={{
                xs: 2,
                sm: 3,
              }}
            >
              <Grid xs={12}>
                <EnergyStatus />
              </Grid>
              <Grid xs={12}>
                <SwitchesAlternate />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default Page;
