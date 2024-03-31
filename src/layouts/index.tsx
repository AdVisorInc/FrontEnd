import PropTypes from 'prop-types';
import type { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
// Collapsed Shells
import { CollapsedShellsDoubleAccent } from 'src/components/application-ui/collapsed-shells/double-accent/double-accent';
import { CollapsedShellsDoubleDark } from 'src/components/application-ui/collapsed-shells/double-dark/double-dark';
import { CollapsedShellsDouble } from 'src/components/application-ui/collapsed-shells/double/double';
import { CollapsedShellsSingleAccent } from 'src/components/application-ui/collapsed-shells/single-accent/single-accent';
import { CollapsedShellsSingleWhiteOff } from 'src/components/application-ui/collapsed-shells/single-white-off/single-white-off';
import { CollapsedShellsSingleWhite } from 'src/components/application-ui/collapsed-shells/single-white/single-white';
import { CollapsedShellsSingle } from 'src/components/application-ui/collapsed-shells/single/single';
// Stacked Shells
import { StackedShellsTopNavAccent } from 'src/components/application-ui/stacked-shells/top-nav-accent/top-nav-accent';
import { StackedShellsTopNavTabs } from 'src/components/application-ui/stacked-shells/top-nav-tabs/top-nav-tabs';
import { StackedShellsTopNavWide } from 'src/components/application-ui/stacked-shells/top-nav-wide/top-nav-wide';
import { StackedShellsTopNav } from 'src/components/application-ui/stacked-shells/top-nav/top-nav';
import { VerticalShellsAccentHeader } from 'src/components/application-ui/vertical-shells/accent-header/accent-header';
import { VerticalShellsBrand } from 'src/components/application-ui/vertical-shells/brand/brand';
import { VerticalShellsDarkAlternate } from 'src/components/application-ui/vertical-shells/dark-alternate/dark-alternate';
// Vertical Shells
import { VerticalShellsDark } from 'src/components/application-ui/vertical-shells/dark/dark';
import { VerticalShellsLight } from 'src/components/application-ui/vertical-shells/light/light';
import { VerticalShellsWhiteOff } from 'src/components/application-ui/vertical-shells/white-off/white-off';
import { VerticalShellsWhite } from 'src/components/application-ui/vertical-shells/white/white';
// Guards

import { withAuthGuard } from 'src/hocs/with-auth-guard';
import { useCustomization } from 'src/hooks/use-customization';
import { MenuItem } from 'src/router/menuItem';
// Menu Item Hooks
import useMenuItemsCollapsedShells from 'src/router/nav-items-generic-admin-dashboard/collapsed-shells';
import useMenuItemsStackedShells from 'src/router/nav-items-generic-admin-dashboard/stacked-shells';
import useMenuItemsVerticalShells from 'src/router/nav-items-generic-admin-dashboard/vertical-shells';

// import { withGuestGuard } from 'src/hocs/with-guest-guard';

interface LayoutProps {
  children?: ReactNode;
  menuItems?: MenuItem[];
}

export const Layout: FC<LayoutProps> = withAuthGuard((props) => {
  const customization = useCustomization();
  const { t } = useTranslation();

  let ShellComponent: FC<LayoutProps>;
  let menuItems: MenuItem[] = [];

  switch (customization.layout) {
    // Vertical Shells
    case 'vertical-shells-dark':
      ShellComponent = VerticalShellsDark;
      menuItems = useMenuItemsVerticalShells(t);
      break;
    case 'vertical-shells-dark-alternate':
      ShellComponent = VerticalShellsDarkAlternate;
      menuItems = useMenuItemsVerticalShells(t);
      break;
    case 'vertical-shells-brand':
      ShellComponent = VerticalShellsBrand;
      menuItems = useMenuItemsVerticalShells(t);
      break;
    case 'vertical-shells-white':
      ShellComponent = VerticalShellsWhite;
      menuItems = useMenuItemsVerticalShells(t);
      break;
    case 'vertical-shells-white-off':
      ShellComponent = VerticalShellsWhiteOff;
      menuItems = useMenuItemsVerticalShells(t);
      break;
    case 'vertical-shells-light':
      ShellComponent = VerticalShellsLight;
      menuItems = useMenuItemsVerticalShells(t);
      break;
    case 'vertical-shells-accent-header':
      ShellComponent = VerticalShellsAccentHeader;
      menuItems = useMenuItemsVerticalShells(t);
      break;

    // Collapsed Shells
    case 'collapsed-shells-double':
      ShellComponent = CollapsedShellsDouble;
      menuItems = useMenuItemsCollapsedShells(t);
      break;
    case 'collapsed-shells-double-accent':
      ShellComponent = CollapsedShellsDoubleAccent;
      menuItems = useMenuItemsCollapsedShells(t);
      break;
    case 'collapsed-shells-double-dark':
      ShellComponent = CollapsedShellsDoubleDark;
      menuItems = useMenuItemsCollapsedShells(t);
      break;
    case 'collapsed-shells-single':
      ShellComponent = CollapsedShellsSingle;
      menuItems = useMenuItemsCollapsedShells(t);
      break;
    case 'collapsed-shells-single-accent':
      ShellComponent = CollapsedShellsSingleAccent;
      menuItems = useMenuItemsCollapsedShells(t);
      break;
    case 'collapsed-shells-single-white':
      ShellComponent = CollapsedShellsSingleWhite;
      menuItems = useMenuItemsCollapsedShells(t);
      break;
    case 'collapsed-shells-single-white-off':
      ShellComponent = CollapsedShellsSingleWhiteOff;
      menuItems = useMenuItemsCollapsedShells(t);
      break;

    // Stacked Shells
    case 'stacked-shells-top-nav':
      ShellComponent = StackedShellsTopNav;
      menuItems = useMenuItemsStackedShells(t);
      break;
    case 'stacked-shells-top-nav-accent':
      ShellComponent = StackedShellsTopNavAccent;
      menuItems = useMenuItemsStackedShells(t);
      break;
    case 'stacked-shells-top-nav-tabs':
      ShellComponent = StackedShellsTopNavTabs;
      menuItems = useMenuItemsStackedShells(t);
      break;
    case 'stacked-shells-top-nav-wide':
      ShellComponent = StackedShellsTopNavWide;
      menuItems = useMenuItemsStackedShells(t);
      break;

    default:
      ShellComponent = VerticalShellsDark;
      menuItems = useMenuItemsVerticalShells(t);
  }

  return (
    <>
      <ShellComponent
        menuItems={menuItems}
        {...props}
      />
    </>
  );
});

Layout.propTypes = {
  children: PropTypes.node,
};
