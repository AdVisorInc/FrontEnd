import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { alpha, Breadcrumbs, Chip, Stack, Theme, useMediaQuery } from '@mui/material';
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
      flexWrap="wrap"
      gap={1}
      sx={{
        '& .MuiChip-root': {
          py: 2,
          px: 0.5,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: (theme) => alpha(theme.palette.neutral[500], 0.2),
            '& .MuiChip-label': {
              opacity: 1,
            },
          },
        },
        '& .MuiChip-label': {
          fontSize: 15,
          opacity: 0.6,
        },
        '& .MuiBreadcrumbs-separator': {
          mx: 0,
        },
        '& .MuiBreadcrumbs-li:last-of-type': {
          '& .MuiChip-root': {
            px: 0,
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
          '& .MuiChip-label': {
            fontWeight: 600,
            opacity: 1,
            cursor: 'default',
          },
        },
      }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        maxItems={smUp ? 12 : 3}
        separator={<KeyboardArrowRightRoundedIcon fontSize="small" />}
      >
        <Chip
          component="a"
          href="/dashboard"
          color="secondary"
          onClick={handleClick}
          size="small"
          label="Dashboard"
        />
        <Chip
          component="a"
          href="/users"
          color="secondary"
          onClick={handleClick}
          size="small"
          label="Users"
        />
        <Chip
          component="a"
          href="/users/profile"
          color="secondary"
          onClick={handleClick}
          size="small"
          label="Profile"
        />
        <Chip
          color="secondary"
          size="small"
          label="Alex's Details"
        />
      </Breadcrumbs>
    </Stack>
  );
};

export default Component;
