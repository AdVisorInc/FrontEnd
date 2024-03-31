import { Card, CardContent, Stack } from '@mui/material';
import { DividerLight } from 'src/components/base/styles/card';
import StateFilled from './state-light-filled';
import StateSoft from './state-light-soft';

const Component = () => {
  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{
        border: 0,
        backgroundColor: 'neutral.900',
      }}
    >
      <CardContent>
        <Stack
          spacing={2}
          divider={
            <DividerLight
              sx={{
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'neutral.200' : 'neutral.800',
              }}
              variant="middle"
            />
          }
        >
          <StateFilled />
          <StateSoft />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Component;
