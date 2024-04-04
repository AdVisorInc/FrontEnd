import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const SelectQuantityAlternate = () => {
  const [value, setValue] = useState<number>(1);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  return (
    <FormControl
      sx={{
        width: 148,
      }}
      variant="outlined"
    >
      <TextField
        variant="outlined"
        hiddenLabel
        id="quantity-input-alt"
        name="quantity-input-alt"
        sx={{
          '& .MuiInputBase-input': {
            textAlign: 'center',
            fontWeight: 600,
            fontSize: 21,
            py: 0.7,
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              sx={{
                ml: -1.4,
                zIndex: 5,
                '& .Mui-disabled': {
                  background: 'none !important',
                },
              }}
              position="start"
            >
              <ButtonIcon
                variant="contained"
                onClick={handleDecrement}
                disabled={value === 1}
                color="secondary"
              >
                <RemoveRoundedIcon />
              </ButtonIcon>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              sx={{
                mr: -1.4,
                zIndex: 5,
              }}
              position="end"
            >
              <ButtonIcon
                variant="contained"
                onClick={handleIncrement}
                color="secondary"
              >
                <AddRoundedIcon />
              </ButtonIcon>
            </InputAdornment>
          ),
        }}
        value={value}
      />
    </FormControl>
  );
};

export default SelectQuantityAlternate;
