import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import AddAlertTwoToneIcon from '@mui/icons-material/AddAlertTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import CompareArrowsTwoToneIcon from '@mui/icons-material/CompareArrowsTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  CardActionArea,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CardBorderColor } from 'src/components/base/styles/card-border-color';

const CardActionAreaWrapper = styled(CardActionArea)(({ theme }) => ({
  '& .MuiTouchRipple-root': {
    opacity: 0.2,
  },

  '& .MuiCardActionArea-focusHighlight': {
    background: theme.palette.neutral[700],
  },

  '&:hover .MuiCardActionArea-focusHighlight': {
    opacity: 0.03,
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <CardActionAreaWrapper
            sx={{
              p: { xs: 2, sm: 3 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box display="flex">
              <Avatar
                sx={{
                  width: theme.spacing(5.5),
                  height: theme.spacing(5.5),
                  background: theme.palette.error.main,
                  color: theme.palette.error.contrastText,
                }}
              >
                <AccountBoxTwoToneIcon />
              </Avatar>
              <Box ml={2}>
                <Typography
                  color="text.secondary"
                  component="div"
                  variant="caption"
                >
                  {t('User Accounts')}
                </Typography>
                <Typography variant="h2">21,164</Typography>
                <Box
                  ml={-0.5}
                  mt={1.5}
                  display="flex"
                  alignItems="center"
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      pr: 0.5,
                      color: theme.palette.success.main,
                    }}
                  >
                    <ArrowUpwardTwoToneIcon
                      fontSize="small"
                      sx={{
                        mr: 0.2,
                      }}
                    />
                    <span>65.44%</span>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    noWrap
                    color="text.secondary"
                  >
                    {t('increase this quarter')}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <ChevronRightTwoToneIcon />
          </CardActionAreaWrapper>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important',
          }}
        >
          <CardActionAreaWrapper
            sx={{
              p: { xs: 2, sm: 3 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              '.MuiCardActionArea-focusHighlight': {
                background: theme.palette.common.white,
              },
            }}
          >
            <Box display="flex">
              <Avatar
                sx={{
                  width: theme.spacing(5.5),
                  height: theme.spacing(5.5),
                  background: theme.palette.success.main,
                  color: theme.palette.success.contrastText,
                }}
              >
                <CompareArrowsTwoToneIcon />
              </Avatar>
              <Box ml={2}>
                <Typography
                  sx={{
                    color: alpha(theme.palette.common.white, 0.7),
                  }}
                  color="text.secondary"
                  component="div"
                  variant="caption"
                >
                  {t('Total Sales')}
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.common.white,
                  }}
                  variant="h2"
                >
                  $68,483
                </Typography>
                <Box
                  ml={-0.5}
                  mt={1.5}
                  display="flex"
                  alignItems="center"
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      pr: 0.5,
                      color: theme.palette.success.main,
                    }}
                  >
                    <ArrowUpwardTwoToneIcon
                      fontSize="small"
                      sx={{
                        mr: 0.2,
                      }}
                    />
                    <span>54.28%</span>
                  </Typography>
                  <Typography
                    sx={{
                      color: alpha(theme.palette.common.white, 0.7),
                    }}
                    variant="subtitle2"
                    noWrap
                  >
                    {t('increase this month')}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <ChevronRightTwoToneIcon
              sx={{
                color: theme.palette.common.white,
              }}
            />
          </CardActionAreaWrapper>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <CardBorderColor
          borderColor="info"
          borderPosition="bottom"
        >
          <CardActionAreaWrapper
            sx={{
              p: { xs: 2, sm: 3 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box display="flex">
              <Avatar
                variant="rounded"
                sx={{
                  width: theme.spacing(5.5),
                  height: theme.spacing(5.5),
                  background: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
              >
                <AddAlertTwoToneIcon />
              </Avatar>
              <Box ml={2}>
                <Typography
                  color="text.secondary"
                  component="div"
                  variant="caption"
                >
                  {t('Orders')}
                </Typography>
                <Typography variant="h2">23,854</Typography>
                <Box
                  ml={-0.5}
                  mt={1.5}
                  display="flex"
                  alignItems="center"
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      pr: 0.5,
                      color: theme.palette.error.main,
                    }}
                  >
                    <ArrowDownwardTwoToneIcon
                      fontSize="small"
                      sx={{
                        mr: 0.2,
                      }}
                    />
                    <span>5.25%</span>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    noWrap
                    color="text.secondary"
                  >
                    {t('decrease this month')}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <ChevronRightTwoToneIcon />
          </CardActionAreaWrapper>
        </CardBorderColor>
      </Grid>
    </Grid>
  );
}

export default Component;
