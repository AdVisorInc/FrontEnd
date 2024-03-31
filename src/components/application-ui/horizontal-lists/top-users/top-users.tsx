import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import {
  Avatar,
  Box,
  Card,
  Divider,
  Stack,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

function Users() {
  const { t } = useTranslation();
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h4">{t('Top users')}</Typography>
        <Tooltip
          placement="top"
          title={t('View all top users')}
          arrow
        >
          <ButtonIcon
            color="secondary"
            variant="outlined"
            sx={{
              color: 'primary.main',
            }}
            startIcon={<KeyboardArrowRightTwoToneIcon />}
          />
        </Tooltip>
      </Box>
      <Card
        sx={{
          p: 2,
        }}
      >
        <Stack
          spacing={{ xs: 2, sm: 3 }}
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-evenly"
          divider={
            <Divider
              orientation={smUp ? 'vertical' : 'horizontal'}
              flexItem
            />
          }
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Tooltip
              placement="top"
              title={t('View profile')}
              arrow
            >
              <Avatar
                sx={{
                  mb: 1,
                  width: 62,
                  height: 62,
                }}
                src="/avatars/3.png"
              />
            </Tooltip>
            <Typography variant="h5">Randy</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              textAlign="center"
              noWrap
            >
              Admin
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Tooltip
              placement="top"
              title={t('View profile')}
              arrow
            >
              <Avatar
                sx={{
                  mb: 1,
                  width: 62,
                  height: 62,
                }}
                src="/avatars/1.png"
              />
            </Tooltip>
            <Typography variant="h5">Adeline</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              textAlign="center"
              noWrap
            >
              Admin
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Tooltip
              placement="top"
              title={t('View profile')}
              arrow
            >
              <Avatar
                sx={{
                  mb: 1,
                  width: 62,
                  height: 62,
                }}
                src="/avatars/4.png"
              />
            </Tooltip>
            <Typography variant="h5">Benjamin</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              textAlign="center"
              noWrap
            >
              Restricted
            </Typography>
          </Box>
        </Stack>
      </Card>
    </>
  );
}

export default Users;
