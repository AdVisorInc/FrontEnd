import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

const SearchWithButton = () => {
  return (
    <FormControl
      variant="outlined"
      fullWidth
    >
      <OutlinedInput
        type="text"
        placeholder="Search terms here..."
        endAdornment={
          <InputAdornment
            sx={{ mr: -0.4 }}
            position="end"
          >
            <Button
              variant="outlined"
              size="small"
              color="secondary"
            >
              Search
            </Button>
          </InputAdornment>
        }
        startAdornment={
          <InputAdornment position="start">
            <SearchTwoToneIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchWithButton;
