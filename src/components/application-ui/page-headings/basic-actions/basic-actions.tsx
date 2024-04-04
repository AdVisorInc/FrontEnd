import { Box, Card, Divider, Stack, Typography } from '@mui/material';
import AvatarTextSwitch from 'src/components/application-ui/avatars/with-text/avatar-text-switch';
import PageHeading from 'src/components/base/page-heading';

const Component = () => {
  return (
    <Card>
      <PageHeading
        sx={{ px: 2, py: 1 }}
        title="Dashboards"
        description="Tailor your dashboard experience by focusing on the metrics that matter most"
        actions={
          <Stack
            pb={2}
            pt={2}
            direction={{ xs: 'column', md: 'row' }}
            spacing={1.5}
            whiteSpace="nowrap"
            alignItems="center"
            width={{ xs: '100%', md: 'auto' }}
          >
            <Box
              mt={{ xs: 2, sm: 0 }}
              width={{ xs: '100%', md: 'auto' }}
            >
              <AvatarTextSwitch />
            </Box>
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
