import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { Box, ButtonBase, Grow, Paper, Popper, Stack } from '@mui/material';
import React, { FC, useRef, useState } from 'react';
import { usePathname } from 'src/hooks/use-pathname';
import { useRouter } from 'src/hooks/use-router';
import { MenuItem } from 'src/router/menuItem';
import { HEADER_HEIGHT } from 'src/theme/utils';

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

  const isActive = item.route ? isRouteActive(item.route, pathname, item.subMenu) : false;
  const placement =
    isSub && item.subMenu ? 'right-start' : item.subMenu ? 'bottom-start' : 'bottom-start';
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
        },
      }}
      {...commonProps}
      ref={anchorRef}
    >
      {isSub ? (
        <ButtonBase
          onClick={() => item.route && router.push(item.route)}
          sx={{
            justifyContent: 'space-between',
            width: '100%',
            fontWeight: 500,
            fontSize: 15,
            borderRadius: (theme) => theme.shape.borderRadius + 'px',
            my: '1px',
            p: 1,
            backgroundColor: (theme) =>
              isHovered
                ? theme.palette.mode === 'dark'
                  ? theme.palette.primary.main
                  : 'background.default'
                : isActive
                  ? theme.palette.mode === 'dark'
                    ? theme.palette.primary.main
                    : 'background.default'
                  : 'transparent',
            color: (theme) =>
              isHovered
                ? theme.palette.mode === 'dark'
                  ? theme.palette.common.white
                  : theme.palette.neutral[900]
                : isActive
                  ? theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.neutral[900]
                  : theme.palette.mode === 'dark'
                    ? theme.palette.neutral[400]
                    : theme.palette.neutral[700],
            '&:hover': {
              color: (theme) =>
                isActive
                  ? theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.neutral[900]
                  : theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.neutral[900],

              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? theme.palette.primary.main : 'background.default',
            },
          }}
        >
          {item.title}
        </ButtonBase>
      ) : (
        <ButtonBase
          onClick={() => item.route && router.push(item.route)}
          {...commonProps}
          sx={{
            height: HEADER_HEIGHT * 1.3,
            p: (theme) => theme.spacing(0.9, 1.5, 0.9, 1.8),
            fontSize: 15,
            letterSpacing: -0.025,
            mr: 3.5,
            px: 0,
            fontWeight: 600,
            color: (theme) =>
              isHovered
                ? theme.palette.mode === 'dark'
                  ? theme.palette.common.white
                  : theme.palette.primary.main
                : isActive
                  ? theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.primary.main
                  : theme.palette.mode === 'dark'
                    ? theme.palette.neutral[400]
                    : theme.palette.neutral[800],
            '&:hover': {
              color: (theme) =>
                isActive
                  ? theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.primary.main
                  : theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.primary.main,

              '&::before': {
                opacity: 1,
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.primary.main,
                transform: 'translateY(0px)',
              },
            },

            '&::before': {
              position: 'absolute',
              content: '""',
              width: '100%',
              height: 3,
              bottom: 0,
              borderRadius: 3,
              opacity: isHovered ? 1 : isActive ? 1 : 0,
              background: (theme) =>
                isHovered
                  ? theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.primary.main
                  : isActive
                    ? theme.palette.mode === 'dark'
                      ? theme.palette.common.white
                      : theme.palette.primary.main
                    : theme.palette.neutral[50],
              transform: isHovered
                ? 'translateY(0px)'
                : isActive
                  ? 'translateY(0px)'
                  : 'translateY(0px)',
              transition: (theme) => theme.transitions.create(['opacity', 'transform']),
            },
          }}
        >
          {item.title ? item.title : null}
          {item.subMenu ? (
            <ExpandMoreTwoToneIcon
              sx={{ ml: 0.5 }}
              fontSize="inherit"
            />
          ) : null}
        </ButtonBase>
      )}
      {item.subMenu && (
        <Popper
          open={menuOpen}
          anchorEl={anchorRef.current}
          placement={placement}
          disablePortal
          transition
          sx={{ zIndex: 12, borderRadius: 6 }}
        >
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              timeout={350}
            >
              <Paper
                {...commonProps}
                sx={{
                  minWidth: 220,
                  maxWidth: 300,
                  p: 1.5,
                }}
              >
                {item.subMenu.map((subItem, index) => (
                  <MenuItemComponent
                    key={index}
                    item={subItem}
                    isSub
                  />
                ))}
              </Paper>
            </Grow>
          )}
        </Popper>
      )}
    </Box>
  );
};

interface MenuProps {
  menuItems?: MenuItem[];
}

export const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  return (
    <>
      <Stack
        spacing={0}
        alignItems="center"
        flexDirection="row"
      >
        {menuItems.map((item, index) => (
          <MenuItemComponent
            key={index}
            item={item}
          />
        ))}
      </Stack>
    </>
  );
};
