import AddTaskTwoToneIcon from '@mui/icons-material/AddTaskTwoTone';
import { Box, Button, Card, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

const RootWrapper = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
  color: theme.palette.common.white,
  padding: theme.spacing(2),
}));

function AccountVerification() {
  const { t } = useTranslation();

  return (
    <RootWrapper
      sx={{
        display: { xs: 'block', sm: 'flex' },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        textAlign={{ xs: 'center', sm: 'left' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <AvatarState
          useShadow
          state="success"
          sx={{
            mr: { xs: 0, sm: 2 },
            mb: { xs: 3, sm: 0 },
            width: 60,
            height: 60,
          }}
          variant="rounded"
        >
          <AddTaskTwoToneIcon />
        </AvatarState>
        <Box>
          <Typography
            color="common.white"
            variant="h5"
            lineHeight={1.6}
          >
            {t('Account Verification')}
          </Typography>
          <Typography
            variant="subtitle2"
            color="neutral.400"
          >
            {t('Your account is almost ready!')}
          </Typography>
        </Box>
      </Box>
      <Button
        sx={{
          mt: { xs: 3, sm: 0 },
          width: { xs: '100%', sm: 'auto' },
        }}
        variant="contained"
      >
        {t('Confirm email address')}
      </Button>
    </RootWrapper>
  );
}

export default AccountVerification;
