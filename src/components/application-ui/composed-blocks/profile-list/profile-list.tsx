import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import SpeakerTwoToneIcon from '@mui/icons-material/SpeakerTwoTone';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Link,
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

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: theme.spacing(2.5),
  width: theme.spacing(2.5),
  height: theme.spacing(2.5),
  display: 'inline-block',
  border: `${theme.palette.background.paper} solid 2px`,
  position: 'relative',

  '&::after': {
    content: '" "',
    borderRadius: theme.spacing(1.1),
    position: 'absolute',
    width: theme.spacing(1.1),
    height: theme.spacing(1.1),
    top: theme.spacing(0.5),
    left: theme.spacing(0.5),
    background: theme.palette.common.white,
  },
}));

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 7,
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: 'relative',
      }}
    >
      <CardActions>
        <Checkbox />
      </CardActions>
      <Box
        p={2}
        display="flex"
        alignItems="center"
      >
        <Badge
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          overlap="rectangular"
          badgeContent={
            <Tooltip
              arrow
              placement="top"
              title={
                t('Offline since') +
                ' ' +
                formatDistance(subMinutes(new Date(), 12), new Date(), {
                  addSuffix: true,
                })
              }
            >
              <DotLegend style={{ background: theme.palette.error.main }} />
            </Tooltip>
          }
        >
          <Avatar
            variant="rounded"
            sx={{
              width: 84,
              height: 84,
              fontSize: theme.typography.pxToRem(18),
              background: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
            }}
          >
            KA
          </Avatar>
        </Badge>
        <Box
          ml={2}
          pr={3}
          overflow="hidden"
        >
          <Link
            onClick={(e) => e.preventDefault()}
            href=""
            variant="h5"
            underline="hover"
          >
            Kris Alexander
          </Link>
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
            color="text.secondary"
            noWrap
          >
            Project Manager, Apple Inc.
          </Typography>
          <Box whiteSpace="nowrap">
            <Button
              size="small"
              variant="contained"
              color="secondary"
            >
              {t('Chat')}
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              sx={{
                ml: 1,
              }}
            >
              {t('View')}
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />
      <MenuList disablePadding>
        <MenuItem
          sx={{
            px: 2.5,
            py: 1.5,
          }}
          divider
        >
          <ListItemAvatar
            sx={{
              mr: 1.5,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0,
            }}
          >
            <AvatarState
              variant="rounded"
              state="success"
              sx={{
                width: 44,
                height: 44,
              }}
            >
              <AccountBalanceWalletTwoToneIcon fontSize="small" />
            </AvatarState>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h5">{t('Sales')}</Typography>}
            secondary={`15.4% ${t('increase')}`}
            secondaryTypographyProps={{ color: 'success.main' }}
          />
          <ChevronRightTwoToneIcon
            sx={{
              color: alpha(theme.palette.common.black, 0.3),
              opacity: 0.8,
            }}
          />
        </MenuItem>
        <MenuItem
          sx={{
            px: 2.5,
            py: 1.5,
          }}
          divider
        >
          <ListItemAvatar
            sx={{
              mr: 1.5,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0,
            }}
          >
            <AvatarState
              variant="rounded"
              state="error"
              sx={{
                width: 44,
                height: 44,
              }}
            >
              <SpeakerTwoToneIcon fontSize="small" />
            </AvatarState>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h5">{t('Income')}</Typography>}
            secondary={<>-4.75% {t('decrease')}</>}
            secondaryTypographyProps={{ color: 'error.main' }}
          />
          <ChevronRightTwoToneIcon
            sx={{
              color: alpha(theme.palette.common.black, 0.3),
              opacity: 0.8,
            }}
          />
        </MenuItem>
        <MenuItem
          sx={{
            px: 2.5,
            py: 1.5,
          }}
          divider
        >
          <ListItemAvatar
            sx={{
              mr: 1.5,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0,
            }}
          >
            <AvatarState
              variant="rounded"
              state="warning"
              sx={{
                width: 44,
                height: 44,
              }}
            >
              <VerifiedTwoToneIcon fontSize="small" />
            </AvatarState>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant="h5">{t('Expenses')}</Typography>}
            secondary={<>62.5% {t('down')}</>}
            secondaryTypographyProps={{ color: 'warning.main' }}
          />
          <ChevronRightTwoToneIcon
            sx={{
              color: alpha(theme.palette.common.black, 0.3),
              opacity: 0.8,
            }}
          />
        </MenuItem>
      </MenuList>
    </Card>
  );
}

export default Component;
