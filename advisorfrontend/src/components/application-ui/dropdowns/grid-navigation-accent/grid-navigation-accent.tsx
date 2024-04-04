import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { Button, Stack } from '@mui/material';
import { usePopover } from 'src/hooks/use-popover';
import { GridNavigationAccentDropdown } from './grid-navigation-accent-dropdown';

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
        id="large-navigation-accent-button"
        variant="outlined"
        color="secondary"
        endIcon={<KeyboardArrowDownTwoToneIcon />}
        aria-controls={popover.open ? 'large-navigation-accent-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={popover.open ? 'true' : undefined}
        onClick={popover.handleOpen}
        ref={popover.anchorRef}
      >
        Open Accent Menu
      </Button>
      <GridNavigationAccentDropdown
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        anchorEl={popover.anchorRef.current}
        onClose={popover.handleClose}
        open={popover.open}
      />
    </Stack>
  );
};

export default Component;
