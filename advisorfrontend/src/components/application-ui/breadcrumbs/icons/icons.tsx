import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
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
        aria-label="breadcrumb"
        maxItems={2}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/home"
          onClick={handleClick}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <HomeIcon
            sx={{ mr: 0.5 }}
            fontSize="inherit"
          />
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/dashboard"
          onClick={handleClick}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <DashboardIcon
            sx={{ mr: 0.5 }}
            fontSize="inherit"
          />
          Dashboard
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/users"
          onClick={handleClick}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <GroupIcon
            sx={{ mr: 0.5 }}
            fontSize="inherit"
          />
          Users
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/users/profile"
          onClick={handleClick}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <AccountBoxIcon
            sx={{ mr: 0.5 }}
            fontSize="inherit"
          />
          Profile
        </Link>
        <Typography
          color="text.primary"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          Alex's Details
        </Typography>
      </Breadcrumbs>
    </Stack>
  );
};

export default Component;
