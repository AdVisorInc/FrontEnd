import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const ButtonWrapper = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  display: 'flex',
  justifyContent: 'space-between',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,

  '&:hover': {
    background:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.neutral[25], 0.02)
        : theme.palette.neutral[25],
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        md={6}
      >
        <Card>
          <Box
            display="flex"
            alignItems={{ xs: 'flex-start', md: 'center' }}
            p={{ xs: 1, sm: 2 }}
            flexDirection={{ xs: 'column', md: 'row' }}
          >
            <img
              style={{ height: 130 }}
              src="/placeholders/illustrations/analysis.svg"
              alt="..."
            />
            <Box pl={1}>
              <Typography
                sx={{
                  pb: 1,
                  fontSize: theme.typography.pxToRem(16),
                }}
                variant="h4"
              >
                {t('Notifications')}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                {t(
                  'Acccess this page in order to manage and customize all aspects of your profile data and accounts'
                )}
                .
              </Typography>
            </Box>
          </Box>
          <Divider />
          <ButtonWrapper
            fullWidth
            endIcon={<ChevronRightTwoToneIcon />}
          >
            {t('Manage account')}
          </ButtonWrapper>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        <Card>
          <Box
            display="flex"
            alignItems={{ xs: 'flex-start', md: 'center' }}
            p={{ xs: 1, sm: 2 }}
            flexDirection={{ xs: 'column', md: 'row' }}
          >
            <img
              style={{ height: 130 }}
              src="/placeholders/illustrations/businessman.svg"
              alt="..."
            />
            <Box pl={1}>
              <Typography
                sx={{
                  pb: 1,
                  fontSize: theme.typography.pxToRem(16),
                }}
                variant="h4"
              >
                {t('Account Settings')}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                {t(
                  'Control everything related to your profile and trading accounts as shown in this page'
                )}
                .
              </Typography>
            </Box>
          </Box>
          <Divider />
          <ButtonWrapper
            fullWidth
            endIcon={<ChevronRightTwoToneIcon />}
          >
            {t('Manage settings')}
          </ButtonWrapper>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        <Card>
          <Box
            display="flex"
            alignItems={{ xs: 'flex-start', md: 'center' }}
            p={{ xs: 1, sm: 2 }}
            flexDirection={{ xs: 'column', md: 'row' }}
          >
            <img
              style={{ height: 130 }}
              src="/placeholders/illustrations/handshake.svg"
              alt="..."
            />
            <Box pl={1}>
              <Typography
                sx={{
                  pb: 1,
                  fontSize: theme.typography.pxToRem(16),
                }}
                variant="h4"
              >
                {t('Crypto Balance')}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                {t(
                  'You can view, manage and customize your wallets and balances from this wallets page'
                )}
                .
              </Typography>
            </Box>
          </Box>
          <Divider />
          <ButtonWrapper
            fullWidth
            endIcon={<ChevronRightTwoToneIcon />}
          >
            {t('Manage wallets')}
          </ButtonWrapper>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        <Card>
          <Box
            display="flex"
            alignItems={{ xs: 'flex-start', md: 'center' }}
            p={{ xs: 1, sm: 2 }}
            flexDirection={{ xs: 'column', md: 'row' }}
          >
            <img
              style={{ height: 130 }}
              src="/placeholders/illustrations/moving.svg"
              alt="..."
            />
            <Box pl={1}>
              <Typography
                sx={{
                  pb: 1,
                  fontSize: theme.typography.pxToRem(16),
                }}
                variant="h4"
              >
                {t('Profile Verification')}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                {t(
                  'Complete your profile verifications to take full advantage of your account right away'
                )}
                .
              </Typography>
            </Box>
          </Box>
          <Divider />
          <ButtonWrapper
            fullWidth
            endIcon={<ChevronRightTwoToneIcon />}
          >
            {t('Complete verifications')}
          </ButtonWrapper>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
