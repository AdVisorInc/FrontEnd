import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
import { Button, Stack } from '@mui/material';
import { usePopover } from 'src/hooks/use-popover';
import { ComposedDropdown } from './composed-dropdown';

const Component = () => {
  const popover = usePopover<HTMLButtonElement>();

  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Button
        id="composed-button"
        color="secondary"
        variant="contained"
        aria-controls={popover.open ? 'composed-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={popover.open ? 'true' : undefined}
        onClick={popover.handleOpen}
        ref={popover.anchorRef}
        endIcon={<UnfoldMoreTwoToneIcon />}
      >
        Composed Dropdown
      </Button>
      <ComposedDropdown
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        anchorEl={popover.anchorRef.current}
        onClose={popover.handleClose}
        open={popover.open}
      />
    </Stack>
  );
};

export default Component;
