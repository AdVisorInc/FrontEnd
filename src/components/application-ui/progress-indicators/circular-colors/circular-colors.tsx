import { Box, Card, CircularProgress, Divider, Stack, Theme, useMediaQuery } from '@mui/material';

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

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
          <CircularProgress color="primary" />
          <CircularProgress color="secondary" />
          <CircularProgress color="error" />
          <CircularProgress color="warning" />
          <CircularProgress color="success" />
          <CircularProgress color="info" />
        </Stack>
      </Box>
    </Card>
  );
};

export default Component;
