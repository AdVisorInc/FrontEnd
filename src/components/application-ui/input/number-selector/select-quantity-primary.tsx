import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { FormControl, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const SelectQuantityPrimary = () => {
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
      variant="filled"
    >
      <TextField
        variant="filled"
        hiddenLabel
        size="small"
        id="quantity-input-primary"
        name="quantity-input-primary"
        sx={{
          '& .MuiInputBase-input': {
            textAlign: 'center',
            fontWeight: 600,
            fontSize: 21,
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              sx={{
                ml: -0.5,
                zIndex: 5,
                '& .Mui-disabled': {
                  background: 'none',
                },
              }}
              position="start"
            >
              <ButtonIcon
                variant="outlined"
                size="small"
                onClick={handleDecrement}
                disabled={value === 1}
              >
                <RemoveRoundedIcon />
              </ButtonIcon>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              sx={{
                mr: -0.5,
                zIndex: 5,
              }}
              position="end"
            >
              <ButtonIcon
                variant="contained"
                size="small"
                onClick={handleIncrement}
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

export default SelectQuantityPrimary;
