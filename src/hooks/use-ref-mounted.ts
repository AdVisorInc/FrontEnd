import { useCallback, useEffect, useRef } from 'react';

export const useRefMounted = (): (() => boolean) => {
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback((): boolean => isMounted.current, []);
};
