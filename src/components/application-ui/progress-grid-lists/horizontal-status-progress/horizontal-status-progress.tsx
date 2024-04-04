import {
  Box,
  Card,
  Divider,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LinearProgressAlternate } from 'src/components/base/styles/progress-bar';

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Card>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        divider={
          <Divider
            flexItem
            orientation={mdUp ? 'vertical' : 'horizontal'}
          />
        }
        justifyContent="center"
        alignItems="center"
      >
        <Box
          p={{ xs: 2, sm: 3 }}
          flex={1}
          width="100%"
        >
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h5">{t('Deliveries')}</Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                {t('Total deliveries')}
              </Typography>
            </Box>
            <Typography
              variant="h3"
              noWrap
              sx={{
                color: 'error.main',
              }}
            >
              23,594
            </Typography>
          </Box>
          <LinearProgressAlternate
            variant="determinate"
            value={66.43}
            color="error"
          />
          <Box
            display="flex"
            sx={{
              mt: 0.6,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              color="text.secondary"
              variant="subtitle2"
            >
              {t('Target')}
            </Typography>
            <Typography
              color="text.secondary"
              variant="subtitle2"
            >
              100%
            </Typography>
          </Box>
        </Box>
        <Box
          p={{ xs: 2, sm: 3 }}
          flex={1}
          width="100%"
        >
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h5">{t('Orders')}</Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                {t('Total orders')}
              </Typography>
            </Box>
            <Typography
              variant="h3"
              sx={{
                color: 'error.main',
              }}
            >
              $12,346
            </Typography>
          </Box>
          <LinearProgressAlternate
            variant="determinate"
            value={44.32}
            color="primary"
          />
          <Box
            display="flex"
            sx={{
              mt: 0.6,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              color="text.secondary"
              variant="subtitle2"
            >
              {t('Target')}
            </Typography>
            <Typography
              color="text.secondary"
              variant="subtitle2"
            >
              100%
            </Typography>
          </Box>
        </Box>
        <Box
          p={{ xs: 2, sm: 3 }}
          flex={1}
          width="100%"
        >
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h5">{t('Customers')}</Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                {t('Total customers')}
              </Typography>
            </Box>
            <Typography
              variant="h3"
              sx={{ color: 'success.main' }}
            >
              $2.31M
            </Typography>
          </Box>
          <LinearProgressAlternate
            variant="determinate"
            value={37.21}
            color="success"
          />
          <Box
            display="flex"
            sx={{
              mt: 0.6,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              color="text.secondary"
              variant="subtitle2"
            >
              {t('Target')}
            </Typography>
            <Typography
              color="text.secondary"
              variant="subtitle2"
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
