import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import SpeakerTwoToneIcon from '@mui/icons-material/SpeakerTwoTone';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Card,
  Checkbox,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  MenuList,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { formatDistance, subMinutes } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonLight } from 'src/components/base/styles/button';
import { DividerLight } from 'src/components/base/styles/card';

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: theme.spacing(1.8),
  width: theme.spacing(1.8),
  height: theme.spacing(1.8),
  display: 'inline-block',
}));

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 7,
}));

const MenuItemWrapper = styled(MenuItem)(({ theme }) => ({
  borderColor: alpha(theme.palette.common.white, 0.15),

  '& > .MuiSvgIcon-root': {
    transition: theme.transitions.create(['color']),
  },

  '&.MuiMenuItem-root.MuiButtonBase-root:active, &:hover': {
    background: alpha(theme.palette.common.white, 0.08),
    color: theme.palette.common.white,

    '& > .MuiSvgIcon-root': {
      color: alpha(theme.palette.common.white, 0.7),
    },
  },

  '.MuiTouchRipple-root': {
    opacity: 0.05,
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: 'relative',
        background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
        color: 'common.white',
      }}
    >
      <CardActions>
        <Checkbox
          sx={{
            color: 'common.white',
            '&.Mui-checked': {
              color: 'common.white',
            },
          }}
        />
      </CardActions>
      <Box
        p={{ xs: 2, sm: 3 }}
        display="flex"
        alignItems="center"
      >
        <Badge
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          overlap="rectangular"
          badgeContent={
            <Tooltip
              arrow
              placement="top"
              title={
                t('Online since') +
                ' ' +
                formatDistance(subMinutes(new Date(), 65), new Date(), {
                  addSuffix: true,
                })
              }
            >
              <DotLegend style={{ background: theme.palette.warning.main }} />
            </Tooltip>
          }
        >
          <Avatar
            variant="rounded"
            sx={{
              width: { xs: 74, md: 104 },
              height: { xs: 74, md: 104 },
              boxShadow: `0 .313rem .8rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)`,
              fontSize: theme.typography.pxToRem(18),
              background: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
            }}
            src="/avatars/5.png"
          />
        </Badge>
        <Box
          ml={2}
          pr={2}
          overflow="hidden"
        >
          <Typography
            color="common.white"
            variant="h5"
            noWrap
          >
            Matteo Mcphee
          </Typography>
          <Typography
            sx={{
              mb: 1,
              color: alpha(theme.palette.common.white, 0.7),
            }}
            noWrap
            variant="subtitle2"
          >
            Frontend Developer, Stripe Inc.
          </Typography>
          <ButtonLight
            size="small"
            variant="contained"
          >
            {t('Chat')}
          </ButtonLight>
          <ButtonLight
            size="small"
            variant="contained"
            sx={{
              ml: 1,
            }}
          >
            {t('View')}
          </ButtonLight>
        </Box>
      </Box>
      <DividerLight />
      <MenuList disablePadding>
        <MenuItemWrapper
          sx={{
            p: { xs: 2, sm: 3 },
          }}
          divider
        >
          <ListItemAvatar>
            <AvatarState
              state="light"
              variant="rounded"
              sx={{
                width: 44,
                height: 44,
              }}
            >
              <AccountBalanceWalletTwoToneIcon fontSize="small" />
            </AvatarState>
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary={
              <Typography
                color="common.white"
                variant="h5"
              >
                {t('Sales')}
              </Typography>
            }
            secondary={<Typography color="common.white">15.4% {t('increase')}</Typography>}
          />
          <ChevronRightTwoToneIcon sx={{ color: 'common.white' }} />
        </MenuItemWrapper>
        <MenuItemWrapper
          sx={{
            p: { xs: 2, sm: 3 },
          }}
          divider
        >
          <ListItemAvatar>
            <AvatarState
              state="light"
              variant="rounded"
              sx={{
                width: 44,
                height: 44,
              }}
            >
              <SpeakerTwoToneIcon fontSize="small" />
            </AvatarState>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                color="common.white"
                variant="h5"
              >
                {t('Income')}
              </Typography>
            }
            secondary={<Typography color="common.white">-4.75% {t('decrease')}</Typography>}
          />
          <ChevronRightTwoToneIcon sx={{ color: 'common.white' }} />
        </MenuItemWrapper>
        <MenuItemWrapper
          sx={{
            p: { xs: 2, sm: 3 },
          }}
          divider
        >
          <ListItemAvatar>
            <AvatarState
              state="light"
              variant="rounded"
              sx={{
                width: 44,
                height: 44,
              }}
            >
              <VerifiedTwoToneIcon fontSize="small" />
            </AvatarState>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                color="common.white"
                variant="h5"
              >
                {t('Expenses')}
              </Typography>
            }
            secondary={<Typography color="common.white">62.5% {t('down')}</Typography>}
          />
          <ChevronRightTwoToneIcon sx={{ color: 'common.white' }} />
        </MenuItemWrapper>
      </MenuList>
    </Card>
  );
}

export default Component;
