import { alpha, Box, Divider, IconButton, Stack, styled, Tooltip } from '@mui/material';
import React, { useEffect } from 'react';
import { Logo } from 'src/components/base/logo';
import { Scrollbar } from 'src/components/base/scrollbar';
import { usePathname } from 'src/hooks/use-pathname';
import { useRouter } from 'src/hooks/use-router';
import { MenuItem } from 'src/router/menuItem';

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  background: alpha(theme.palette.primary.main, 0.08),
}));

interface MenuProps {
  menuItems?: MenuItem[];
  setSubMenu: (menu: MenuItem | null) => void;
}

export const Menu: React.FC<MenuProps> = ({ menuItems, setSubMenu }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const activeMenu = menuItems.find((item) => isRouteActive(item));
    setSubMenu(activeMenu || null);
  }, [pathname]);

  const isRouteActive = (menuItem: MenuItem): boolean => {
    if (pathname === menuItem.route) return true;
    if (menuItem.subMenu) {
      return menuItem.subMenu.some((sub) => isRouteActive(sub));
    }
    return false;
  };

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
          mx: 3.5,
        }}
      />
      <Box
        flex={1}
        overflow="auto"
      >
        <Scrollbar dark>
          <Stack
            pt={{ xs: 2, sm: 3 }}
            spacing={0.5}
            alignItems="center"
          >
            {menuItems.map((menuItem) => (
              <Tooltip
                arrow
                key={menuItem.title}
                title={!isRouteActive(menuItem) && menuItem.title}
                placement="right"
              >
                <IconButtonWrapper
                  onClick={() => {
                    if (menuItem.route) {
                      router.push(menuItem.route);
                    }
                  }}
                  sx={{
                    color: (theme) =>
                      isRouteActive(menuItem)
                        ? theme.palette.primary.contrastText
                        : theme.palette.neutral[600],

                    background: (theme) =>
                      isRouteActive(menuItem)
                        ? theme.palette.mode === 'dark'
                          ? theme.palette.primary.dark
                          : theme.palette.neutral[900]
                        : 'transparent',

                    '&:hover': {
                      color: (theme) =>
                        isRouteActive(menuItem)
                          ? theme.palette.neutral[100]
                          : theme.palette.mode === 'dark'
                            ? theme.palette.neutral[200]
                            : theme.palette.neutral[800],

                      background: (theme) =>
                        isRouteActive(menuItem)
                          ? theme.palette.neutral[900]
                          : theme.palette.mode === 'dark'
                            ? alpha(theme.palette.neutral[25], 0.06)
                            : alpha(theme.palette.neutral[300], 0.4),
                    },
                  }}
                >
                  {menuItem.icon}
                </IconButtonWrapper>
              </Tooltip>
            ))}
          </Stack>
        </Scrollbar>
      </Box>
    </>
  );
};
