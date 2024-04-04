import { KeyboardArrowDownRounded } from '@mui/icons-material';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
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
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="name-input"
              fontWeight={500}
            >
              Name
            </Typography>

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
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="company-disabled-input"
              fontWeight={500}
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
            </Typography>

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
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="email-input"
              fontWeight={500}
            >
              Email
            </Typography>
            <OutlinedInput
              type="email"
              id="email-input"
              placeholder="Write your email"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlineRoundedIcon fontSize="small" />
                </InputAdornment>
              }
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
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="validation-input"
              fontWeight={500}
            >
              Validation
              <Typography
                component="span"
                color="error.main"
              >
                {' '}
                *
              </Typography>
            </Typography>
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
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="price-input"
              fontWeight={500}
            >
              Price
              <Typography
                component="span"
                color="text.secondary"
              >
                {' '}
                *
              </Typography>
            </Typography>
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
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
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
            <FormHelperText>Composed input with text/select adornments</FormHelperText>
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
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="members-input"
              fontWeight={500}
            >
              Members
            </Typography>
            <OutlinedInput
              id="members-input"
              type="text"
              placeholder="Members"
              sx={{
                pr: 0.6,
              }}
              startAdornment={
                <InputAdornment position="start">
                  <PeopleOutlineRoundedIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <Divider
                    sx={{ ml: 1 }}
                    orientation="vertical"
                    flexItem
                  />
                  <Button
                    startIcon={<SortRoundedIcon />}
                    endIcon={<KeyboardArrowDownRounded fontSize="small" />}
                  >
                    Sort
                  </Button>
                </InputAdornment>
              }
            />
            <FormHelperText>Composed input with button/icon adornments</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Component;
