import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import RotateLeftTwoToneIcon from '@mui/icons-material/RotateLeftTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

function HealthStatus() {
  const { t } = useTranslation();
  const theme = useTheme();
  const data = [
    { label: 'Failed updates', color: theme.palette.error.main, value: 400 },
    { label: 'Successful updates', color: theme.palette.success.main, value: 300 },
  ];
  return (
    <Card>
      <CardHeader
        action={
          <Button
            size="small"
            color="secondary"
            variant="outlined"
          >
            {t('View historical data')}
          </Button>
        }
        title={t('Health Status')}
      />
      <Divider />
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{
          p: 2,
        }}
      >
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              zIndex: 12,
              left: '50%',
              marginTop: '-23px',
              marginLeft: '-23px',
            }}
          >
            <Tooltip
              title="Refresh status"
              arrow
              placement="top"
            >
              <ButtonIcon
                color="secondary"
                variant="outlined"
                sx={{
                  borderRadius: 100,
                  color: 'primary.main',
                }}
              >
                <RefreshTwoToneIcon />
              </ButtonIcon>
            </Tooltip>
          </Box>
          <PieChart
            series={[
              {
                paddingAngle: 5,
                innerRadius: 60,
                outerRadius: 80,
                cornerRadius: 5,
                data,
                highlightScope: { faded: 'global', highlighted: 'item' },
              },
            ]}
            margin={{ right: 0 }}
            width={200}
            height={225}
            slotProps={{
              legend: { hidden: true },
            }}
          />
        </Box>
        <Box flex={1}>
          <Box>
            <Typography
              color="text.primary"
              variant="h1"
              lineHeight={1}
              fontWeight={600}
              sx={{
                pr: 0.5,
                display: 'inline-flex',
              }}
            >
              82
            </Typography>
            <Typography
              color="text.secondary"
              variant="h2"
              lineHeight={1}
              sx={{
                pr: 2,
                display: 'inline-flex',
              }}
            >
              /100
            </Typography>
          </Box>
          <Card
            variant="outlined"
            elevation={0}
            sx={{
              mt: 2,
              px: 2,
              py: 1,
              border: 0,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            }}
          >
            <List disablePadding>
              <ListItem disableGutters>
                <ListItemText
                  primary={t('High accuracy test run')}
                  primaryTypographyProps={{
                    noWrap: true,
                    variant: 'subtitle1',
                    color: 'text.secondary',
                  }}
                />
                <Box
                  display="flex"
                  alignItems="center"
                  color="success.main"
                  fontWeight={600}
                >
                  {t('Ok')}
                  <AvatarState
                    isSoft
                    state="success"
                    sx={{
                      ml: 1,
                      width: 32,
                      height: 32,
                    }}
                  >
                    <CheckTwoToneIcon fontSize="small" />
                  </AvatarState>
                </Box>
              </ListItem>
              <Divider sx={{ my: 0.5 }} />
              <ListItem disableGutters>
                <ListItemText
                  primary={t('Storage capacity')}
                  primaryTypographyProps={{
                    noWrap: true,
                    variant: 'subtitle1',
                    color: 'text.secondary',
                  }}
                />
                <Box
                  display="flex"
                  alignItems="center"
                  color="success.main"
                  fontWeight={600}
                >
                  {t('Ok')}
                  <AvatarState
                    isSoft
                    state="success"
                    sx={{
                      ml: 1,
                      width: 32,
                      height: 32,
                    }}
                  >
                    <CheckTwoToneIcon fontSize="small" />
                  </AvatarState>
                </Box>
              </ListItem>
              <Divider sx={{ my: 0.5 }} />
              <ListItem disableGutters>
                <ListItemText
                  primary={t('Performance test')}
                  primaryTypographyProps={{
                    noWrap: true,
                    variant: 'subtitle1',
                    color: 'text.secondary',
                  }}
                />
                <Box
                  display="flex"
                  alignItems="center"
                  color="error.main"
                  fontWeight={600}
                >
                  {t('Failed')}
                  <AvatarState
                    isSoft
                    state="error"
                    sx={{
                      ml: 1,
                      width: 32,
                      height: 32,
                    }}
                  >
                    <CloseRoundedIcon fontSize="small" />
                  </AvatarState>
                </Box>
              </ListItem>
            </List>
          </Card>
        </Box>
      </Stack>
      <Divider />
      <Box
        py={2}
        sx={{
          textAlign: 'center',
        }}
      >
        <Button
          sx={{
            px: 2.5,
            borderRadius: 10,
            transform: 'translateY(0px)',
            transition: theme.transitions.create(['all']),
            boxShadow: `0px 1px 4px ${alpha(
              theme.palette.primary.main,
              0.25
            )}, 0px 3px 12px 2px ${alpha(theme.palette.primary.main, 0.35)}`,

            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0px 1px 4px ${alpha(
                theme.palette.primary.main,
                0.25
              )}, 0px 3px 12px 2px ${alpha(theme.palette.primary.main, 0.35)}`,
            },
            '&:active': {
              boxShadow: 'none',
            },
          }}
          variant="contained"
          startIcon={<RotateLeftTwoToneIcon />}
        >
          {t('Check again')}
        </Button>
      </Box>
    </Card>
  );
}

export default HealthStatus;
