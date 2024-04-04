import {
  alpha,
  Box,
  Card,
  CircularProgress,
  CircularProgressProps,
  Divider,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        size={54}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          fontWeight={500}
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Card>
      <Box p={{ xs: 2, sm: 3 }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: 'column', sm: 'row' }}
          divider={
            <Divider
              flexItem
              orientation={smUp ? 'vertical' : 'horizontal'}
            />
          }
          spacing={2}
        >
          <CircularProgress
            size={54}
            variant="determinate"
            value={25}
          />
          <CircularProgress
            size={54}
            variant="determinate"
            value={50}
          />
          <CircularProgress
            size={54}
            variant="determinate"
            value={75}
          />
          <CircularProgress
            size={54}
            variant="determinate"
            value={100}
          />
          <CircularProgress
            size={54}
            variant="determinate"
            value={progress}
          />
          <CircularProgressWithLabel value={progress} />
        </Stack>
        <Divider sx={{ my: { xs: 2, sm: 3 } }} />
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: 'column', sm: 'row' }}
          divider={
            <Divider
              flexItem
              orientation={smUp ? 'vertical' : 'horizontal'}
            />
          }
          spacing={2}
        >
          <Box
            display="inline-flex"
            position="relative"
          >
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: (theme) => theme.palette.error.main,
                }}
              >
                {progress}%
              </Typography>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: (theme) => alpha(theme.palette.neutral[300], 0.3),
              }}
              size={56}
              thickness={3}
              value={100}
            />
            <CircularProgress
              size={58}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: -1,
                color: (theme) => theme.palette.error.main,
                top: -1,
              }}
              thickness={6}
              variant="determinate"
              value={progress}
            />
          </Box>
          <Box
            display="inline-flex"
            position="relative"
          >
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: (theme) => theme.palette.success.main,
                }}
              >
                {progress}%
              </Typography>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: (theme) => alpha(theme.palette.neutral[400], 0.3),
              }}
              size={66}
              thickness={3}
              value={100}
            />
            <CircularProgress
              size={66}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: -1,
                color: (theme) => theme.palette.success.main,
                top: -1,
              }}
              thickness={6}
              variant="determinate"
              value={progress}
            />
          </Box>
        </Stack>
      </Box>
    </Card>
  );
};

export default Component;
