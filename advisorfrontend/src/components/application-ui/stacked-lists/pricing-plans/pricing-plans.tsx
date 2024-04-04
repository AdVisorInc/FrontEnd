import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {
  alpha,
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface PlanData {
  tooltipPurchase: string;
  tooltipRemove: string;
  dotColor: string;
  planType: string;
  subscribersIcon: JSX.Element;
  numberOfSubscribers: number;
  price: string;
}

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: theme.spacing(1.8),
  width: theme.spacing(1.8),
  height: theme.spacing(1.8),
  display: 'inline-block',
  marginRight: theme.spacing(0.8),
  marginTop: theme.spacing(0.9),
  border: `${theme.palette.background.paper} solid 2px`,
}));

export const ListItemWrapper = styled(ListItem)(({ theme }) => ({
  position: 'relative',

  '&:hover': {
    background: alpha(theme.palette.background.default, 0.5),

    '.MuiActionButtons': {
      visibility: 'visible',
      opacity: 1,
    },
  },

  '.MuiActionButtons': {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[12],
    opacity: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    visibility: 'hidden',
    top: '50%',
    marginTop: theme.spacing(-3.3),
    position: 'absolute',
    right: theme.spacing(2),
    padding: theme.spacing(1),
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const plans: PlanData[] = [
    {
      tooltipPurchase: 'Purchase a single license',
      tooltipRemove: 'Remove existing license',
      dotColor: theme.palette.success.main,
      planType: 'Basic',
      subscribersIcon: (
        <PersonOutlineTwoToneIcon
          sx={{ mr: 0.5 }}
          fontSize="small"
        />
      ),
      numberOfSubscribers: 3487,
      price: '$176.45',
    },
    {
      tooltipPurchase: 'Purchase a single license',
      tooltipRemove: 'Remove existing license',
      dotColor: theme.palette.warning.main,
      planType: 'Premium',
      subscribersIcon: (
        <PersonOutlineTwoToneIcon
          sx={{ mr: 0.5 }}
          fontSize="small"
        />
      ),
      numberOfSubscribers: 985,
      price: '$567.99',
    },
    {
      tooltipPurchase: 'Purchase a single license',
      tooltipRemove: 'Remove existing license',
      dotColor: theme.palette.primary.main,
      planType: 'Ultra',
      subscribersIcon: (
        <PersonOutlineTwoToneIcon
          sx={{ mr: 0.5 }}
          fontSize="small"
        />
      ),
      numberOfSubscribers: 89,
      price: '$893.00',
    },
  ];

  return (
    <Card>
      <CardHeader
        sx={{
          p: 2,
          background: theme.palette.background.default,
        }}
        title={t('Pricing Plans')}
      />
      <Divider />
      <List disablePadding>
        {plans.map((plan, index) => (
          <React.Fragment key={index}>
            <ListItemWrapper sx={{ alignItems: 'flex-start', px: 2, py: 2.5 }}>
              <Card className="MuiActionButtons">
                <Tooltip
                  arrow
                  placement="top"
                  title={t(plan.tooltipPurchase)}
                >
                  <IconButton
                    size="large"
                    color="primary"
                  >
                    <ShoppingCartTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  arrow
                  placement="top"
                  title={t(plan.tooltipRemove)}
                >
                  <IconButton
                    size="large"
                    color="error"
                  >
                    <CloseRoundedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Card>
              <ListItemAvatar sx={{ minWidth: 0 }}>
                <DotLegend style={{ background: plan.dotColor }} />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="h5"
                    gutterBottom
                  >
                    {t(plan.planType)}
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    noWrap
                    variant="subtitle2"
                  >
                    {plan.subscribersIcon}
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      color="text.primary"
                    >
                      {plan.numberOfSubscribers}
                    </Typography>
                    <Typography
                      pl={0.5}
                      color="text.secondary"
                      component="span"
                    >
                      {t('subscribers')}
                    </Typography>
                  </Typography>
                }
              />
              <Box
                sx={{ textAlign: 'right' }}
                alignSelf="center"
              >
                <Typography
                  variant="h5"
                  fontWeight={600}
                >
                  {plan.price}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                >
                  {t('per month')}
                </Typography>
              </Box>
            </ListItemWrapper>
            {index !== plans.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
}

export default Component;
