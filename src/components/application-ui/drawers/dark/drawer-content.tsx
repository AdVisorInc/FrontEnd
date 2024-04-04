import { DialogContent } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { Scrollbar } from 'src/components/base/scrollbar';

const Component = () => {
  return (
    <Scrollbar dark>
      <DialogContent>
        <PlaceholderBox
          dark
          height={768}
          flex={1}
        />
      </DialogContent>
    </Scrollbar>
  );
};

export default Component;
