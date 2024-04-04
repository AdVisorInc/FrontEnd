import ChartPieIcon from '@heroicons/react/24/outline/ChartPieIcon';
import { alpha, Box, Button, Card, Divider, Stack, Typography, useTheme } from '@mui/material';
import BreadcrumbChips from 'src/components/application-ui/breadcrumbs/chips/chips';
import PageHeading from 'src/components/base/page-heading';

const Component = () => {
  const theme = useTheme();

  const backgroundColor =
    theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[500], 0.04) : 'neutral.25';

  return (
    <Card>
      <Box
        p={2}
        display="flex"
        alignItems="flex-start"
      >
        <BreadcrumbChips />
      </Box>
      <Divider />
      <PageHeading
        iconBox={
          <Card
            elevation={0}
            variant="outlined"
            sx={{
              height: theme.spacing(8),
              width: theme.spacing(8),
              minWidth: theme.spacing(8),
              p: 2,
              color: 'primary.main',
            }}
          >
            <ChartPieIcon />
          </Card>
        }
        title="Dashboards"
        background={backgroundColor}
        description="Tailor your dashboard experience by focusing on the metrics that matter most"
        actions={
          <Stack
            ml={2}
            mt={{ xs: 2, md: 0 }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            whiteSpace="nowrap"
            alignItems="center"
            width={{ xs: '100%', sm: 'auto' }}
          >
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              sx={{
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              Filters
            </Button>
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
        sx={{ p: 2 }}
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
