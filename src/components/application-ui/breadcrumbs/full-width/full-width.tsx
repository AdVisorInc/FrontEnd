import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Card, CardContent, Link, Typography } from '@mui/material';
import toast from 'react-hot-toast';

const Component = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    toast.success('You clicked on a breadcrumb item!', {
      position: 'top-right',
    });
  };

  return (
    <Card
      elevation={0}
      variant="outlined"
    >
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default Component;
