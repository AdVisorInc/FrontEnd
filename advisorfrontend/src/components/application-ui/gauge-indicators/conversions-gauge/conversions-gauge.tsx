import TrendingDown from '@mui/icons-material/TrendingDown';
import TrendingFlat from '@mui/icons-material/TrendingFlat';
import TrendingUp from '@mui/icons-material/TrendingUp';
import {
  alpha,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

const LabelPrimary = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(18),
  fontWeight: 500,
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
}));

function Conversions() {
  const { t } = useTranslation();
  const theme = useTheme();

  const data = {
    percentage: 67,
    sales: 127,
    customers: 1.358,
    earnings: '$15,864.00',
  };

  return (
    <Card>
      <CardHeader title={t('Conversions')} />
      <Divider />
      <CardContent>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          mt={{ xs: 2, sm: 3 }}
        >
          <Box width={{ xs: '80%', sm: '54%', md: '60%' }}>
            <CircularProgressbarWithChildren
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2.2 + 1 / 5.85,
                trailColor: alpha(theme.palette.primary.main, 0.15),
                pathColor: theme.palette.primary.main,
                strokeLinecap: 'round',
              })}
              strokeWidth={6}
              value={data.percentage}
            >
              <LabelPrimary
                sx={{
                  mt: '-15px',
                }}
              >
                $5,432,95
              </LabelPrimary>
              <Typography
                variant="h5"
                fontWeight={500}
                color="text.secondary"
                sx={{ pt: 0.5 }}
              >
                monthly revenue
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>
        </Box>
        <List
          disablePadding
          dense
        >
          <ListItem>
            <ListItemText
              primary={t('Sales Today')}
              primaryTypographyProps={{
                variant: 'h5',
                fontWeight: 500,
                gutterBottom: true,
                noWrap: true,
                color: 'text.secondary',
              }}
              secondary={data.sales}
              secondaryTypographyProps={{
                variant: 'h3',
                color: 'primary.main',
                noWrap: true,
              }}
            />
            <AvatarState
              isSoft
              state="error"
            >
              <TrendingDown fontSize="small" />
            </AvatarState>
          </ListItem>
          <Divider
            sx={{
              my: 1,
            }}
          />
          <ListItem>
            <ListItemText
              primary={t('Customers per month')}
              primaryTypographyProps={{
                variant: 'h5',
                fontWeight: 500,
                gutterBottom: true,
                noWrap: true,
                color: 'text.secondary',
              }}
              secondary={data.customers}
              secondaryTypographyProps={{
                variant: 'h3',
                color: 'primary.main',
              }}
            />
            <AvatarState
              isSoft
              state="warning"
            >
              <TrendingFlat fontSize="small" />
            </AvatarState>
          </ListItem>
          <Divider
            sx={{
              my: 1,
            }}
          />
          <ListItem>
            <ListItemText
              primary={t('Earnings Report')}
              primaryTypographyProps={{
                variant: 'h5',
                fontWeight: 500,
                gutterBottom: true,
                noWrap: true,
                color: 'text.secondary',
              }}
              secondary={data.earnings}
              secondaryTypographyProps={{
                variant: 'h3',
                color: 'primary.main',
              }}
            />
            <AvatarState
              isSoft
              state="success"
            >
              <TrendingUp fontSize="small" />
            </AvatarState>
          </ListItem>
        </List>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          py: 2.4,
          px: 3.5,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[900], 0.3) : 'neutral.25',
        }}
      >
        <Button variant="outlined">{t('View details')}</Button>
      </CardActions>
    </Card>
  );
}

export default Conversions;
