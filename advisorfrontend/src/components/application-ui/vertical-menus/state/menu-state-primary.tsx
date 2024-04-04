import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import { ListItemText, MenuList } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MenuItemPrimary } from 'src/components/base/styles/menu-item';

const VerticalMenuStatePrimary = () => {
  const { t } = useTranslation();

  return (
    <MenuList disablePadding>
      <MenuItemPrimary selected>
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
      </MenuItemPrimary>
      <MenuItemPrimary>
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
      </MenuItemPrimary>
      <MenuItemPrimary disabled>
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
      </MenuItemPrimary>
      <MenuItemPrimary>
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
      </MenuItemPrimary>
    </MenuList>
  );
};

export default VerticalMenuStatePrimary;
