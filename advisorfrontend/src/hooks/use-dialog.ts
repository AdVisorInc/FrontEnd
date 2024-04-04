import { useCallback, useState } from 'react';

interface DialogController<T> {
  data?: T;
  handleClose: () => void;
  handleOpen: (data?: T) => void;
  open: boolean;
}

export function useDialog<T = unknown>(): DialogController<T> {
  const [state, setState] = useState<{ open: boolean; data?: T }>({
    open: false,
    data: undefined,
  });

  const handleOpen = useCallback((data?: T): void => {
    setState((prevState) => ({
      ...prevState,
      open: true,
      data,
    }));
  }, []);

  const handleClose = useCallback((): void => {
    setState((prevState) => ({
      ...prevState,
      open: false,
    }));
  }, []);

  return {
    data: state.data,
    handleClose,
    handleOpen,
    open: state.open,
  };
}
