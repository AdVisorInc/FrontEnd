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
            shape="rounded"
          />
          <Pagination
            count={3}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Component;
