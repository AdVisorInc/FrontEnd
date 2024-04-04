import ChartPieIcon from '@heroicons/react/24/outline/ChartPieIcon';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  alpha,
  Box,
  Breadcrumbs,
  Button,
  Card,
  Divider,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import toast from 'react-hot-toast';
import PageHeading from 'src/components/base/page-heading';

const Component = () => {
  const theme = useTheme();
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    toast.success('You clicked on a breadcrumb item!', {
      position: 'top-right',
    });
  };

  const backgroundColor =
    theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[500], 0.04) : 'neutral.25';

  return (
    <Card>
      <PageHeading
        sx={{
          '& .PageTitleContent': {
            p: 2,
          },
        }}
        iconBox={
          <Card
            elevation={10}
            sx={{
              height: theme.spacing(8),
              width: theme.spacing(8),
              minWidth: theme.spacing(8),
              p: 2,
            }}
          >
            <ChartPieIcon />
          </Card>
        }
        topSection={
          <Box
            display="flex"
            alignItems="flex-start"
          >
            <Breadcrumbs
              separator={
                <NavigateNextIcon
                  sx={{
                    color: 'neutral.500',
                  }}
                  fontSize="small"
                />
              }
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                href="/home"
                onClick={handleClick}
                fontWeight={500}
              >
                Home
              </Link>
              <Link
                underline="hover"
                href="/dashboard"
                onClick={handleClick}
                fontWeight={500}
              >
                Dashboard
              </Link>
              <Typography
                fontWeight={500}
                color="neutral.700"
              >
                Users
              </Typography>
            </Breadcrumbs>
          </Box>
        }
        title="Dashboards"
        background={backgroundColor}
        actions={
          <Stack
            px={2}
            pb={2}
            pt={{ xs: 0, md: 2 }}
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
