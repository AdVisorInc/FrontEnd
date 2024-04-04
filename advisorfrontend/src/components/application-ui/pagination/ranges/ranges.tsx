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
            count={11}
            defaultPage={4}
            siblingCount={0}
          />
          <Pagination
            count={11}
            defaultPage={4}
          />
          <Pagination
            count={11}
            defaultPage={4}
            siblingCount={0}
            boundaryCount={1}
          />
          <Pagination
            count={11}
            defaultPage={4}
            boundaryCount={1}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Component;
