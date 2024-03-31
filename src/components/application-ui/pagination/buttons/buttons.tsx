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
            showFirstButton
            showLastButton
          />
          <Pagination
            count={3}
            hidePrevButton
            hideNextButton
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Component;
