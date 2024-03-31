import { Divider, LinearProgress, Stack } from '@mui/material';
import React from 'react';

const Component = () => {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack
      divider={<Divider />}
      spacing={{ xs: 2, sm: 3 }}
    >
      <LinearProgress
        variant="buffer"
        value={progress}
        valueBuffer={buffer}
        color="primary"
      />
      <LinearProgress
        variant="buffer"
        value={progress}
        valueBuffer={buffer}
        color="secondary"
      />
      <LinearProgress
        variant="buffer"
        value={progress}
        valueBuffer={buffer}
        color="error"
      />
      <LinearProgress
        variant="buffer"
        value={progress}
        valueBuffer={buffer}
        color="warning"
      />
      <LinearProgress
        variant="buffer"
        value={progress}
        valueBuffer={buffer}
        color="success"
      />
      <LinearProgress
        variant="buffer"
        value={progress}
        valueBuffer={buffer}
        color="info"
      />
    </Stack>
  );
};

export default Component;
