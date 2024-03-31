import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import VideoCameraFrontTwoToneIcon from '@mui/icons-material/VideoCameraFrontTwoTone';
import { Avatar, Box, Stack, Tooltip, Typography } from '@mui/material';
import { formatDistance, subMinutes } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

function TopBarContent() {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flex={1}
    >
      <Box
        display="flex"
        alignItems="center"
      >
        <Avatar
          variant="rounded"
          sx={{
            width: 48,
            height: 48,
          }}
          alt="Zain Baptista"
          src="/avatars/3.png"
        />
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
          }}
          flexDirection="column"
          ml={1}
        >
          <Typography variant="h5">Zain Baptista</Typography>
          <Typography variant="subtitle2">
            {formatDistance(subMinutes(new Date(), 8), new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
      </Box>
      <Stack
        direction="row"
        spacing={1}
      >
        <Tooltip
          placement="bottom"
          title={t('Start a voice call')}
        >
          <ButtonIcon
            variant="outlined"
            color="secondary"
            sx={{
              color: 'primary.main',
            }}
          >
            <CallTwoToneIcon />
          </ButtonIcon>
        </Tooltip>
        <Tooltip
          placement="bottom"
          title={t('Start a video call')}
        >
          <ButtonIcon
            variant="outlined"
            color="secondary"
            sx={{
              color: 'primary.main',
            }}
          >
            <VideoCameraFrontTwoToneIcon />
          </ButtonIcon>
        </Tooltip>
        <Tooltip
          placement="bottom"
          title={t('Conversation information')}
        >
          <ButtonIcon
            variant="outlined"
            color="secondary"
            sx={{
              color: 'primary.main',
            }}
          >
            <InfoTwoToneIcon />
          </ButtonIcon>
        </Tooltip>
      </Stack>
    </Box>
  );
}

export default TopBarContent;
