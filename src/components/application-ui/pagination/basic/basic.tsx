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
          <Pagination count={3} />
          <Pagination
            count={3}
            color="primary"
          />
          <Pagination
            count={3}
            color="secondary"
          />
          <Pagination
            count={3}
            disabled
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Component;
