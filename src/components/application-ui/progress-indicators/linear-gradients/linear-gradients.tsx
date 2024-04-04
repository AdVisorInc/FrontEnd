import { Card, CardContent, Stack } from '@mui/material';
import { DividerLight } from 'src/components/base/styles/card';
import {
  LinearProgressDark,
  LinearProgressGradientGreen,
  LinearProgressGradientOrange,
  LinearProgressGradientPurple,
} from 'src/components/base/styles/progress-bar';

const Component = () => {
  return (
    <Card
      variant="outlined"
      elevation={0}
      sx={{
        border: 0,
        backgroundColor: 'neutral.900',
      }}
    >
      <CardContent>
        <Stack
          divider={<DividerLight />}
          spacing={{ xs: 2, sm: 3 }}
        >
          <LinearProgressGradientGreen
            variant="determinate"
            value={45}
          />
          <LinearProgressGradientOrange
            variant="determinate"
            value={65}
          />
          <LinearProgressGradientPurple
            variant="determinate"
            value={85}
          />

          <LinearProgressDark
            variant="determinate"
            value={85}
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Component;
