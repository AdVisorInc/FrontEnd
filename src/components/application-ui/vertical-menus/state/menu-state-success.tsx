import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import { ListItemText, MenuList } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MenuItemSuccess } from 'src/components/base/styles/menu-item';

const VerticalMenuStateSuccess = () => {
  const { t } = useTranslation();

  return (
    <MenuList disablePadding>
      <MenuItemSuccess selected>
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
      </MenuItemSuccess>
      <MenuItemSuccess>
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
      </MenuItemSuccess>
      <MenuItemSuccess disabled>
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
      </MenuItemSuccess>
      <MenuItemSuccess>
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
      </MenuItemSuccess>
    </MenuList>
  );
};

export default VerticalMenuStateSuccess;
