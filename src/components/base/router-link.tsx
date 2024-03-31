import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { forwardRef } from 'react';

interface RouterLinkProps extends Omit<LinkProps, 'to'> {
  href: string;
}

export const RouterLink = forwardRef((props: RouterLinkProps, ref: any) => {
  return (
    <Link
      ref={ref}
      {...props}
    />
  );
});
