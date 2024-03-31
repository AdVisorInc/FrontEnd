import { Box, Button, Card, Divider, Stack, Typography } from '@mui/material';
import PageHeading from 'src/components/base/page-heading';

const Component = () => {
  return (
    <Card>
      <PageHeading
        sx={{ pl: 2, py: 1, pr: 1 }}
        title="Dashboards"
        description="Tailor your dashboard experience by focusing on the metrics that matter most"
        actions={
          <Stack
            px={2}
            pb={2}
            pt={2}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            whiteSpace="nowrap"
            alignItems="center"
            width={{ xs: '100%', sm: 'auto' }}
          >
            <Button
              sx={{
                width: { xs: '100%', sm: 'auto' },
              }}
              variant="contained"
            >
              Add new product
            </Button>
          </Stack>
        }
      />
      <Divider />
      <Box
        px={2}
        py={{ xs: 2, sm: 3, md: 5 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography
            variant="h3"
            color="text.secondary"
            align="center"
            fontWeight={500}
          >
            Page content
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default Component;
