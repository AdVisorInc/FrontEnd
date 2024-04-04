import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Tooltip,
} from '@mui/material';
import React from 'react';

const ComposedWithSelectMedium = () => {
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
            <>
              <InputAdornment position="end">
                <Tooltip
                  arrow
                  placement="top"
                  title="Edit"
                >
                  <IconButton
                    size="small"
                    color="primary"
                  >
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
                <Divider
                  sx={{ ml: 1 }}
                  orientation="vertical"
                  flexItem
                />
                <Select
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
                <Divider
                  sx={{ mr: 1.5 }}
                  orientation="vertical"
                  flexItem
                />
                <Button
                  sx={{ mr: 1.5 }}
                  variant="outlined"
                  size="small"
                  color="secondary"
                >
                  View
                </Button>
              </InputAdornment>
            </>
          }
        />
      </FormControl>
    </Stack>
  );
};

export default ComposedWithSelectMedium;
