import {
  Alert,
  Card,
  CardContent,
  FormControl,
  Unstable_Grid2 as Grid,
  Typography,
} from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';
import React from 'react';

const Component = () => {
  const [cleared, setCleared] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <Card>
      <CardContent>
        <Grid
          container
          spacing={2}
        >
          <Grid xs={12}>
            <FormControl
              fullWidth
              variant="outlined"
            >
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                htmlFor="select-date-input"
                fontWeight={500}
              >
                Select date
              </Typography>
              <MobileDatePicker
                slotProps={{
                  field: {
                    id: 'select-date-input',
                    clearable: true,
                    onClear: () => setCleared(true),
                  },
                }}
                sx={{
                  '& .MuiIconButton-edgeEnd': {
                    mr: -0.8,
                  },
                }}
                label=""
              />
            </FormControl>
          </Grid>
          {cleared && (
            <Grid xs={12}>
              <Alert severity="success">Field cleared!</Alert>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Component;
