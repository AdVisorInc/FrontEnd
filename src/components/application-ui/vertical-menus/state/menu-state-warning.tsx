import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import { ListItemText, MenuList } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MenuItemWarning } from 'src/components/base/styles/menu-item';

const VerticalMenuStateWarning = () => {
  const { t } = useTranslation();

  return (
    <MenuList disablePadding>
      <MenuItemWarning selected>
        <ListItemText
          primaryTypographyProps={{
            variant: 'h6',
          }}
          primary={t('Dashboard')}
        />
        <ChevronRightTwoToneIcon
          sx={{
            opacity: 0.8,
          }}
        />
      </MenuItemWarning>
      <MenuItemWarning>
        <ListItemText
          primaryTypographyProps={{
            variant: 'h6',
          }}
          primary={t('Members')}
        />
        <ChevronRightTwoToneIcon
          sx={{
            ml: 1,

            opacity: 0.8,
          }}
        />
      </MenuItemWarning>
      <MenuItemWarning disabled>
        <ListItemText
          primaryTypographyProps={{
            variant: 'h6',
          }}
          primary={t('Events')}
        />
        <ChevronRightTwoToneIcon
          sx={{
            opacity: 0.8,
          }}
        />
      </MenuItemWarning>
      <MenuItemWarning>
        <ListItemText
          primaryTypographyProps={{
            variant: 'h6',
          }}
          primary={t('Settings')}
        />
        <ChevronRightTwoToneIcon
          sx={{
            opacity: 0.8,
          }}
        />
      </MenuItemWarning>
    </MenuList>
  );
};

export default VerticalMenuStateWarning;
