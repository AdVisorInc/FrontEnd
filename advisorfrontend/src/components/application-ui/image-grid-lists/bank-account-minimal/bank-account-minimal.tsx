import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Unstable_Grid2 as Grid,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';

function SecondaryAccounts() {
  const data = {
    logo1: '/placeholders/logo/deutschebank.svg',
    logo2: '/placeholders/logo/wellsfargo.svg',
  };

  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        md={6}
        xs={12}
      >
        <Card>
          <CardHeader
            sx={{
              alignItems: 'flex-start',
              flexDirection: { xs: 'column-reverse', sm: 'row' },
              pb: 0,

              '& .MuiCardHeader-action': {
                mt: 0,
                mb: { xs: 1, sm: 0 },
              },
            }}
            action={
              <Avatar
                sx={{
                  width: theme.spacing(6),
                  height: theme.spacing(6),
                  background: 'transparent',
                }}
                variant="square"
                alt="Deutsche Bank"
                src={data.logo1}
              />
            }
            title="Deutsche Bank"
          />
          <Box
            sx={{
              px: 2,
              pb: 2,
            }}
          >
            <Box
              sx={{
                pb: 2,
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                ACC:{' '}
                <Typography
                  color="text.primary"
                  component="span"
                  fontWeight={500}
                >
                  6855 37495
                </Typography>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                BSB:{' '}
                <Typography
                  color="text.primary"
                  component="span"
                  fontWeight={500}
                >
                  346 773
                </Typography>
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                variant="h3"
                component="div"
              >
                $22,674.32
              </Typography>
              <IconButton
                size="small"
                color="primary"
              >
                <MoreVertTwoToneIcon />
              </IconButton>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid
        md={6}
        xs={12}
      >
        <Card>
          <CardHeader
            sx={{
              alignItems: 'flex-start',
              flexDirection: { xs: 'column-reverse', sm: 'row' },
              pb: 0,

              '& .MuiCardHeader-action': {
                mt: 0,
                mb: { xs: 1, sm: 0 },
              },
            }}
            action={
              <Avatar
                sx={{
                  width: theme.spacing(6),
                  height: theme.spacing(6),
                  background: 'transparent',
                }}
                variant="square"
                alt="Wells Fargo"
                src={data.logo2}
              />
            }
            title="Wells Fargo"
          />
          <Box
            sx={{
              px: 2,
              pb: 2,
            }}
          >
            <Box
              sx={{
                pb: 2,
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                ACC:{' '}
                <Typography
                  color="text.primary"
                  component="span"
                  fontWeight={500}
                >
                  645 45456
                </Typography>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                BSB:{' '}
                <Typography
                  color="text.primary"
                  component="span"
                  fontWeight={500}
                >
                  845 284
                </Typography>
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                variant="h3"
                component="div"
              >
                $3,854.00
              </Typography>
              <IconButton
                size="small"
                color="primary"
              >
                <MoreVertTwoToneIcon />
              </IconButton>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SecondaryAccounts;
