import {
  Alert,
  Card,
  CardContent,
  FormControl,
  Unstable_Grid2 as Grid,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
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
          <Grid
            xs={12}
            md={4}
          >
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
              <DatePicker
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
          <Grid
            xs={12}
            md={4}
          >
            <FormControl
              fullWidth
              variant="outlined"
            >
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                htmlFor="disabled-date-input"
                fontWeight={500}
              >
                Disabled
              </Typography>
              <DatePicker
                slotProps={{
                  field: {
                    id: 'disabled-date-input',
                    clearable: true,
                  },
                }}
                sx={{
                  '& .MuiIconButton-edgeEnd': {
                    mr: -0.8,
                  },
                }}
                label=""
                disabled
              />
            </FormControl>
          </Grid>
          <Grid
            xs={12}
            md={4}
          >
            <FormControl
              fullWidth
              variant="outlined"
            >
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                htmlFor="readonly-date-input"
                fontWeight={500}
              >
                Read only
              </Typography>
              <DatePicker
                slotProps={{
                  field: {
                    id: 'readonly-date-input',
                    clearable: true,
                  },
                }}
                sx={{
                  '& .MuiIconButton-edgeEnd': {
                    mr: -0.8,
                  },
                }}
                label=""
                readOnly
                value={new Date()}
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
