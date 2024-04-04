import { Box, DialogContent } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { Scrollbar } from 'src/components/base/scrollbar';

const Component = () => {
  return (
    <Scrollbar>
      <DialogContent sx={{ pt: 0 }}>
        <Box height={2} />
        <PlaceholderBox
          height={768}
          flex={1}
        />
      </DialogContent>
    </Scrollbar>
  );
};

export default Component;
