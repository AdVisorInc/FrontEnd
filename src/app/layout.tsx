import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import type { ReactNode } from 'react';
import 'src/global.css';
import { NProgress } from 'src/components/base/nprogress';
import type { Customization } from 'src/contexts/customization';
import { Layout as DocumentLayout } from 'src/layouts/document';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    default: 'UIFort',
    template: `%s | UIFort`,
  },
  description: 'React UI Kit and Admin Dashboard Template - UIFort',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
};

const CUSTOMIZATION_STORAGE_KEY = 'uifort.customization';

const restoreCustomization = (): Customization | undefined => {
  const cookieList = cookies();

  let value: Customization | undefined;

  if (cookieList.has(CUSTOMIZATION_STORAGE_KEY)) {
    try {
      const restored = cookieList.get(CUSTOMIZATION_STORAGE_KEY);

      if (restored) {
        value = JSON.parse(restored!.value);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return value;
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  const customization = restoreCustomization();

  return (
    <html>
      <body>
        <DocumentLayout customization={customization}>
          {children}
          <NProgress />
        </DocumentLayout>
      </body>
    </html>
  );
};

export default Layout;
