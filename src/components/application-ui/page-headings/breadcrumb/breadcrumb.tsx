import { alpha, Box, Card, Divider, Typography } from '@mui/material';
import BreadcrumbNavigation from 'src/components/application-ui/breadcrumbs/navigation/navigation';
import SearchWithButton from 'src/components/application-ui/input/search/search-with-button';

const Component = () => {
  return (
    <Card>
      <Box
        p={2}
        display="flex"
        alignItems="center"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Box width={{ xs: '100%', md: 'auto' }}>
          <BreadcrumbNavigation />
        </Box>
        <Box
          mt={{ xs: 2, md: 0 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          <SearchWithButton />
        </Box>
      </Box>
      <Divider />

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
