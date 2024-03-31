import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'es' | 'de' | 'fr' | 'ae' | 'cn';

type LanguageOptions = {
  [key in Language]: {
    icon: string;
    label: string;
  };
};

const languages: Record<Language, string> = {
  en: 'US',
  es: 'ES',
  de: 'DE',
  fr: 'FR',
  ae: 'AE',
  cn: 'CN',
};

const languageOptions: LanguageOptions = {
  en: {
    icon: 'US',
    label: 'English',
  },
  es: {
    icon: 'ES',
    label: 'Spanish',
  },
  de: {
    icon: 'DE',
    label: 'German',
  },
  fr: {
    icon: 'FR',
    label: 'French',
  },
  ae: {
    icon: 'AE',
    label: 'Arabic',
  },
  cn: {
    icon: 'CN',
    label: 'Chinese',
  },
};

interface LanguageDropdownProps {
  color?: 'inherit' | 'primary' | 'secondary' | 'warning' | 'info' | 'success' | 'error';
  sx?: object;
}

const LanguageDropdown: FC<LanguageDropdownProps> = ({ color = 'inherit', sx = {} }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const flag = languages[i18n.language as Language];

  const handleChange = useCallback(
    async (language: Language): Promise<void> => {
      await i18n.changeLanguage(language);
      const message = t('Language changed to English');
      toast.success(message, {
        position: 'bottom-center',
      });
      handleClose();
    },
    [i18n, t]
  );

  return (
    <>
      <Tooltip
        arrow
        title={t('Switch Language')}
      >
        <IconButton
          id="language-button"
          color={color}
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            ...sx,
          }}
        >
          <ReactCountryFlag
            countryCode={flag}
            svg
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        {(Object.keys(languageOptions) as Language[]).map((language) => {
          const option = languageOptions[language];
          return (
            <MenuItem
              onClick={() => handleChange(language)}
              key={language}
              selected={i18n.language === language}
            >
              <ListItemIcon>
                <ReactCountryFlag
                  style={{
                    width: '2em',
                    height: '2em',
                  }}
                  countryCode={option.icon}
                  svg
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  pl: 1,
                }}
                primary={option.label}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default LanguageDropdown;
