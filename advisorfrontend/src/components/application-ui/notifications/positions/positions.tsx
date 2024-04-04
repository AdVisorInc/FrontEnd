import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Button,
  Card,
  CardContent,
  Unstable_Grid2 as Grid,
  IconButton,
  Typography,
} from '@mui/material';
import toast from 'react-hot-toast';
import { CardIndicatorColor } from 'src/components/base/styles/card-indicator-color';

const Component = () => {
  const showToastWithPosition = (position) => () => {
    toast.custom(
      (t) => (
        <CardIndicatorColor
          elevation={21}
          indicatorColor="primary"
          className={`${t.visible ? 'animate-enter' : 'animate-leave'}`}
        >
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              This notification has{' '}
              <Typography
                variant="subtitle2"
                component="span"
                color="text.primary"
                fontWeight={600}
              >
                {position.replace('-', ' ')}
              </Typography>{' '}
              position.
            </Typography>

            <IconButton
              sx={{ ml: 2 }}
              size="small"
              onClick={() => toast.dismiss(t.id)}
            >
              <CloseRoundedIcon fontSize="small" />
            </IconButton>
          </CardContent>
        </CardIndicatorColor>
      ),
      {
        position,
      }
    );
  };

  const positions = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      {positions.map((position) => (
        <Grid
          key={position}
          xs={12}
          sm={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardContent>
              <Button
                variant="outlined"
                color="secondary"
                onClick={showToastWithPosition(position)}
              >
                {position
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Component;
