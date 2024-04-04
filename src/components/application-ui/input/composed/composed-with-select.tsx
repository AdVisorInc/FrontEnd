import {
  Button,
  Divider,
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from '@mui/material';
import React from 'react';

const ComposedWithSelect = () => {
  const [actions, setAction] = React.useState('');

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  return (
    <Stack
      spacing={1}
      direction="row"
    >
      <FormControl
        variant="outlined"
        fullWidth
        size="small"
      >
        <OutlinedInput
          type="email"
          placeholder="Enter name or email"
          sx={{
            pr: 0,
            '.MuiInputAdornment-outlined': {
              height: '100%',

              '.MuiOutlinedInput-notchedOutline': {
                borderWidth: 0,
              },
            },
          }}
          endAdornment={
            <InputAdornment position="end">
              <Divider
                orientation="vertical"
                flexItem
              />
              <Select
                size="small"
                labelId="actions-select-label"
                id="actions-select"
                value={actions}
                displayEmpty
                onChange={handleChange}
              >
                <MenuItem value="">Can edit</MenuItem>
                <MenuItem value={10}>Can view</MenuItem>
                <MenuItem value={20}>Can delete</MenuItem>
              </Select>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        size="small"
        variant="contained"
      >
        Invite
      </Button>
    </Stack>
  );
};

export default ComposedWithSelect;
