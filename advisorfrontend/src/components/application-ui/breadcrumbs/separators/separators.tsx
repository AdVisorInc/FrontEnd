import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Divider, Link, Stack, Typography } from '@mui/material';
import toast from 'react-hot-toast';

const Component = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    toast.success('You clicked on a breadcrumb item!', {
      position: 'top-right',
    });
  };

  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Breadcrumbs
          separator="-"
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            href="/home"
            onClick={handleClick}
          >
            Home
          </Link>
          <Link
            underline="hover"
            href="/dashboard"
            onClick={handleClick}
          >
            Dashboard
          </Link>
          <Typography
            color="text.secondary"
            fontWeight={600}
          >
            Users
          </Typography>
        </Breadcrumbs>
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            color="inherit"
            href="/home"
            onClick={handleClick}
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/dashboard"
            onClick={handleClick}
          >
            Dashboard
          </Link>
          <Typography
            color="text.primary"
            fontWeight={600}
          >
            Users
          </Typography>
        </Breadcrumbs>
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        py={4}
        justifyContent="center"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            color="inherit"
            href="/home"
            onClick={handleClick}
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/dashboard"
            onClick={handleClick}
          >
            Dashboard
          </Link>
          <Typography
            color="text.primary"
            fontWeight={600}
          >
            Users
          </Typography>
        </Breadcrumbs>
      </Stack>
    </>
  );
};

export default Component;
