import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import {
  alpha,
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListProps,
  ListSubheader,
  styled,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { FC, useState } from 'react';
import { RouterLink } from 'src/components/base/router-link';
import { usePathname } from 'src/hooks/use-pathname';
import { MenuItem } from 'src/router/menuItem';

interface NavItemProps {
  item: MenuItem;
}

const ListSubheaderWrapper = styled(ListSubheader)<ListProps<'div', { component: 'div' }>>(
  ({ theme }) => ({
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: 13,
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[300] : theme.palette.neutral[600],
    lineHeight: theme.spacing(5),
    padding: theme.spacing(0, 2),
    background: 'transparent',
  })
);

export const ListItemButtonWrapper = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.neutral[300] : theme.palette.neutral[500],
  borderRadius: theme.shape.borderRadius,
  transition: 'none',
  fontWeight: 600,
  fontSize: 14,
  marginBottom: '2px',
  padding: theme.spacing(0.8, 1, 0.8, 2),

  '& .MuiListItemIcon-root': {
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[600] : theme.palette.neutral[700],
    minWidth: 36,
  },

  '& .MuiListItemText-root': {
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[500] : theme.palette.neutral[700],
  },

  '&:hover': {
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[300] : theme.palette.neutral[900],
    background:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.white, 0.04)
        : theme.palette.neutral[50],

    '& .MuiListItemIcon-root': {
      color:
        theme.palette.mode === 'dark' ? theme.palette.neutral[200] : theme.palette.neutral[900],
    },

    '& .MuiListItemText-root': {
      color: theme.palette.mode === 'dark' ? theme.palette.neutral[25] : theme.palette.neutral[900],
    },
  },

  '&.Mui-selected, &.Mui-selected:hover': {
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.primary.contrastText
        : theme.palette.primary.main,
    background:
      theme.palette.mode === 'dark'
        ? theme.palette.primary.main
        : alpha(theme.palette.neutral[100], 0.9),

    '& .MuiListItemIcon-root': {
      color:
        theme.palette.mode === 'dark'
          ? theme.palette.primary.contrastText
          : theme.palette.primary.main,
    },

    '& .MuiListItemText-root': {
      color:
        theme.palette.mode === 'dark'
          ? theme.palette.primary.contrastText
          : theme.palette.primary.main,
    },
  },
}));

const SubMenu = styled(List)<ListProps<'div', { component: 'div' }>>(({ theme }) => ({
  paddingTop: theme.spacing(0.5),

  '& .MuiListItemButton-root': {
    padding: theme.spacing(0.8, 2, 0.8, 6),
    fontWeight: 500,

    '&::before': {
      content: '" "',
      background:
        theme.palette.mode === 'dark' ? theme.palette.neutral[200] : theme.palette.neutral[700],
      opacity: 0,
      position: 'absolute',
      left: theme.spacing(3.1),
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
  return (
    <Box>
      {menuItems.map((menuItem) => (
        <div key={menuItem.title}>
          <List
            component="nav"
            subheader={
              <ListSubheaderWrapper
                component="div"
                disableSticky
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
