import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  Link,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LinearProgressAlternate } from 'src/components/base/styles/progress-bar';

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: '100px',

  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.9),
  },
}));

function Component() {
  const { t } = useTranslation();

  return (
    <Card>
      <Box
        sx={{
          p: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">
            <Typography
              fontWeight={400}
              sx={{
                pr: 1,
              }}
              variant="h5"
              component="span"
              color="text.secondary"
            >
              #35
            </Typography>
            Hackathon
          </Typography>
          <Box
            display="flex"
            alignItems="center"
          >
            <Tooltip
              title={t('Add more participants')}
              arrow
              placement="right"
            >
              <IconButtonWrapper size="small">
                <AddTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box
        p={{ xs: 2, sm: 3 }}
        sx={{
          textAlign: 'center',
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
        >
          <Grid
            xs={12}
            sm={6}
          >
            <Typography
              variant="h6"
              fontWeight={500}
              color="text.secondary"
            >
              {t('Users')}
            </Typography>
            <Typography variant="h3">1,685</Typography>
          </Grid>
          <Grid
            xs={12}
            sm={6}
          >
            <Typography
              variant="h6"
              fontWeight={500}
              color="text.secondary"
            >
              {t('Revenue')}
            </Typography>
            <Typography
              variant="h3"
              color="error.main"
            >
              $65,345
            </Typography>
          </Grid>
        </Grid>
        <Box
          display="flex"
          mt={2}
          mb={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="h5"
            fontWeight={400}
            color="text.secondary"
          >
            {t('Progress')}:
          </Typography>
          <Typography
            variant="h5"
            color="primary.main"
          >
            100%
          </Typography>
        </Box>
        <LinearProgressAlternate
          variant="determinate"
          value={49}
        />
      </Box>
      <Divider />
      <Box
        sx={{
          p: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">
            <Typography
              fontWeight={400}
              sx={{
                pr: 1,
              }}
              variant="h5"
              component="span"
              color="text.secondary"
            >
              #36
            </Typography>
            Gaming center
          </Typography>
          <Box
            display="flex"
            alignItems="center"
          >
            <Tooltip
              arrow
              title="Agnes Walker"
            >
              <Avatar
                sx={{
                  mr: 1,
                }}
                component={Link}
                href=""
                onClick={(e) => e.preventDefault()}
                alt="Agnes Walker"
                src="/avatars/4.png"
              />
            </Tooltip>
            <Tooltip
              title={t('Add more participants')}
              arrow
              placement="right"
            >
              <IconButtonWrapper size="small">
                <AddTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box
        p={{ xs: 2, sm: 3 }}
        sx={{
          textAlign: 'center',
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
        >
          <Grid
            xs={12}
            sm={6}
          >
            <Typography
              variant="h6"
              fontWeight={500}
              color="text.secondary"
            >
              {t('Users')}
            </Typography>
            <Typography variant="h3">765</Typography>
          </Grid>
          <Grid
            xs={12}
            sm={6}
          >
            <Typography
              variant="h6"
              fontWeight={500}
              color="text.secondary"
            >
              {t('Revenue')}
            </Typography>
            <Typography variant="h3">$34,654</Typography>
          </Grid>
        </Grid>
        <Box
          display="flex"
          mt={2}
          mb={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="h5"
            fontWeight={400}
            color="text.secondary"
          >
            {t('Progress')}:
          </Typography>
          <Typography
            variant="h5"
            color="primary.main"
          >
            100%
          </Typography>
        </Box>
        <LinearProgressAlternate
          variant="determinate"
          value={87}
        />
      </Box>
      <Divider />
      <Box
        sx={{
          p: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">
            <Typography
              fontWeight={400}
              sx={{
                pr: 1,
              }}
              variant="h5"
              component="span"
              color="text.secondary"
            >
              #37
            </Typography>
            2024 MUI Events
          </Typography>
          <Box
            display="flex"
            alignItems="center"
          >
            <Tooltip
              title={t('Add more participants')}
              arrow
              placement="right"
            >
              <IconButtonWrapper size="small">
                <AddTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box p={{ xs: 2, sm: 3 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
        >
          <Grid
            xs={12}
            sm={6}
          >
            <Typography variant="h2">45%</Typography>
            <LinearProgressAlternate
              color="error"
              sx={{
                my: 1,
              }}
              variant="determinate"
              value={45}
            />
            <Typography
              variant="body1"
              color="text.secondary"
            >
              {t('Seats')}
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={6}
          >
            <Typography variant="h2">87%</Typography>
            <LinearProgressAlternate
              color="success"
              sx={{
                my: 1,
              }}
              variant="determinate"
              value={87}
            />
            <Typography
              variant="body1"
              color="text.secondary"
            >
              {t('Participants')}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default Component;
