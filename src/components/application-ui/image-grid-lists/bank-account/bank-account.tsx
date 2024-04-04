import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const BankLogoImg = styled('img')(({ theme }) => ({
  position: 'absolute',
  opacity: 0.15,
  width: '200px',
  height: '200px',
  top: '50%',
  right: theme.spacing(3),
  marginTop: '-100px',
}));

function MainAccount() {
  const { t } = useTranslation();

  const data = {
    funds: '$98,346.53',
    name: 'Bank of America - Savings Account',
    account: '00 2222 5555 2222 72',
    acc: '3544 57214',
    bsb: '721 352',
    logo: '/placeholders/logo/bankofamerica.svg',
  };

  const theme = useTheme();

  return (
    <Card>
      <Box
        px={{ xs: 2, sm: 4 }}
        pt={{ xs: 3, sm: 4 }}
        display="flex"
        justifyContent="space-between"
      >
        <Typography variant="h5">{t('Main Account')}</Typography>
        <Stack>
          <Typography
            variant="subtitle2"
            align="right"
            color="text.secondary"
          >
            {t('Available')}
          </Typography>
          <Typography
            variant="h2"
            align="right"
            color="success.main"
          >
            {data.funds}
          </Typography>
        </Stack>
      </Box>

      <CardContent
        sx={{
          pt: { xs: 1, sm: 2 },
          pb: { xs: 2, sm: 4 },
          position: 'relative',
        }}
      >
        <Box component="span">
          <BankLogoImg
            alt={data.name}
            src={data.logo}
          />
        </Box>
        <Stack direction="row">
          <Avatar
            sx={{
              display: { xs: 'none', md: 'inline-block' },
              mr: 2,
              width: theme.spacing(14),
              height: theme.spacing(10),
              background: 'transparent',
            }}
            variant="square"
            alt={data.name}
            src={data.logo}
          />
          <Box>
            <Typography
              variant="h4"
              component="div"
            >
              {data.name}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: 1,
                fontWeight: 'normal',
              }}
              color="text.secondary"
            >
              {data.account}
            </Typography>
            <Box
              sx={{
                mt: 2,
              }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                gutterBottom
              >
                ACC:{' '}
                <Typography
                  color="text.primary"
                  component="span"
                  fontWeight={500}
                >
                  {data.acc}
                </Typography>
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
              >
                BSB:{' '}
                <Typography
                  color="text.primary"
                  component="span"
                  fontWeight={500}
                >
                  {data.bsb}
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
        >
          {t('Transfer money')}
        </Button>
        <Button variant="contained">{t('Link accounts')}</Button>
      </CardActions>
    </Card>
  );
}

export default MainAccount;
