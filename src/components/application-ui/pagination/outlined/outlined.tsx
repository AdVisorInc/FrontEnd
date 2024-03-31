import { Card, CardContent, Divider, Pagination, Stack } from '@mui/material';

const Component = () => {
  return (
    <Card>
      <CardContent>
        <Stack
          spacing={2}
          justifyContent="center"
          alignItems="center"
          divider={
            <Divider
              flexItem
              variant="middle"
            />
          }
        >
          <Pagination
            count={3}
            color="primary"
            variant="outlined"
          />
          <Pagination
            count={3}
            color="secondary"
            variant="outlined"
          />
          <Pagination
            count={3}
            variant="outlined"
            disabled
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Component;
