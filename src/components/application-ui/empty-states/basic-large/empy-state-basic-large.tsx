import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

const EmptyStateBasicLarge = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        py: { xs: 2, sm: 3, md: 6, lg: 8 },
        px: 2,
        textAlign: 'center',
      }}
    >
      <AvatarState
        isSoft
        sx={{
          height: 74,
          width: 74,
          mb: { xs: 2, sm: 3 },
          mx: 'auto',
        }}
        state="warning"
      >
        <NotificationsActiveTwoToneIcon />
      </AvatarState>
      <Typography variant="h3">{t('No boards available')}</Typography>
      <Typography
        variant="h5"
        sx={{
          pt: 0.5,
          pb: { xs: 2, sm: 3 },
        }}
        fontWeight={400}
        color="text.secondary"
      >
        {t('Browse the projects board application or create a new one right here')}!
      </Typography>
      <Button
        color="primary"
        variant="outlined"
        sx={{
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        }}
      >
        {t('Create project board')}
      </Button>
    </Box>
  );
};

export default EmptyStateBasicLarge;
