import BatteryCharging20TwoToneIcon from '@mui/icons-material/BatteryCharging20TwoTone';
import DoNotStepTwoToneIcon from '@mui/icons-material/DoNotStepTwoTone';
import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';
import LocalDrinkTwoToneIcon from '@mui/icons-material/LocalDrinkTwoTone';
import { Box, Card, Unstable_Grid2 as Grid, LinearProgress, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

function Steps() {
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        sm={6}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          <AvatarState
            sx={{
              width: 64,
              height: 64,
              mb: 2,
            }}
            isSoft
            variant="rounded"
            state="success"
          >
            <DoNotStepTwoToneIcon />
          </AvatarState>
          <Typography
            variant="h4"
            sx={{
              pb: 1,
            }}
          >
            {t('Steps')}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              pr: 0.5,
              display: 'inline-flex',
            }}
          >
            4500
          </Typography>
          <Typography
            color="text.secondary"
            variant="h4"
            sx={{
              pr: 2,
              display: 'inline-flex',
            }}
          >
            /10000
          </Typography>
          <Box pt={3}>
            <LinearProgress
              value={45}
              color="success"
              variant="determinate"
            />
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          <AvatarState
            sx={{
              width: 64,
              height: 64,
              mb: 2,
            }}
            isSoft
            variant="rounded"
            state="info"
          >
            <BatteryCharging20TwoToneIcon />
          </AvatarState>
          <Typography
            variant="h4"
            sx={{
              pb: 1,
            }}
          >
            {t('Energy')}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              pr: 0.5,
              display: 'inline-flex',
            }}
          >
            12%
          </Typography>
          <Box pt={3}>
            <LinearProgress
              value={12}
              color="info"
              variant="determinate"
            />
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          <AvatarState
            sx={{
              width: 64,
              height: 64,
              mb: 2,
            }}
            isSoft
            variant="rounded"
            state="warning"
          >
            <LocalDrinkTwoToneIcon />
          </AvatarState>
          <Typography
            variant="h4"
            sx={{
              pb: 1,
            }}
          >
            {t('Water')}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              pr: 0.5,
              display: 'inline-flex',
            }}
          >
            54%
          </Typography>
          <Box pt={3}>
            <LinearProgress
              value={54}
              color="warning"
              variant="determinate"
            />
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          <AvatarState
            sx={{
              width: 64,
              height: 64,
              mb: 2,
            }}
            isSoft
            variant="rounded"
            state="error"
          >
            <FastfoodTwoToneIcon />
          </AvatarState>
          <Typography
            variant="h4"
            sx={{
              pb: 1,
            }}
          >
            {t('Calories')}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              pr: 0.5,
              display: 'inline-flex',
            }}
          >
            76%
          </Typography>
          <Box pt={3}>
            <LinearProgress
              value={76}
              color="error"
              variant="determinate"
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Steps;
