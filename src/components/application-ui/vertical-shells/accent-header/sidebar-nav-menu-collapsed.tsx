import { Box, List, ListItemIcon } from '@mui/material';
import React, { FC, useState } from 'react';
import { RouterLink } from 'src/components/base/router-link';
import { usePathname } from 'src/hooks/use-pathname';
import { MenuItem } from 'src/router/menuItem';
import { ListItemButtonWrapper } from './sidebar-nav-menu';

interface NavItemProps {
  item: MenuItem;
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const { icon, route, subMenu } = item;
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
    <Box
      px={2}
      pt={0.5}
    >
      <ListItemButtonWrapper
        sx={{
          pl: 1.7,
          borderRadius: (theme) => theme.shape.borderRadius,
        }}
        selected={isActive || isSubMenuActive}
        onClick={handleToggle}
        //@ts-ignore
        component={route ? RouterLink : 'a'}
        href={route ? route : undefined}
      >
        {icon && <ListItemIcon sx={{ minWidth: 0 }}>{icon}</ListItemIcon>}
      </ListItemButtonWrapper>
    </Box>
  );
};

interface SidebarNavMenuCollapsedProps {
  menuItems?: MenuItem[];
}

export const SidebarNavMenuCollapsed: FC<SidebarNavMenuCollapsedProps> = ({ menuItems = [] }) => {
  return (
    <Box pt={3}>
      {menuItems.map((menuItem) => (
        <div key={menuItem.title}>
          <List component="nav">
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
