import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import CancelPresentationTwoToneIcon from '@mui/icons-material/CancelPresentationTwoTone';
import { alpha, Box, Card, LinearProgress, Stack, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{
        p: { xs: 2, sm: 3 },
        border: 0,
        background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
        color: 'common.white',
      }}
    >
      <Typography
        variant="h3"
        color="common.white"
        lineHeight={1}
      >
        {t('Performance')}
      </Typography>
      <Stack
        spacing={{ xs: 2, sm: 3 }}
        py={{ xs: 3, sm: 4 }}
        px={{ xs: 0, sm: 4 }}
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <AvatarState
            state="success"
            useShadow
            sx={{
              mr: 2,
              width: 84,
              height: 84,
            }}
            variant="rounded"
          >
            <AssignmentTurnedInTwoToneIcon fontSize="large" />
          </AvatarState>
          <Box>
            <Typography
              variant="h1"
              lineHeight={1}
              fontWeight={600}
              sx={{ pb: 1 }}
            >
              23
            </Typography>
            <Typography
              variant="h4"
              noWrap
              fontWeight={500}
              lineHeight={1}
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
              }}
            >
              {t('tasks created')}
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
        >
          <AvatarState
            state="error"
            useShadow
            sx={{
              mr: 2,
              width: 84,
              height: 84,
            }}
            variant="rounded"
          >
            <CancelPresentationTwoToneIcon fontSize="large" />
          </AvatarState>
          <Box>
            <Typography
              variant="h1"
              lineHeight={1}
              fontWeight={600}
              sx={{ pb: 1 }}
            >
              12
            </Typography>
            <Typography
              variant="h4"
              noWrap
              fontWeight={500}
              lineHeight={1}
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
              }}
            >
              {t('tasks closed')}
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Box>
        <LinearProgress
          sx={{
            '&.MuiLinearProgress-colorSuccess': {
              backgroundColor: theme.palette.error.main,
            },
          }}
          value={60}
          color="success"
          variant="determinate"
        />
      </Box>
    </Card>
  );
}

export default Component;
