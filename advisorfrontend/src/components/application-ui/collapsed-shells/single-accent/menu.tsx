import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import {
  alpha,
  Box,
  Button,
  Divider,
  Fade,
  IconButton,
  Paper,
  Popper,
  Stack,
  styled,
  Tooltip,
  useTheme,
} from '@mui/material';
import React, { FC, useRef, useState } from 'react';
import { Logo } from 'src/components/base/logo';
import { usePathname } from 'src/hooks/use-pathname';
import { useRouter } from 'src/hooks/use-router';
import { MenuItem } from 'src/router/menuItem';
import { neutral } from 'src/theme/colors';

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  background: alpha(theme.palette.primary.main, 0.08),
}));

const isRouteActive = (route?: string, currentPath?: string, subMenu?: MenuItem[]): boolean => {
  if (route && route === currentPath) return true;
  if (subMenu) {
    for (let item of subMenu) {
      if (item.route && isRouteActive(item.route, currentPath, item.subMenu)) {
        return true;
      }
    }
  }
  return false;
};

const MenuItemComponent: FC<{
  item: MenuItem;
  isSub?: boolean;
}> = ({ item, isSub }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const anchorRef = useRef(null);
  const theme = useTheme();

  const isActive = item.route ? isRouteActive(item.route, pathname, item.subMenu) : false;
  const placement =
    item.subMenu && item.route ? (isSub ? 'right-start' : 'right-start') : 'right-start';

  const commonProps = {
    onMouseEnter: () => {
      setMenuOpen(true);
      setIsHovered(true);
    },
    onMouseLeave: () => {
      setMenuOpen(false);
      setIsHovered(false);
    },
  };

  return (
    <Box
      position="relative"
      zIndex={2}
      sx={{
        '&:hover': {
          zIndex: 3,

          '& > .MuiButton-root': {
            backgroundColor: isSub
              ? theme.palette.mode === 'dark'
                ? alpha(theme.palette.neutral[900], 0.6)
                : 'background.default'
              : 'background.paper',
          },
        },
      }}
      {...commonProps}
      ref={anchorRef}
    >
      {isSub ? (
        <Button
          fullWidth
          endIcon={item.subMenu ? <KeyboardArrowRightTwoToneIcon fontSize="small" /> : null}
          onClick={() => item.route && router.push(item.route)}
          sx={{
            textAlign: 'left',
            justifyContent: 'space-between',
            color: isActive
              ? theme.palette.mode === 'dark'
                ? theme.palette.neutral[300]
                : theme.palette.primary.main
              : theme.palette.mode === 'dark'
                ? theme.palette.neutral[500]
                : neutral[800],
            backgroundColor: isActive
              ? theme.palette.mode === 'dark'
                ? 'background.default'
                : 'background.default'
              : theme.palette.mode === 'dark'
                ? 'transparent'
                : 'background.paper',
            fontWeight: 500,
            fontSize: 15,
            my: '1px',
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[900], 0.6)
                  : 'background.default',
              color: isActive
                ? theme.palette.mode === 'dark'
                  ? theme.palette.common.white
                  : theme.palette.primary.main
                : theme.palette.mode === 'dark'
                  ? theme.palette.common.white
                  : neutral[900],
            },
          }}
        >
          {item.icon && (
            <Box
              component="span"
              pr={2}
            >
              {item.icon}
            </Box>
          )}
          {item.title}
        </Button>
      ) : (
        <Tooltip
          arrow
          placement="right"
          title={!item.subMenu && item.title}
        >
          <IconButtonWrapper
            onClick={() => item.route && router.push(item.route)}
            {...commonProps}
            sx={{
              color: (theme) =>
                isActive
                  ? theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.primary.main
                  : theme.palette.neutral[700],

              background: (theme) =>
                isActive
                  ? theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[900], 0.6)
                    : alpha(theme.palette.neutral[300], 0.6)
                  : 'transparent',

              '&:hover': {
                color: (theme) =>
                  isActive
                    ? theme.palette.mode === 'dark'
                      ? theme.palette.common.white
                      : theme.palette.primary.main
                    : theme.palette.mode === 'dark'
                      ? theme.palette.neutral[400]
                      : theme.palette.neutral[900],

                background:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[900], 0.3)
                    : alpha(theme.palette.neutral[300], 0.6),
              },
            }}
          >
            {item.icon ? item.icon : null}
          </IconButtonWrapper>
        </Tooltip>
      )}
      {item.subMenu && (
        <Popper
          open={menuOpen}
          anchorEl={anchorRef.current}
          placement={placement}
          disablePortal
          transition
          sx={{ zIndex: 9999 }}
        >
          {({ TransitionProps }) => (
            <Fade
              {...TransitionProps}
              timeout={350}
            >
              <Paper
                {...commonProps}
                sx={{ minWidth: 240, maxWidth: 320, p: 2 }}
              >
                {item.subMenu.map((subItem, index) => (
                  <MenuItemComponent
                    key={index}
                    item={subItem}
                    isSub
                  />
                ))}
              </Paper>
            </Fade>
          )}
        </Popper>
      )}
    </Box>
  );
};
interface NavMenuProps {
  menuItems?: MenuItem[];
}

export const NavMenu: React.FC<NavMenuProps> = ({ menuItems }) => {
  return (
    <>
      <Box
        px={2}
        py={2.6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Logo isLinkStatic />
      </Box>
      <Divider
        sx={{
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? theme.palette.neutral[800] : theme.palette.neutral[400],
          borderStyle: 'dashed',
          mx: 3,
        }}
      />
      <Box flex={1}>
        <Stack
          pt={3}
          spacing={1}
          alignItems="center"
        >
          {menuItems.map((item, index) => (
            <MenuItemComponent
              key={index}
              item={item}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};
