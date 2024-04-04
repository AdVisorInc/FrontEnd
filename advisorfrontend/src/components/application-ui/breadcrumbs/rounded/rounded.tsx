import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { Breadcrumbs, Chip, Stack, Theme, useMediaQuery } from '@mui/material';
import toast from 'react-hot-toast';

const Component = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    toast.success('You clicked on a breadcrumb item!', {
      position: 'top-right',
    });
  };
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        maxItems={smUp ? 12 : 3}
      >
        <Chip
          component="a"
          href="/home"
          color="secondary"
          //@ts-ignore
          onClick={handleClick}
          size="small"
          label="Home"
        />
        <Chip
          component="a"
          href="/dashboard"
          color="secondary"
          //@ts-ignore
          onClick={handleClick}
          size="small"
          label="Dashboard"
        />
        <Chip
          component="a"
          href="/users"
          color="secondary"
          //@ts-ignore
          onClick={handleClick}
          size="small"
          label="Users"
        />
        <Chip
          component="a"
          href="/users/profile"
          color="secondary"
          //@ts-ignore
          onClick={handleClick}
          size="small"
          label="Profile"
        />
        <Chip
          component="a"
          href="/users/profile/alex"
          color="primary"
          //@ts-ignore
          onClick={handleClick}
          onDelete={handleClick}
          size="small"
          label="Alex's Details"
          deleteIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
        />
      </Breadcrumbs>
    </Stack>
  );
};

export default Component;
