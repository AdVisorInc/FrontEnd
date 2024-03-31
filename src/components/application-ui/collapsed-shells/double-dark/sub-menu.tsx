import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  alpha,
  Box,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Scrollbar } from 'src/components/base/scrollbar';
import { usePathname } from 'src/hooks/use-pathname';
import { useRouter } from 'src/hooks/use-router';
import { MenuItem } from 'src/router/menuItem';

const ListItemButtonWrapper = styled(ListItemButton)(({ theme }) => ({
  color: alpha(theme.palette.common.white, 0.4),
  borderRadius: theme.shape.borderRadius,
  transition: 'none',
  fontWeight: 500,
  fontSize: 15,
  marginBottom: '2px',
  padding: theme.spacing(0.8, 2),

  '& .MuiListItemIcon-root': {
    color: alpha(theme.palette.common.white, 0.7),
  },

  '& .MuiListItemText-root': {
    color: alpha(theme.palette.common.white, 0.7),
  },

  '&:hover': {
    color: theme.palette.common.white,
    background: alpha(theme.palette.common.white, 0.06),

    '& .MuiListItemIcon-root': {
      color: theme.palette.common.white,
    },

    '& .MuiListItemText-root': {
      color: theme.palette.common.white,
    },
  },

  '&.Mui-selected, &.Mui-selected:hover': {
    color: theme.palette.common.white,
    background: alpha(theme.palette.common.white, 0.06),

    '& .MuiListItemIcon-root': {
      color: theme.palette.common.white,
    },

    '& .MuiListItemText-root': {
      color: theme.palette.common.white,
    },
  },
}));

const SubMenu = ({ submenu }: { submenu: MenuItem | null }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [openNested, setOpenNested] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (submenu?.subMenu) {
      const activeState: Record<string, boolean> = {};
      submenu.subMenu.forEach((item) => {
        if (item.subMenu) {
          const isActive = item.subMenu.some((subItem) => pathname === subItem.route);
          activeState[item.title] = isActive;
        }
      });
      setOpenNested(activeState);
    }
  }, [submenu, pathname]);

  const isSubMenuActive = (menu: MenuItem) => {
    return menu.subMenu?.some((sub) => pathname === sub.route) ?? false;
  };

  if (!submenu || !submenu.subMenu) return null;

  return (
    <>
      <Typography
        sx={{ px: 2.5, py: 3 }}
        variant="h5"
        fontWeight={600}
      >
        {submenu.title}
      </Typography>
      <Divider
        sx={{
          borderColor: (theme) => theme.palette.neutral[800],
          width: (theme) => theme.spacing(4),
          ml: 2.5,
        }}
      />
      <Box
        flex={1}
        overflow="auto"
      >
        <Scrollbar>
          <List sx={{ p: { xs: 1.5, sm: 2.5 } }}>
            {submenu.subMenu.map((item) => (
              <div key={item.title}>
                {item.subMenu ? (
                  <>
                    <ListItemButtonWrapper
                      onClick={() =>
                        setOpenNested((prev) => ({ ...prev, [item.title]: !prev[item.title] }))
                      }
                      selected={isSubMenuActive(item)}
                    >
                      <ListItemText
                        disableTypography
                        primary={item.title}
                      />
                      {openNested[item.title] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButtonWrapper>
                    <Collapse
                      in={openNested[item.title] || false}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List
                        component="div"
                        disablePadding
                      >
                        {item.subMenu.map((subItem) => (
                          <ListItemButtonWrapper
                            key={subItem.title}
                            selected={pathname === subItem.route}
                            onClick={() => router.push(subItem.route || '#')}
                            sx={{ pl: 3, py: 0.5, fontWeight: 500, fontSize: 14 }}
                          >
                            <ListItemText
                              disableTypography
                              primary={subItem.title}
                            />
                          </ListItemButtonWrapper>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItemButtonWrapper
                    selected={pathname === item.route}
                    onClick={() => router.push(item.route || '#')}
                  >
                    <ListItemText
                      disableTypography
                      primary={item.title}
                    />
                  </ListItemButtonWrapper>
                )}
              </div>
            ))}
          </List>
        </Scrollbar>
      </Box>
    </>
  );
};

export default SubMenu;
