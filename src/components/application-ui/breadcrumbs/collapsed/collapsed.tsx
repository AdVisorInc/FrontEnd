import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import toast from 'react-hot-toast';

const Component = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    toast.success('You clicked on a breadcrumb item!', {
      position: 'top-right',
    });
  };

  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Breadcrumbs
        maxItems={2}
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
        <Link
          underline="hover"
          color="inherit"
          href="/users"
          onClick={handleClick}
        >
          Users
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/users/profile"
          onClick={handleClick}
        >
          Profile
        </Link>
        <Typography color="text.primary">Alex's Details</Typography>
      </Breadcrumbs>
    </Stack>
  );
};

export default Component;
