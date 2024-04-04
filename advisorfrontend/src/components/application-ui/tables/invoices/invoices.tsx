import { Unstable_Grid2 as Grid } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import InvoiceStats from 'src/components/application-ui/horizontal-lists/invoice-stats/invoice-stats';
import { useRefMounted } from 'src/hooks/use-ref-mounted';
import { invoicesApi } from 'src/mocks/invoices';
import { Invoice } from 'src/models/invoice';
import Results from './results';

function Component() {
  const isMountedRef = useRefMounted();
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const getInvoices = useCallback(async () => {
    try {
      const response = await invoicesApi.getInvoices();

      if (isMountedRef()) {
        setInvoices(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid xs={12}>
        <InvoiceStats />
      </Grid>
      <Grid xs={12}>
        <Results invoices={invoices} />
      </Grid>
    </Grid>
  );
}

export default Component;
