import { Card, CardContent, Divider, Radio, Stack, Theme, useMediaQuery } from '@mui/material';

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Card>
      <CardContent>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          divider={
            <Divider
              flexItem
              orientation={smUp ? 'vertical' : 'horizontal'}
            />
          }
          spacing={2}
        >
          <Radio
            defaultChecked
            color="primary"
          />
          <Radio
            defaultChecked
            color="secondary"
          />
          <Radio
            defaultChecked
            color="success"
          />
          <Radio
            defaultChecked
            color="error"
          />
          <Radio
            defaultChecked
            color="warning"
          />
          <Radio
            defaultChecked
            color="info"
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Component;
