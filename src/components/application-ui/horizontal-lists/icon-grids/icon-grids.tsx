import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import AddLocationTwoToneIcon from '@mui/icons-material/AddLocationTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import MoneyTwoToneIcon from '@mui/icons-material/MoneyTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import {
  Box,
  Card,
  Divider,
  IconButton,
  Stack,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.primary.contrastText,
  transform: 'translateY(0px)',
  transition: theme.transitions.create(['color', 'transform', 'background']),

  '.MuiSvgIcon-root': {
    transform: 'scale(1)',
    transition: theme.transitions.create(['transform']),
  },

  '&:hover': {
    background: 'initial',
    transform: 'translateY(-2px)',

    '.MuiSvgIcon-root': {
      transform: 'scale(1.2)',
    },
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="stretch"
        divider={
          <Divider
            orientation="vertical"
            flexItem
          />
        }
        spacing={0}
      >
        <Box
          display="flex"
          flex={1}
          justifyContent="space-evenly"
          alignItems="stretch"
        >
          <Box
            p={{ xs: 2, sm: 3 }}
            sx={{
              textAlign: 'center',
            }}
          >
            <MonetizationOnTwoToneIcon
              sx={{
                color: 'warning.main',
              }}
            />
            <Typography variant="h3">$9,658</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('revenue')}
            </Typography>
          </Box>
          <Box
            p={{ xs: 2, sm: 3 }}
            sx={{
              textAlign: 'center',
            }}
          >
            <PersonTwoToneIcon
              sx={{
                color: 'success.main',
              }}
            />
            <Typography variant="h3">23,594</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('users')}
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flex={1}
          justifyContent="space-evenly"
          alignItems="stretch"
        >
          <Box
            p={{ xs: 2, sm: 3 }}
            sx={{
              textAlign: 'center',
            }}
          >
            <SubscriptionsTwoToneIcon />
            <Typography variant="h3">1,064</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('orders')}
            </Typography>
          </Box>
          <Box
            p={{ xs: 2, sm: 3 }}
            sx={{
              textAlign: 'center',
            }}
          >
            <MoneyTwoToneIcon
              sx={{
                color: 'error.main',
              }}
            />
            <Typography
              sx={{
                minWidth: 100,
              }}
              variant="h3"
            >
              <CountUp
                start={0}
                end={9.678}
                duration={4}
                separator=""
                delay={1}
                decimals={3}
                decimal=","
                prefix=""
                suffix="M"
              />
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('orders')}
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Divider />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="stretch"
        divider={
          <Divider
            orientation="vertical"
            flexItem
          />
        }
        spacing={0}
      >
        <Box
          display={{ xs: 'none', sm: 'flex' }}
          flex={1}
          justifyContent="space-evenly"
          alignItems="stretch"
        >
          <Box
            p={{ xs: 2, sm: 3 }}
            sx={{
              textAlign: 'center',
            }}
          >
            <Tooltip
              arrow
              title={t('Tooltip for this icon button')}
            >
              <IconButtonWrapper
                sx={{
                  background: theme.palette.primary.main,
                  '&:hover': { background: theme.palette.primary.light },
                }}
              >
                <AddCircleTwoToneIcon />
              </IconButtonWrapper>
            </Tooltip>
            <Tooltip
              arrow
              title={t('Tooltip for this icon button')}
            >
              <IconButtonWrapper
                sx={{
                  mx: 2,
                  background: theme.palette.success.main,
                  '&:hover': { background: theme.palette.success.light },
                }}
              >
                <AddLocationTwoToneIcon />
              </IconButtonWrapper>
            </Tooltip>
            <Tooltip
              arrow
              title={t('Tooltip for this icon button')}
            >
              <IconButtonWrapper
                sx={{
                  background: theme.palette.warning.main,
                  '&:hover': { background: theme.palette.warning.light },
                }}
              >
                <AddBusinessTwoToneIcon />
              </IconButtonWrapper>
            </Tooltip>
          </Box>
        </Box>
        <Box
          display="flex"
          flex={1}
          justifyContent="space-evenly"
          alignItems="stretch"
        >
          <Box
            p={{ xs: 2, sm: 3 }}
            sx={{
              textAlign: 'center',
            }}
          >
            <Tooltip
              arrow
              title={t('Tooltip for this icon button')}
            >
              <IconButtonWrapper
                sx={{
                  background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
                  '&:hover': { background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)' },
                }}
              >
                <AddCircleTwoToneIcon />
              </IconButtonWrapper>
            </Tooltip>
            <Tooltip
              arrow
              title={t('Tooltip for this icon button')}
            >
              <IconButtonWrapper
                sx={{
                  mx: 2,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important',
                  '&:hover': { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
                }}
              >
                <AddLocationTwoToneIcon />
              </IconButtonWrapper>
            </Tooltip>
            <Tooltip
              arrow
              title={t('Tooltip for this icon button')}
            >
              <IconButtonWrapper
                sx={{
                  background: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)',
                  '&:hover': { background: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)' },
                }}
              >
                <AddBusinessTwoToneIcon />
              </IconButtonWrapper>
            </Tooltip>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
}

export default Component;
