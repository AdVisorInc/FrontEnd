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
  useTheme,
} from '@mui/material';
import React, { FC, useRef, useState } from 'react';
import { Logo } from 'src/components/base/logo';
import { TooltipLight } from 'src/components/base/styles/tooltips';
import { usePathname } from 'src/hooks/use-pathname';
import { useRouter } from 'src/hooks/use-router';
import { MenuItem } from 'src/router/menuItem';

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  width: theme.spacing(5.5),
  height: theme.spacing(5.5),
  borderRadius: theme.shape.borderRadius * 2,
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();

  const anchorRef = useRef(null);

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
            backgroundColor: isSub ? 'background.default' : 'background.paper',
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
                : 'primary.main'
              : theme.palette.mode === 'dark'
                ? theme.palette.neutral[500]
                : 'text.primary',
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
              backgroundColor: 'background.default',
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
        <TooltipLight
          arrow
          placement="right"
          title={!item.subMenu && item.title}
        >
          <IconButtonWrapper
            onClick={() => item.route && router.push(item.route)}
            {...commonProps}
            sx={{
              color: (theme) =>
                isActive ? theme.palette.primary.contrastText : theme.palette.neutral[600],

              background: (theme) => (isActive ? theme.palette.primary.main : 'transparent'),

              '&:hover': {
                color: (theme) =>
                  isActive ? theme.palette.primary.contrastText : theme.palette.neutral[300],

                background: (theme) =>
                  isActive ? theme.palette.primary.main : alpha(theme.palette.neutral[800], 0.4),
              },
            }}
          >
            {item.icon ? item.icon : null}
          </IconButtonWrapper>
        </TooltipLight>
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
                elevation={21}
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
        <Logo
          dark
          isLinkStatic
        />
      </Box>
      <Divider
        sx={{
          borderColor: (theme) => theme.palette.neutral[800],
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
