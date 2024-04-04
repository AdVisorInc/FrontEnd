import { Card, CardContent, Checkbox, Divider, Stack, Theme, useMediaQuery } from '@mui/material';

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Card>
      <CardContent>
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
          <Checkbox
            defaultChecked
            color="primary"
          />
          <Checkbox
            defaultChecked
            color="secondary"
          />
          <Checkbox
            defaultChecked
            color="success"
          />
          <Checkbox
            defaultChecked
            color="error"
          />
          <Checkbox
            defaultChecked
            color="warning"
          />
          <Checkbox
            defaultChecked
            color="info"
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Component;
