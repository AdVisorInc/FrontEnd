import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SearchContained = () => {
  const { t } = useTranslation();

  return (
    <FormControl
      variant="outlined"
      fullWidth
    >
      <OutlinedInput
        type="text"
        placeholder={t('Search terms here...')}
        sx={{
          '& .MuiInputAdornment-positionEnd': {
            mr: -0.3,
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <Button
              variant="contained"
              size="small"
            >
              {t('Search')}
            </Button>
          </InputAdornment>
        }
        startAdornment={
          <InputAdornment position="start">
            <SearchRoundedIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchContained;
