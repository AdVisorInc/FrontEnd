import { Card, CardContent, Divider, Stack, Switch, Theme, useMediaQuery } from '@mui/material';

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Card>
      <CardContent>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          divider={
            <Divider
              flexItem
              orientation={smUp ? 'vertical' : 'horizontal'}
            />
          }
          spacing={2}
        >
          <Switch
            defaultChecked
            color="primary"
          />
          <Switch
            defaultChecked
            color="secondary"
          />
          <Switch
            defaultChecked
            color="success"
          />
          <Switch
            defaultChecked
            color="error"
          />
          <Switch
            defaultChecked
            color="warning"
          />
          <Switch
            defaultChecked
            color="info"
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Component;
