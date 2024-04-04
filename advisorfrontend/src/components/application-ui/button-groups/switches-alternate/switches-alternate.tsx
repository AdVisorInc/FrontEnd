import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import DeviceThermostatTwoToneIcon from '@mui/icons-material/DeviceThermostatTwoTone';
import OpacityTwoToneIcon from '@mui/icons-material/OpacityTwoTone';
import TrendingDown from '@mui/icons-material/TrendingDown';
import TrendingUp from '@mui/icons-material/TrendingUp';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Unstable_Grid2 as Grid,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

function Component() {
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
    >
      <Grid
        xs={12}
        md={6}
      >
        <Card>
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                alignItems="center"
              >
                <DeviceThermostatTwoToneIcon />
                <Typography
                  sx={{
                    pl: 1,
                  }}
                  variant="h5"
                  color="text.secondary"
                  noWrap
                >
                  {t('Master bedroom')}
                </Typography>
              </Box>
              <AvatarState
                isSoft
                state="success"
                variant="rounded"
              >
                <TrendingUp />
              </AvatarState>
            </Box>
            <Box
              mt={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                align="center"
                variant="h1"
                sx={{
                  mt: '-4px',
                }}
                color="success.main"
              >
                25.4<sup>°</sup>
              </Typography>
              <ButtonGroup
                orientation="vertical"
                variant="contained"
              >
                <Button>
                  <ArrowUpwardTwoToneIcon />
                </Button>
                <Button>
                  <ArrowDownwardTwoToneIcon />
                </Button>
              </ButtonGroup>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        <Card>
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                alignItems="center"
              >
                <OpacityTwoToneIcon />
                <Typography
                  sx={{
                    pl: 1,
                  }}
                  variant="h5"
                  noWrap
                  color="text.secondary"
                >
                  {t('Humidity')}
                </Typography>
              </Box>
              <AvatarState
                isSoft
                state="error"
                variant="rounded"
              >
                <TrendingDown />
              </AvatarState>
            </Box>
            <Box
              mt={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                align="center"
                variant="h1"
              >
                59%
              </Typography>
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="outlined"
              >
                <Button>
                  <ArrowUpwardTwoToneIcon />
                </Button>
                <Button>
                  <ArrowDownwardTwoToneIcon />
                </Button>
              </ButtonGroup>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
