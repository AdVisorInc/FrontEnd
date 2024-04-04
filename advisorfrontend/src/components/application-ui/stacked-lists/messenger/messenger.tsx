import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  styled,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ChatList from 'src/components/application-ui/stacked-lists/chat/chat-list';

const AvatarGradient = styled(Avatar)(({ theme }) => ({
  background: `linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)`,
  color: theme.palette.common.white,
}));

function Component0() {
  const { t } = useTranslation();

  return (
    <Card>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Box>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            {t('Messages')}
          </Typography>
          <Typography variant="h5">{t('Messenger Window')}</Typography>
        </Box>
        <Badge
          color="error"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          variant="dot"
          overlap="circular"
        >
          <AvatarGradient>ET</AvatarGradient>
        </Badge>
      </Box>
      <Divider />
      <Box
        py={1}
        px={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Button
          size="small"
          color="error"
        >
          {t('Delete all')}
        </Button>
        <Typography
          variant="body2"
          fontWeight={500}
        >
          Emma Taylor
        </Typography>
      </Box>
      <Divider />
      <ChatList />
    </Card>
  );
}

export default Component0;
