import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Typography,
  useTheme,
} from '@mui/material';
import { format, subDays } from 'date-fns';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';

type Transaction = {
  avatarBackground: string;
  avatarColor: string;
  avatarIcon: JSX.Element;
  primaryText: string;
  secondaryText: string;
  secondaryTextHighlight: string;
  amountCrypto: string;
  amountFiat: string;
  cryptoColor?: string;
};

type TransactionGroup = {
  date: Date;
  transactions: Transaction[];
};

function Component0() {
  const { t } = useTranslation();
  const theme = useTheme();

  const transactionsData: TransactionGroup[] = [
    {
      date: subDays(new Date(), 3),
      transactions: [
        {
          avatarBackground: theme.palette.success.main,
          avatarColor: theme.palette.success.contrastText,
          avatarIcon: <TrendingDownTwoToneIcon />,
          primaryText: 'Received Bitcoin',
          secondaryText: 'To',
          secondaryTextHighlight: 'My Bitcoin Wallet',
          amountCrypto: '0.234894 BTC',
          amountFiat: '$438 USD',
        },
        {
          avatarBackground: theme.palette.info.main,
          avatarColor: theme.palette.info.contrastText,
          avatarIcon: <TrendingUpTwoToneIcon />,
          primaryText: 'Sent Ethereum',
          secondaryText: 'From',
          secondaryTextHighlight: 'Ether Wallet',
          amountCrypto: '1.398456 ETH',
          amountFiat: '$5,495 USD',
        },
      ],
    },
    {
      date: subDays(new Date(), 5),
      transactions: [
        {
          avatarBackground: theme.palette.error.main,
          avatarColor: theme.palette.error.contrastText,
          avatarIcon: <TrendingFlatTwoToneIcon />,
          primaryText: 'Withdraw to bank account',
          secondaryText: 'From',
          secondaryTextHighlight: 'Total Balance',
          amountCrypto: '-23,584 USD',
          amountFiat: '',
          cryptoColor: 'error.main',
        },
        {
          avatarBackground: theme.palette.success.main,
          avatarColor: theme.palette.success.contrastText,
          avatarIcon: <TrendingDownTwoToneIcon />,
          primaryText: 'Transferred Ripple',
          secondaryText: 'To',
          secondaryTextHighlight: "John's XRP Stash",
          amountCrypto: '+5.473 XRP',
          cryptoColor: 'success.main',
          amountFiat: '$1,564 USD',
        },
      ],
    },
    {
      date: subDays(new Date(), 7),
      transactions: [
        {
          avatarBackground: theme.palette.success.main,
          avatarColor: theme.palette.success.contrastText,
          avatarIcon: <TrendingDownTwoToneIcon />,
          primaryText: 'Received Bitcoin',
          secondaryText: 'To',
          secondaryTextHighlight: 'My Bitcoin Wallet',
          amountCrypto: '0.234894 BTC',
          amountFiat: '$438 USD',
        },
      ],
    },
  ];

  return (
    <Card>
      <Box p={2.5}>
        <Typography
          variant="h5"
          fontWeight={600}
        >
          {t('All transactions')}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 458,
        }}
      >
        <Scrollbar>
          <List disablePadding>
            {transactionsData.map((group) => (
              <React.Fragment key={group.date.toString()}>
                <ListSubheader
                  color="primary"
                  sx={{
                    background: theme.palette.background.default,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {format(group.date, 'MMMM dd yyyy')}
                </ListSubheader>
                <Divider />
                {group.transactions.map((transaction, idx) => (
                  <React.Fragment key={idx}>
                    <ListItem
                      sx={{
                        p: 2.5,
                      }}
                    >
                      <ListItemAvatar
                        sx={{
                          mr: 1,
                          display: 'flex',
                          alignItems: 'center',
                          minWidth: 0,
                        }}
                      >
                        <Avatar
                          sx={{
                            background: transaction.avatarBackground,
                            color: transaction.avatarColor,
                            width: 44,
                            height: 44,
                          }}
                        >
                          {transaction.avatarIcon}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            noWrap
                            variant="h5"
                          >
                            {t(transaction.primaryText)}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            noWrap
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            {t(transaction.secondaryText)}{' '}
                            <Typography
                              component="span"
                              color="text.primary"
                            >
                              {transaction.secondaryTextHighlight}
                            </Typography>
                          </Typography>
                        }
                      />
                      <Box
                        flex={1}
                        sx={{
                          textAlign: 'right',
                        }}
                      >
                        <Typography
                          variant="h5"
                          noWrap
                          color={transaction.cryptoColor}
                        >
                          {transaction.amountCrypto}
                        </Typography>
                        <Typography
                          fontWeight={600}
                          noWrap
                          variant="subtitle2"
                        >
                          {transaction.amountFiat}
                        </Typography>
                      </Box>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </List>
        </Scrollbar>
      </Box>
      <Divider />
      <Box
        p={2}
        sx={{
          textAlign: 'center',
        }}
      >
        <Button
          variant="contained"
          endIcon={<KeyboardArrowRightTwoToneIcon />}
        >
          {t('View all transactions')}
        </Button>
      </Box>
    </Card>
  );
}

export default Component0;
