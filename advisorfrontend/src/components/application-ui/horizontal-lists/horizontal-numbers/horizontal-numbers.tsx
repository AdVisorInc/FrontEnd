import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import {
  Box,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ListWithActions from './list-with-actions';

function Component() {
  const { t } = useTranslation();
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        md={6}
        xs={12}
      >
        <Card>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-evenly"
            alignItems="stretch"
            divider={
              <Divider
                orientation={smUp ? 'vertical' : 'horizontal'}
                flexItem
              />
            }
            spacing={0}
          >
            <Box
              p={2}
              sx={{
                textAlign: 'center',
              }}
            >
              <MonetizationOnTwoToneIcon
                sx={{
                  color: 'warning.main',
                }}
                fontSize="large"
              />
              <Typography variant="h3">$9,658</Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                {t('revenue')}
              </Typography>
            </Box>
            <Box
              p={2}
              sx={{
                textAlign: 'center',
              }}
            >
              <PersonTwoToneIcon
                sx={{
                  color: 'success.main',
                }}
                fontSize="large"
              />
              <Typography variant="h3">23,594</Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                {t('users')}
              </Typography>
            </Box>
            <Box
              p={2}
              sx={{
                textAlign: 'center',
              }}
            >
              <SubscriptionsTwoToneIcon
                sx={{
                  color: 'info.main',
                }}
                fontSize="large"
              />
              <Typography variant="h3">1,064</Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                {t('orders')}
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid
        md={6}
        xs={12}
      >
        <Card>
          <ListWithActions />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
