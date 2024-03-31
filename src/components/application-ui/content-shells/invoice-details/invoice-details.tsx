import { useCallback, useEffect, useState } from 'react';
import { useRefMounted } from 'src/hooks/use-ref-mounted';
import { invoicesApi } from 'src/mocks/invoices';
import { Invoice } from 'src/models/invoice';
import InvoiceBody from './invoice-body';

function Component() {
  const isMountedRef = useRefMounted();
  const [invoice, setInvoice] = useState<Invoice | null>(null);

  const getInvoice = useCallback(async () => {
    try {
      const response = await invoicesApi.getInvoice();

      if (isMountedRef()) {
        setInvoice(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getInvoice();
  }, [getInvoice]);

  if (!invoice) {
    return null;
  }

  return <InvoiceBody invoice={invoice} />;
}

export default Component;
