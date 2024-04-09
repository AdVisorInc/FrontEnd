import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import PowerSettingsNewTwoToneIcon from '@mui/icons-material/PowerSettingsNewTwoTone';
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Divider,
  IconButton,
  lighten,
  Skeleton,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TooltipLight } from 'src/components/base/styles/tooltips';
import {RootState, useDispatch, useSelector} from "../../../../store";

interface Props {
  isHovered: boolean;
  sidebarCollapsed: boolean;
}

interface TooltipProps {
  icon: React.ReactNode;
  tooltipText: string;
}

const FooterButton: FC<TooltipProps> = ({ icon, tooltipText }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <TooltipLight
      placement="top"
      arrow
      title={t(tooltipText)}
    >
      <IconButton
        sx={{
          background: alpha(theme.palette.common.white, 0.05),
          color: alpha(theme.palette.common.white, 0.95),
          '&:hover': {
            color: alpha(theme.palette.common.white, 0.95),
            background: theme.palette.primary.main,
          },
        }}
      >
        {icon}
      </IconButton>
    </TooltipLight>
  );
};

const UserAccount: React.FC<Props> = ({ sidebarCollapsed, isHovered }) => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userProfile.data);
  const isLoading = useSelector((state: RootState) => state.userProfile.isLoaded);

  const tenantDescription = (
    <Box mt={2} overflow="hidden" width="100%">
      {user ? (
        <>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            lineHeight={1.2}
            sx={{
              pb: 0.6,
              color: (theme) => theme.palette.common.white,
            }}
          >
            {`${user.first_name} ${user.last_name}`}
          </Typography>
          <Typography
            variant="body1"
            noWrap
            lineHeight={1.2}
            sx={{
              color: (theme) => alpha(theme.palette.common.white, 0.6),
            }}
          >
            {user.jobtitle}
          </Typography>
        </>
      ) : (
        <>
          <Skeleton variant="text" width={120} />
          <Skeleton variant="text" width={80} />
        </>
      )}
      <Divider
        sx={{
          m: 3,
          borderColor: alpha(lighten(theme.palette.primary.main, 0.3), 0.2),
        }}
      />
      <Stack
        direction="row"
        pb={1}
        spacing={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={6}
        position="relative"
      >
        <FooterButton
          icon={<EventTwoToneIcon fontSize="small" />}
          tooltipText="Events Calendar"
        />
        <FooterButton
          icon={<SmsTwoToneIcon fontSize="small" />}
          tooltipText="Messenger"
        />
        <FooterButton
          icon={<PowerSettingsNewTwoToneIcon fontSize="small" />}
          tooltipText="Logout"
        />
      </Stack>
    </Box>
  );

  return (
    <Box
      p={2}
      mb={2}
      sx={{
        background: `linear-gradient(0deg, ${alpha(
          lighten(theme.palette.primary.main, 0.3),
          0.05
        )} 0%, transparent 90%)`,
        color: alpha(theme.palette.common.white, 0.95),
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {user ? (
        <Avatar
          sx={{
            width: sidebarCollapsed
              ? isHovered
                ? theme.spacing(7)
                : theme.spacing(5)
              : theme.spacing(7),
            height: sidebarCollapsed
              ? isHovered
                ? theme.spacing(7)
                : theme.spacing(5)
              : theme.spacing(7),
          }}
          src={user.avatar_url}
          alt={`${user.first_name} ${user.last_name}`}
        />
      ) : (
        <Skeleton
          variant="circular"
          width={sidebarCollapsed ? (isHovered ? 56 : 40) : 56}
          height={sidebarCollapsed ? (isHovered ? 56 : 40) : 56}
        />
      )}
      {mdUp && sidebarCollapsed ? isHovered && tenantDescription : tenantDescription}
    </Box>
  );
};

export default UserAccount;

