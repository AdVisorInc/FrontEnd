import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SearchBasic = () => {
  const { t } = useTranslation();

  return (
    <FormControl
      variant="outlined"
      fullWidth
    >
      <OutlinedInput
        sx={{
          '.MuiOutlinedInput-notchedOutline': {
            border: 0,
            borderRadius: 0,
          },
        }}
        type="text"
        placeholder={t('Search messages...')}
        startAdornment={
          <InputAdornment position="start">
            <SearchTwoToneIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchBasic;
