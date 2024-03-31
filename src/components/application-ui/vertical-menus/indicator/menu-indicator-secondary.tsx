import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import { ListItemText, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MenuListWrapperIndicatorSecondary } from 'src/components/base/styles/vertical-menus';

const VerticalMenuIndicatorSecondary = () => {
  const { t } = useTranslation();

  return (
    <MenuListWrapperIndicatorSecondary disablePadding>
      <MenuItem selected>
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
      </MenuItem>
      <MenuItem>
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
      </MenuItem>
      <MenuItem disabled>
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
      </MenuItem>
      <MenuItem>
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
      </MenuItem>
    </MenuListWrapperIndicatorSecondary>
  );
};

export default VerticalMenuIndicatorSecondary;
