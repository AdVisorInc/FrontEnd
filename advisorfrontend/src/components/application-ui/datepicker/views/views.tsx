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
                htmlFor="ymd-date-input"
                fontWeight={500}
              >
                Year, month, day:
              </Typography>
              <DatePicker
                slotProps={{
                  field: {
                    id: 'ymd-date-input',
                    clearable: true,
                  },
                }}
                sx={{
                  '& .MuiIconButton-edgeEnd': {
                    mr: -0.8,
                  },
                }}
                label=""
                views={['year', 'month', 'day']}
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
                htmlFor="d-date-input"
                fontWeight={500}
              >
                Day:
              </Typography>
              <DatePicker
                slotProps={{
                  field: {
                    id: 'd-date-input',
                    clearable: true,
                  },
                }}
                sx={{
                  '& .MuiIconButton-edgeEnd': {
                    mr: -0.8,
                  },
                }}
                label=""
                views={['day']}
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
                htmlFor="my-date-input"
                fontWeight={500}
              >
                Month, day:
              </Typography>
              <DatePicker
                slotProps={{
                  field: {
                    id: 'my-date-input',
                    clearable: true,
                  },
                }}
                sx={{
                  '& .MuiIconButton-edgeEnd': {
                    mr: -0.8,
                  },
                }}
                label=""
                views={['month', 'year']}
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Component;
