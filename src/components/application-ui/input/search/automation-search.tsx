import MicTwoToneIcon from '@mui/icons-material/MicTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { IconButton, InputAdornment, styled, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SearchInputWrapper = styled(TextField)(({ theme }) => ({
  '.MuiInputBase-root': {
    background:
      theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.common.white,

    '&.MuiOutlinedInput-root': {
      paddingRight: 8,
    },
  },
}));

function AutomationSearch() {
  const { t } = useTranslation();

  return (
    <SearchInputWrapper
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchTwoToneIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton color="primary">
              <MicTwoToneIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      placeholder={t('Search...')}
      fullWidth
    />
  );
}

export default AutomationSearch;
