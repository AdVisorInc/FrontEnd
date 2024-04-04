import {
  alpha,
  Box,
  Card,
  Divider,
  LinearProgress,
  linearProgressClasses,
  Stack,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

export const LinearProgress1 = styled(LinearProgress)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,

  [`&.${linearProgressClasses.colorPrimary}`]: {
    height: '26px',
    backgroundColor: alpha(theme.palette.success.main, 0.06),
    boxShadow: `inset 0 1px 2px ${alpha(theme.palette.success.dark, 0.2)}`,
  },

  [`& .${linearProgressClasses.bar}`]: {
    height: '12px',
    marginTop: '7px',
    borderRadius: theme.shape.borderRadius,
    background: 'linear-gradient(to bottom, #00b09b, #96c93d)!important',
  },
}));

export const LinearProgress2 = styled(LinearProgress)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,

  [`&.${linearProgressClasses.colorPrimary}`]: {
    height: '26px',
    backgroundColor: alpha(theme.palette.error.main, 0.06),
    boxShadow: `inset 0 1px 2px ${alpha(theme.palette.error.dark, 0.2)}`,
  },

  [`& .${linearProgressClasses.bar}`]: {
    height: '12px',
    marginTop: '7px',
    borderRadius: theme.shape.borderRadius,
    background: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)',
  },
}));

export const LinearProgress3 = styled(LinearProgress)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,

  [`&.${linearProgressClasses.colorPrimary}`]: {
    height: '26px',
    backgroundColor: alpha(theme.palette.primary.main, 0.06),
    boxShadow: `inset 0 1px 2px ${alpha(theme.palette.primary.dark, 0.2)}`,
  },

  [`& .${linearProgressClasses.bar}`]: {
    height: '12px',
    marginTop: '7px',
    borderRadius: theme.shape.borderRadius,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important',
  },
}));

function Component() {
  const { t } = useTranslation();
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Card>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={
          <Divider
            flexItem
            orientation={smUp ? 'vertical' : 'horizontal'}
          />
        }
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Box
          p={{ xs: 2, sm: 3 }}
          flex={1}
          width="100%"
        >
          <Typography
            variant="h3"
            fontWeight={600}
          >
            76%
          </Typography>
          <LinearProgress1
            sx={{
              my: 1,
            }}
            variant="determinate"
            value={76}
          />
          <Typography
            color="text.secondary"
            variant="subtitle1"
          >
            {t('Sales')}
          </Typography>
        </Box>
        <Box
          p={{ xs: 2, sm: 3 }}
          flex={1}
          width="100%"
        >
          <Typography
            color="error.main"
            variant="h3"
          >
            43%
          </Typography>
          <LinearProgress2
            sx={{
              my: 1,
            }}
            variant="determinate"
            value={43}
          />
          <Typography
            color="text.secondary"
            variant="subtitle1"
          >
            {t('Profiles')}
          </Typography>
        </Box>
        <Box
          p={{ xs: 2, sm: 3 }}
          flex={1}
          width="100%"
        >
          <Typography
            variant="h3"
            fontWeight={600}
          >
            59%
          </Typography>
          <LinearProgress3
            sx={{
              my: 1,
            }}
            variant="determinate"
            value={59}
          />
          <Typography
            color="text.secondary"
            variant="subtitle1"
          >
            {t('Tickets')}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}

export default Component;
