import { Theme, useMediaQuery } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

export const useSidebarDrawer = () => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const [open, setOpen] = useState(lgUp);

  const screenResize = useCallback((): void => {
    if (!lgUp) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [lgUp]);

  useEffect(() => {
    screenResize();
  }, [lgUp]);

  const handleToggle = useCallback((): void => {
    setOpen((prevState) => !prevState);
  }, []);

  const handleClose = useCallback((): void => {
    setOpen(false);
  }, []);

  const handleOpen = useCallback((): void => {
    setOpen(true);
  }, []);

  return {
    handleToggle,
    handleClose,
    handleOpen,
    open,
  };
};
