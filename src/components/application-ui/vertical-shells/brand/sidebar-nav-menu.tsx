import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import {
  alpha,
  Box,
  Collapse,
  darken,
  lighten,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListProps,
  ListSubheader,
  styled,
  Theme,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { FC, useState } from 'react';
import { RouterLink } from 'src/components/base/router-link';
import { usePathname } from 'src/hooks/use-pathname';
import { useRouter } from 'src/hooks/use-router';
import { MenuItem } from 'src/router/menuItem';

interface NavItemProps {
  item: MenuItem;
}

const ListSubheaderWrapper = styled(ListSubheader)<ListProps<'div', { component: 'div' }>>(
  ({ theme }) => ({
    background:
      theme.palette.mode === 'dark'
        ? darken(theme.palette.primary.dark, 0.9)
        : darken(theme.palette.primary.main, 0.7),
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: 13,
    color: alpha(theme.palette.common.white, 0.5),
    lineHeight: theme.spacing(5),
    padding: theme.spacing(0, 2),
  })
);

export const ListItemButtonWrapper = styled(ListItemButton)(({ theme }) => ({
  color: alpha(theme.palette.common.white, 0.8),
  borderRadius: theme.shape.borderRadius,
  transition: 'none',
  fontWeight: 600,
  fontSize: 14,
  marginBottom: '2px',
  padding: theme.spacing(0.8, 1, 0.8, 1.5),

  '& .MuiListItemIcon-root': {
    minWidth: 38,
    color: alpha(theme.palette.common.white, 0.6),
  },

  '& .MuiListItemText-root': {
    color: alpha(theme.palette.common.white, 0.6),
  },

  '&:hover': {
    color: alpha(theme.palette.common.white, 0.95),
    background: alpha(lighten(theme.palette.primary.main, 0.3), 0.1),

    '& .MuiListItemIcon-root': {
      color: alpha(theme.palette.common.white, 0.95),
    },

    '& .MuiListItemText-root': {
      color: alpha(theme.palette.common.white, 0.95),
    },
  },

  '&.Mui-selected, &.Mui-selected:hover': {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,

    '& .MuiListItemIcon-root': {
      color: alpha(theme.palette.common.white, 0.95),
    },

    '& .MuiListItemText-root': {
      color: alpha(theme.palette.common.white, 0.95),
    },
  },
}));

const SubMenu = styled(List)<ListProps<'div', { component: 'div' }>>(({ theme }) => ({
  '& .MuiListItemButton-root': {
    padding: theme.spacing(0.8, 1, 0.8, 5.5),
    fontWeight: 500,

    '&::before': {
      content: '" "',
      background: alpha(theme.palette.common.white, 0.95),
      opacity: 0,
      position: 'absolute',
      left: theme.spacing(2.4),
      borderRadius: 4,
      top: '50%',
      height: '6px',
      width: '6px',
      transform: 'scale(0)',
      marginTop: '-3px',
      transition: theme.transitions.create(['transform', 'opacity']),
    },

    '&.Mui-selected, &:hover': {
      '&::before': {
        opacity: 1,
        transform: 'scale(1)',
      },
    },

    '& .MuiListItemText-root': {
      margin: 0,
    },
  },
}));

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const { title, icon, route, subMenu } = item;
  const pathname = usePathname();
  const isActive = route && pathname.includes(route);
  const isSubMenuActive = subMenu?.some((sub) => sub.route && pathname.includes(sub.route));

  const [open, setOpen] = useState(isSubMenuActive);

  const handleToggle = () => {
    if (subMenu) {
      setOpen(!open);
    }
  };

  return (
    <Box px={2}>
      <ListItemButtonWrapper
        selected={isActive || isSubMenuActive}
        onClick={handleToggle}
        //@ts-ignore
        component={route ? RouterLink : 'a'}
        href={route ? route : undefined}
      >
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText
          disableTypography
          primary={title}
        />
        {subMenu && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: (theme) => theme.transitions.create(['transform']),
            }}
          >
            <KeyboardArrowRightTwoToneIcon fontSize="small" />
          </Box>
        )}
      </ListItemButtonWrapper>
      {subMenu && (
        <Collapse in={open}>
          <SubMenu
            component="div"
            sx={{ mx: -2 }}
            disablePadding
          >
            {subMenu.map((subItem) => (
              <NavItem
                key={subItem.title}
                item={subItem}
              />
            ))}
          </SubMenu>
        </Collapse>
      )}
    </Box>
  );
};

interface SidebarNavMenuProps {
  menuItems?: MenuItem[];
}

export const SidebarNavMenu: FC<SidebarNavMenuProps> = ({ menuItems = [] }) => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Box pb={1}>
      {menuItems.map((menuItem) => (
        <div key={menuItem.title}>
          <List
            component="nav"
            subheader={
              <ListSubheaderWrapper
                component="div"
                disableSticky={!mdUp}
              >
                {menuItem.title}
              </ListSubheaderWrapper>
            }
          >
            {menuItem.subMenu?.map((subItem) => (
              <NavItem
                key={subItem.title}
                item={subItem}
              />
            ))}
          </List>
        </div>
      ))}
    </Box>
  );
};

SidebarNavMenu.propTypes = {
  menuItems: PropTypes.array,
};
