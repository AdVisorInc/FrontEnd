import type { FC } from 'react';
import { GuestGuard } from 'src/components/auth/guest-guard';

export const withGuestGuard = <P extends object>(Component: FC<P>): FC<P> => {
  return function WithGuestGuard(props: P) {
    return (
      <GuestGuard>
        <Component {...props} />
      </GuestGuard>
    );
  };
};
