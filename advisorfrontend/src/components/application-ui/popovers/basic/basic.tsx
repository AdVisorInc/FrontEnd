import { Button, Card, CardContent } from '@mui/material';
import { usePopover } from 'src/hooks/use-popover';
import { ExamplePopover } from './example-popover';

const Component = () => {
  const popover = usePopover<HTMLButtonElement>();

  return (
    <Card>
      <CardContent
        sx={{
          textAlign: 'center',
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          onClick={popover.handleOpen}
          ref={popover.anchorRef}
        >
          Open popover with click
        </Button>
        <ExamplePopover
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          anchorEl={popover.anchorRef.current}
          onClose={popover.handleClose}
          open={popover.open}
        />
      </CardContent>
    </Card>
  );
};

export default Component;
