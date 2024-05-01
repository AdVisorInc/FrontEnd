import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PropTypes from 'prop-types';
import { useEffect, type FC, type ReactNode } from 'react';
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
import { subscribeToNotifications } from '../slices/notifications';
import { fetchUserProfile } from '../slices/userProfile';
import { RootState, store, useDispatch, useSelector } from '../store';
import { getNotificationUnsubscribe } from '../utils/notificationUtils';

// import { withGuestGuard } from 'src/hocs/with-guest-guard';

interface LayoutProps {
  children?: ReactNode;
  menuItems?: MenuItem[];
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export const Layout: FC<LayoutProps> = withAuthGuard((props) => {
  const customization = useCustomization();
  const { t } = useTranslation();

  let ShellComponent: FC<LayoutProps>;
  let menuItems: MenuItem[] = [];
  const dispatch = useDispatch();
  const userProfile = useSelector((state: RootState) => state.userProfile.data);
  useEffect(() => {
    if (!userProfile) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, userProfile]);
  useEffect(() => {
    dispatch(subscribeToNotifications());

    return () => {
      const unsubscribe = getNotificationUnsubscribe();
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [dispatch]);

  switch (customization.layout) {
    // Vertical Shells

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
      <Elements stripe={stripePromise}>
        <ShellComponent
          menuItems={menuItems}
          {...props}
        />
      </Elements>
    </>
  );
});

Layout.propTypes = {
  children: PropTypes.node,
};
