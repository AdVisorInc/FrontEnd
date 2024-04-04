import SortRoundedIcon from '@mui/icons-material/SortRounded';
import {
  Button,
  Divider,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Unstable_Grid2 as Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import React from 'react';

const Component = () => {
  const [actions, setAction] = React.useState('');

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  return (
    <FormGroup>
      <FormLabel htmlFor="name-input">
        <Typography
          variant="h5"
          color="text.primary"
        >
          User details
        </Typography>
        <Typography variant="subtitle2">Add the information you see fit</Typography>
        <Divider sx={{ my: 2 }} />
      </FormLabel>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid
          xs={12}
          md={6}
        >
          <FormControl
            fullWidth
            variant="outlined"
          >
            <InputLabel
              shrink
              variant="filled"
              htmlFor="name-input"
            >
              Name
            </InputLabel>
            <OutlinedInput
              id="name-input"
              placeholder="Write your name"
            />
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <FormControl
            fullWidth
            variant="outlined"
            disabled
          >
            <InputLabel
              shrink
              variant="filled"
              htmlFor="company-disabled-input"
            >
              Company
              <Typography
                component="span"
                fontWeight={400}
                variant="subtitle2"
                color="text.secondary"
                sx={{ pl: 0.5 }}
              >
                (Disabled)
              </Typography>
            </InputLabel>
            <OutlinedInput id="company-disabled-input" />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl
            margin="none"
            size="small"
            variant="outlined"
            fullWidth
          >
            <InputLabel
              shrink
              variant="filled"
              htmlFor="email-input"
            >
              Email
            </InputLabel>
            <OutlinedInput
              type="email"
              id="email-input"
              placeholder="Write your email"
            />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl
            margin="none"
            size="small"
            variant="outlined"
            fullWidth
            error
            required
          >
            <InputLabel
              shrink
              variant="filled"
              htmlFor="validation-input"
            >
              Validation
            </InputLabel>
            <OutlinedInput
              id="validation-input"
              type="email"
              placeholder="Write your email"
            />
            <FormHelperText>You need to add a valid email address</FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <Divider />
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <FormControl
            margin="none"
            variant="outlined"
            fullWidth
            required
          >
            <InputLabel
              shrink
              variant="filled"
              htmlFor="price-input"
            >
              Price
            </InputLabel>
            <OutlinedInput
              id="price-input"
              type="text"
              placeholder="0.00"
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
                    <MenuItem value="">USD</MenuItem>
                    <MenuItem value={10}>EUR</MenuItem>
                    <MenuItem value={20}>GBP</MenuItem>
                  </Select>
                </InputAdornment>
              }
            />
            <FormHelperText>Composed input with end adornment</FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <FormControl
            margin="none"
            variant="outlined"
            fullWidth
          >
            <InputLabel
              shrink
              variant="filled"
              htmlFor="members-input"
            >
              Members
            </InputLabel>
            <OutlinedInput
              id="members-input"
              type="text"
              sx={{
                pr: 0.5,
              }}
              endAdornment={
                <InputAdornment position="end">
                  <Divider
                    sx={{ ml: 1 }}
                    orientation="vertical"
                    flexItem
                  />
                  <Button startIcon={<SortRoundedIcon />}>Sort</Button>
                </InputAdornment>
              }
            />
            <FormHelperText>Composed input with button end adornment</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Component;
