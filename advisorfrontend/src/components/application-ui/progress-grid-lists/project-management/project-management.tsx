import {
  alpha,
  Box,
  Card,
  Divider,
  LinearProgress,
  linearProgressClasses,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const LinearProgressWrapper = styled(LinearProgress)(({ theme }) => ({
  height: '10px',

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    boxShadow: `inset 0 1px 2px ${alpha(theme.palette.primary.dark, 0.2)}`,
  },

  [`& .${linearProgressClasses.bar}`]: {
    background: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
  },
}));

function Component() {
  const { t } = useTranslation();

  return (
    <Card>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
          />
        }
        justifyContent="space-between"
        alignItems="stretch"
        spacing={0}
      >
        <Box
          p={{ xs: 2, sm: 3 }}
          flexGrow={1}
        >
          <Typography
            variant="h5"
            textAlign="center"
          >
            {t('Project management')}
          </Typography>
          <Stack
            sx={{
              mt: 2.5,
              textAlign: 'center',
            }}
            direction="row"
            divider={
              <Divider
                orientation="vertical"
                flexItem
              />
            }
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                {t('Projects')}
              </Typography>
              <Typography variant="h3">381</Typography>
            </Box>
            <Box>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                {t('Reviews')}
              </Typography>
              <Typography
                color="error"
                variant="h3"
              >
                198
              </Typography>
            </Box>
            <Box>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                {t('Revenue')}
              </Typography>
              <Typography variant="h3">$685</Typography>
            </Box>
          </Stack>
        </Box>
        <Box
          p={{ xs: 2, sm: 3 }}
          flexGrow={1}
        >
          <Typography
            variant="h5"
            textAlign="center"
          >
            {t('Current progress')}
          </Typography>
          <Box
            display="flex"
            sx={{
              pt: 2.5,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              Orders
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={700}
              color="text.primary"
            >
              765
            </Typography>
          </Box>
          <LinearProgressWrapper
            sx={{
              my: 0.5,
            }}
            variant="determinate"
            value={67.5}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">0</Typography>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              color="text.primary"
            >
              100%
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
}

export default Component;
