import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from '@mui/material';
import React, { MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TimelineBasic from 'src/components/application-ui/timelines/basic/basic';
import { Scrollbar } from 'src/components/base/scrollbar';

type Transaction = {
  background: string;
  contrastText: string;
  icon: React.ReactNode;
  primaryText: string;
  secondaryText: string;
  value: string;
  currency?: string;
  amountColor?: string;
};

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const [tabs, setTab] = useState<string | null>('activity');

  const handleViewOrientation = (_event: MouseEvent<HTMLElement>, newValue: string | null) => {
    setTab(newValue);
  };

  const transactions: Transaction[] = [
    {
      background: theme.palette.success.main,
      contrastText: theme.palette.success.contrastText,
      icon: <TrendingDownTwoToneIcon />,
      primaryText: t('Received Bitcoin'),
      secondaryText: `${t('To')} My Bitcoin Wallet`,
      value: '0.234894 BTC',
      currency: '$438 USD',
    },
    {
      background: theme.palette.info.main,
      contrastText: theme.palette.info.contrastText,
      icon: <TrendingUpTwoToneIcon />,
      primaryText: t('Sent Ethereum'),
      secondaryText: `${t('From')} Ether Wallet`,
      value: '1.398456 ETH',
      currency: '$5,495 USD',
    },
    {
      background: theme.palette.error.main,
      contrastText: theme.palette.error.contrastText,
      icon: <TrendingFlatTwoToneIcon />,
      primaryText: t('Withdraw to bank account'),
      secondaryText: `${t('From')} Total Balance`,
      value: '-23,584 USD',
      amountColor: 'error',
    },
    {
      background: theme.palette.success.main,
      contrastText: theme.palette.success.contrastText,
      icon: <TrendingDownTwoToneIcon />,
      primaryText: t('Transferred Ripple'),
      secondaryText: `${t('To')} John's XRP Stash`,
      value: '+5.473 XRP',
      currency: '$1,564 USD',
      amountColor: 'success',
    },
  ];

  return (
    <Card>
      <CardHeader
        disableTypography
        title={<Typography variant="h6">{t('Recent Activity')}</Typography>}
        subheader={
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Your recent crypto activities')}
          </Typography>
        }
        action={
          <ToggleButtonGroup
            color="primary"
            size="small"
            value={tabs}
            exclusive
            onChange={handleViewOrientation}
          >
            <ToggleButton
              sx={{
                px: 2,
                py: 0.5,
                lineHeight: 1.5,
                fontSize: theme.typography.pxToRem(12),
              }}
              value="activity"
            >
              {t('Activity')}
            </ToggleButton>
            <ToggleButton
              sx={{
                px: 2,
                py: 0.5,
                lineHeight: 1.5,
                fontSize: theme.typography.pxToRem(12),
              }}
              value="trading"
            >
              {t('Trading')}
            </ToggleButton>
          </ToggleButtonGroup>
        }
      />
      <Divider />

      {tabs === 'activity' && (
        <>
          <Box
            sx={{
              height: 403,
            }}
          >
            <Scrollbar>
              <Box pt={2}>
                <TimelineBasic />
              </Box>
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
              {t('View all activity')}
            </Button>
          </Box>
        </>
      )}
      {tabs === 'trading' && (
        <>
          <Box
            sx={{
              height: 356,
            }}
          >
            <Scrollbar>
              <List disablePadding>
                {transactions.map((tx, index) => (
                  <React.Fragment key={index}>
                    <ListItem sx={{ p: 2.5 }}>
                      <ListItemAvatar
                        sx={{ mr: 1, display: 'flex', alignItems: 'center', minWidth: 0 }}
                      >
                        <Avatar
                          sx={{
                            background: tx.background,
                            color: tx.contrastText,
                            width: 44,
                            height: 44,
                          }}
                        >
                          {tx.icon}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            noWrap
                            variant="h5"
                          >
                            {tx.primaryText}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            noWrap
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            {tx.secondaryText}
                          </Typography>
                        }
                      />
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography
                          variant="h6"
                          noWrap
                          color={tx.amountColor}
                        >
                          {tx.value}
                        </Typography>
                        {tx.currency && (
                          <Typography
                            noWrap
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            {tx.currency}
                          </Typography>
                        )}
                      </Box>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
              <Box
                px={2}
                py={3}
                sx={{
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                >
                  {t("You've reached the end of the trading list")}!
                </Typography>
              </Box>
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
        </>
      )}
      {!tabs && (
        <Box
          p={{ xs: 2, sm: 3 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            height: 422,
            textAlign: 'center',
          }}
        >
          <Box>
            <Typography
              align="center"
              variant="h3"
              fontWeight={400}
              color="text.secondary"
              sx={{
                mt: 3,
              }}
            >
              {t('Select one of the tabs to continue')}
            </Typography>
            <Button
              sx={{
                mt: 4,
              }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      )}
    </Card>
  );
}

export default Component;
