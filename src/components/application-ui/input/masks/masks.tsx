import {
  FormControl,
  FormGroup,
  FormHelperText,
  Unstable_Grid2 as Grid,
  OutlinedInput,
  OutlinedInputProps,
  Typography,
} from '@mui/material';
import InputMask, { InputState } from 'react-input-mask';

const Component = () => {
  return (
    <FormGroup>
      <Grid
        container
        spacing={2}
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
              htmlFor="ssn-input"
              fontWeight={500}
            >
              Social Security Number
            </Typography>
            <InputMask
              mask="999-99-9999"
              maskChar=" "
            >
              {
                //@ts-ignore
                (inputProps: OutlinedInputProps & InputState) => (
                  <OutlinedInput
                    {...inputProps}
                    id="ssn-input"
                    placeholder="123-45-6789"
                  />
                )
              }
            </InputMask>
            <FormHelperText>Enter your SSN</FormHelperText>
          </FormControl>
        </Grid>
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
              htmlFor="phone-input"
              fontWeight={500}
            >
              Phone Number
            </Typography>
            <InputMask
              mask="(999) 999-9999"
              maskChar=" "
            >
              {
                //@ts-ignore
                (inputProps: OutlinedInputProps & InputState) => (
                  <OutlinedInput
                    {...inputProps}
                    id="phone-input"
                    placeholder="(123) 456-7890"
                  />
                )
              }
            </InputMask>
            <FormHelperText>Enter your phone number</FormHelperText>
          </FormControl>
        </Grid>
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
              htmlFor="date-input"
              fontWeight={500}
            >
              Date
            </Typography>
            <InputMask
              mask="99/99/9999"
              maskChar=" "
            >
              {
                //@ts-ignore
                (inputProps: OutlinedInputProps & InputState) => (
                  <OutlinedInput
                    {...inputProps}
                    id="date-input"
                    placeholder="MM/DD/YYYY"
                  />
                )
              }
            </InputMask>
            <FormHelperText>Enter a date</FormHelperText>
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl
            fullWidth
            variant="outlined"
          >
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="credit-card-input"
              fontWeight={500}
            >
              Credit Card
            </Typography>
            <InputMask
              mask="9999 9999 9999 9999"
              maskChar=" "
            >
              {
                //@ts-ignore
                (inputProps: OutlinedInputProps & InputState) => (
                  <OutlinedInput
                    {...inputProps}
                    id="credit-card-input"
                    placeholder="1234 5678 9012 3456"
                  />
                )
              }
            </InputMask>
            <FormHelperText>Enter your credit card number</FormHelperText>
          </FormControl>
        </Grid>
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
              htmlFor="zipcode-input"
              fontWeight={500}
            >
              Zip Code
            </Typography>
            <InputMask
              mask="99999"
              maskChar=" "
            >
              {
                //@ts-ignore
                (inputProps: OutlinedInputProps & InputState) => (
                  <OutlinedInput
                    {...inputProps}
                    id="zipcode-input"
                    placeholder="12345"
                  />
                )
              }
            </InputMask>
            <FormHelperText>Enter your Zip Code</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Component;
