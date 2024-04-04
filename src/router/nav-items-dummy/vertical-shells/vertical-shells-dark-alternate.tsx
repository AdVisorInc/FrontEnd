import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';
import GroupWorkTwoToneIcon from '@mui/icons-material/GroupWorkTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'src/router/menuItem';
import { routes } from 'src/router/routes';

export const useMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();
  return useMemo(() => {
    return [
      {
        title: t('Main'),
        subMenu: [
          {
            title: t('Home'),
            icon: <HomeTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Business'),
            icon: <BusinessCenterTwoToneIcon />,
            route: '/shells/vertical-shell-dark-alternate',
          },
          {
            title: t('Events'),
            icon: <EventNoteTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Teams'),
            icon: <GroupWorkTwoToneIcon />,
            subMenu: [
              {
                title: t('Manage Teams'),
                route: routes.dummy,
              },
              {
                title: t('Team Insights'),
                route: routes.dummy,
              },
              {
                title: t('Groups'),
                subMenu: [
                  {
                    title: t('Manage Groups'),
                    route: routes.dummy,
                  },
                  {
                    title: t('Group Settings'),
                    route: routes.dummy,
                  },
                ],
              },
            ],
          },
          {
            title: t('Financials'),
            route: routes.dummy,
            icon: <AccountBalanceTwoToneIcon />,
          },
        ],
      },
      {
        title: t('Support'),
        subMenu: [
          {
            title: t('Agents'),
            icon: <SupportAgentTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Helpdesk'),
            route: routes.dummy,
            icon: <QuestionAnswerTwoToneIcon />,
          },
        ],
      },
      {
        title: t('Settings'),
        subMenu: [
          {
            title: t('Preferences'),
            icon: <SettingsTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Account'),
            route: routes.dummy,
            icon: <VerifiedUserTwoToneIcon />,
            subMenu: [
              {
                title: t('Profile'),
                route: routes.dummy,
              },
              {
                title: t('Security'),
                route: routes.dummy,
              },
            ],
          },
        ],
      },
    ];
  }, [t]);
};
