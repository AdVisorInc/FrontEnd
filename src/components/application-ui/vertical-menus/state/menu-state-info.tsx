import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import { ListItemText, MenuList } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MenuItemInfo } from 'src/components/base/styles/menu-item';

const VerticalMenuStateInfo = () => {
  const { t } = useTranslation();

  return (
    <MenuList disablePadding>
      <MenuItemInfo selected>
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
      </MenuItemInfo>
      <MenuItemInfo>
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
      </MenuItemInfo>
      <MenuItemInfo disabled>
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
      </MenuItemInfo>
      <MenuItemInfo>
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
      </MenuItemInfo>
    </MenuList>
  );
};

export default VerticalMenuStateInfo;
