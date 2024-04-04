import { Card } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useRefMounted } from 'src/hooks/use-ref-mounted';
import { cryptoOrdersApi } from 'src/mocks/crypto_orders';
import { CryptoOrder } from 'src/models/crypto_order';
import RecentOrdersTable from './recent-orders-table';

function RecentOrders() {
  const isMountedRef = useRefMounted();
  const [cryptoOrders, setCryptoOrders] = useState<CryptoOrder[]>([]);

  const getCryptoOrders = useCallback(async () => {
    try {
      const response = await cryptoOrdersApi.getCryptoOrders();

      if (isMountedRef()) {
        setCryptoOrders(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getCryptoOrders();
  }, [getCryptoOrders]);

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentOrders;
