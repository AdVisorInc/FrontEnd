import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import TrendingDown from '@mui/icons-material/TrendingDown';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

interface TransactionData {
  amount: string;
  payer: string;
  purpose: string;
  status: 'success' | 'warning' | 'error';
  statusText: string;
  icon: React.ReactElement;
  linkText?: string;
  linkHref?: string;
}

const transactionData: TransactionData[] = [
  {
    amount: '$2499',
    payer: 'Ethan Donovan',
    purpose: 'Macbook PRO 16',
    status: 'success',
    statusText: 'Completed Successfully',
    icon: <CheckIcon />,
  },
  {
    amount: '$399',
    payer: 'Horia S.',
    purpose: 'Google Nest Thermostat',
    status: 'warning',
    statusText: 'Pending Payment',
    icon: <TrendingDown />,
  },
  {
    amount: '$199',
    payer: 'Poppy Freddy',
    purpose: 'Ring Smart Door Bell',
    status: 'error',
    statusText: 'Payment Failed',
    icon: <CloseIcon />,
  },
  {
    amount: '$999',
    payer: 'Guest purchase',
    purpose: '',
    status: 'success',
    statusText: 'Completed Successfully',
    icon: <CheckIcon />,
    linkText: 'Electronics',
    linkHref: '#',
  },
];

function RecentTransactions() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader
        action={
          <Button
            variant="contained"
            size="small"
          >
            {t('View all')}
          </Button>
        }
        title={t('Recent Transactions')}
      />
      <Divider />
      <CardContent>
        <List disablePadding>
          {transactionData.map((transaction, index) => (
            <React.Fragment key={index}>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <AvatarState
                    isSoft
                    state={transaction.status}
                  >
                    {transaction.icon}
                  </AvatarState>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <b>{transaction.amount}</b> paid by <b>{transaction.payer}</b> for{' '}
                      {transaction.purpose}
                      {transaction.linkText && (
                        <Link
                          underline="hover"
                          href={transaction.linkHref}
                        >
                          {transaction.linkText}
                        </Link>
                      )}
                    </>
                  }
                  primaryTypographyProps={{
                    variant: 'body1',
                    gutterBottom: true,
                    noWrap: true,
                  }}
                  secondary={t(transaction.statusText)}
                  secondaryTypographyProps={{
                    variant: 'body2',
                    color: `${transaction.status}.main`,
                    noWrap: true,
                  }}
                />
              </ListItem>
              {index < transactionData.length - 1 && <Divider sx={{ my: 1.5 }} />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default RecentTransactions;
