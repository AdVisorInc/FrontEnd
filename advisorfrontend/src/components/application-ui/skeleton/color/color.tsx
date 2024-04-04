import { alpha, Card, CardContent, CardHeader, Skeleton } from '@mui/material';

const Component = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Skeleton
            animation="pulse"
            variant="circular"
            sx={{ bgcolor: (theme) => alpha(theme.palette.error.main, 0.3) }}
            width={40}
            height={40}
          />
        }
        action={null}
        title={
          <Skeleton
            sx={{ bgcolor: (theme) => alpha(theme.palette.warning.main, 0.2) }}
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={
          <Skeleton
            sx={{ bgcolor: (theme) => alpha(theme.palette.warning.main, 0.2) }}
            animation="wave"
            height={10}
            width="40%"
          />
        }
      />
      <Skeleton
        animation="pulse"
        sx={{ height: 190, bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2) }}
        variant="rectangular"
      />

      <CardContent>
        <Skeleton
          animation="pulse"
          height={15}
          sx={{ bgcolor: (theme) => alpha(theme.palette.success.main, 0.2) }}
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          height={15}
          sx={{ bgcolor: (theme) => alpha(theme.palette.success.main, 0.2) }}
          width="80%"
        />
      </CardContent>
    </Card>
  );
};

export default Component;
