import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Avatar, Box, Button, Card, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

function UpgradeAccount() {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', md: 'center' },
        flexDirection: { xs: 'column', md: 'row' },
        p: { xs: 2, sm: 3, md: 4.5 },
      }}
    >
      <Box>
        <Typography
          gutterBottom
          variant="h3"
        >
          {t('Upgrade Your Account to PRO')}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{
            pb: 2,
          }}
        >
          {t('You get a lot more features when upgrading to a PRO plan.')}
        </Typography>
        <Typography
          variant="h4"
          fontWeight={400}
          sx={{
            pb: 3,
          }}
          color="primary"
          component="p"
        >
          {t('Manage your finances in style!')}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
        >
          {t('Get started today')}
        </Button>
      </Box>
      <Avatar
        src="/placeholders/illustrations/4.svg"
        alt="..."
        variant="square"
        sx={{
          width: 'auto',
          height: 'auto',
          mt: { xs: 2, md: 0 },
        }}
      />
      <Box
        component="span"
        sx={{
          display: { xs: 'none', md: 'inline-flex' },
        }}
      >
        <ButtonIcon
          variant="outlined"
          sx={{
            width: 64,
            height: 64,
            borderRadius: 50,
          }}
        >
          <ChevronRightIcon
            sx={{
              fontSize: 34,
            }}
          />
        </ButtonIcon>
      </Box>
    </Card>
  );
}

export default UpgradeAccount;
