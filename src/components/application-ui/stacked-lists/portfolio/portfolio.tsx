import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

type CryptoData = {
  nameKey: string;
  fullName: string;
  imageSrc?: string;
  avatarIcon?: JSX.Element;
  borderColor: string;
  amount: string;
  value: string;
  trendIcon: JSX.Element;
  trendColor: string;
};

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const cryptos: CryptoData[] = [
    {
      nameKey: 'BTC',
      fullName: 'Bitcoin',
      imageSrc: '/placeholders/logo/bitcoin.png',
      borderColor: 'warning.main',
      amount: '2.4895 BTC',
      value: '98,584 USD',
      trendIcon: <TrendingUpTwoToneIcon />,
      trendColor: 'success.main',
    },
    {
      nameKey: 'ETH',
      fullName: 'Ethereum',
      imageSrc: '/placeholders/logo/ethereum.png',
      borderColor: theme.palette.info.main,
      amount: '14.122 ETH',
      value: '56,584 USD',
      trendIcon: <TrendingDownTwoToneIcon />,
      trendColor: 'error.main',
    },
    {
      nameKey: 'USD',
      fullName: 'Dollar',
      avatarIcon: <MonetizationOnTwoToneIcon />,
      borderColor: 'success.main',
      amount: '37,238 USD',
      value: '',
      trendIcon: <TrendingFlatTwoToneIcon />,
      trendColor: 'warning.main',
    },
  ];

  return (
    <Card>
      <Box
        p={{ xs: 1.5, sm: 2.5 }}
        display="flex"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }}
        textAlign={{ xs: 'center', sm: 'left' }}
        justifyContent="space-between"
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight={600}
          >
            {t('My Portfolio')}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Status of your crypto assets')}
          </Typography>
        </Box>
        <Box mt={{ xs: 1.5, sm: 0 }}>
          <Tooltip
            arrow
            title={t('View stats for last week')}
          >
            <IconButton
              color="primary"
              sx={{
                fontWeight: 700,
                fontSize: theme.typography.pxToRem(12),
              }}
            >
              1W
            </IconButton>
          </Tooltip>
          <Tooltip
            arrow
            title={t('View stats for last month')}
          >
            <IconButton
              color="primary"
              sx={{
                fontWeight: 700,
                fontSize: theme.typography.pxToRem(12),
              }}
            >
              1M
            </IconButton>
          </Tooltip>
          <Tooltip
            arrow
            title={t('View stats for last year')}
          >
            <IconButton
              color="primary"
              sx={{
                fontWeight: 700,
                fontSize: theme.typography.pxToRem(12),
              }}
            >
              1Y
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Divider />
      <Box
        px={2}
        py={4}
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
          fontWeight={700}
          sx={{
            lineHeight: 1,
            fontSize: theme.typography.pxToRem(40),
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontSize: theme.typography.pxToRem(30),
            }}
            component="span"
          >
            $
          </Typography>
          <CountUp
            start={0}
            end={487.385}
            duration={4}
            separator=""
            delay={3}
            decimals={3}
            decimal=","
            prefix=""
            suffix=""
          />
        </Typography>
        <Typography
          variant="caption"
          fontWeight={600}
          color="text.secondary"
        >
          {t('Total Balance')}
        </Typography>
      </Box>
      <Divider />
      <List disablePadding>
        {cryptos.map((crypto, index) => (
          <React.Fragment key={index}>
            <ListItem
              sx={{
                p: 2.5,
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: 0,
                }}
              >
                {crypto.imageSrc ? (
                  <Avatar
                    sx={{
                      borderWidth: 3,
                      borderStyle: 'solid',
                      color: crypto.borderColor,
                      borderColor: crypto.borderColor,
                      padding: '2px',
                      width: 48,
                      height: 48,
                      '& img': {
                        borderRadius: 'inherit',
                      },
                    }}
                    src={crypto.imageSrc}
                  />
                ) : (
                  <Avatar
                    sx={{
                      borderWidth: 3,
                      borderStyle: 'solid',
                      color: crypto.borderColor,
                      borderColor: crypto.borderColor,
                      background: theme.palette.background.default,
                      padding: '0',
                      width: 48,
                      height: 48,
                    }}
                  >
                    {crypto.avatarIcon}
                  </Avatar>
                )}
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="h5">{t(crypto.nameKey)}</Typography>}
                secondary={
                  <Typography
                    variant="subtitle2"
                    color={crypto.borderColor}
                  >
                    {crypto.fullName}
                  </Typography>
                }
              />
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  textAlign: 'right',
                }}
              >
                <Box mr={1}>
                  <Typography variant="h4">{crypto.amount}</Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                  >
                    {crypto.value}
                  </Typography>
                </Box>
                {React.cloneElement(crypto.trendIcon, {
                  sx: { color: crypto.trendColor },
                })}
              </Box>
            </ListItem>
            {index !== cryptos.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>

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
          sx={{
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          {t('View all transactions')}
        </Button>
      </Box>
    </Card>
  );
}

export default Component;
