import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { FormControl, InputAdornment, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const SelectQuantity = () => {
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
    <FormControl variant="outlined">
      <Typography
        variant="h6"
        gutterBottom
        component="label"
        htmlFor="quantity-input"
        fontWeight={500}
      >
        Quantity
      </Typography>
      <TextField
        variant="outlined"
        hiddenLabel
        id="quantity-input"
        name="quantity-input"
        sx={{
          '& .MuiInputBase-input': {
            textAlign: 'center',
            fontWeight: 600,
            fontSize: 16,
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              sx={{ ml: -0.5 }}
              position="start"
            >
              <ButtonIcon
                size="small"
                variant="outlined"
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
              sx={{ mr: -0.5 }}
              position="end"
            >
              <ButtonIcon
                size="small"
                variant="outlined"
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

export default SelectQuantity;
