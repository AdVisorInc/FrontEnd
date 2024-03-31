import { Box, Divider, FormGroup, FormLabel, Stack, Typography } from '@mui/material';
import CompanyBasic from './company-basic';

const Component = () => {
  return (
    <Stack spacing={{ xs: 2, sm: 3 }}>
      <Box>
        <FormGroup>
          <FormLabel>
            <Typography
              variant="h4"
              color="text.primary"
              fontWeight={600}
            >
              Company
            </Typography>
            <Typography variant="subtitle1">Update company profile and details</Typography>
            <Divider sx={{ my: 2 }} />
          </FormLabel>
          <CompanyBasic />
        </FormGroup>
      </Box>
    </Stack>
  );
};

export default Component;
