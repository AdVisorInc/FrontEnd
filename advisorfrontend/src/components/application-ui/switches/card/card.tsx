import { InfoRounded } from '@mui/icons-material';
import {
  alpha,
  Box,
  Card,
  FormControlLabel,
  Link,
  Stack,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material';

const Component = () => {
  return (
    <Stack spacing={{ xs: 2, sm: 3 }}>
      <Card sx={{ width: '100%' }}>
        <FormControlLabel
          sx={{
            width: '100%',
            mx: 0,
            p: 2,
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            },
            flexDirection: 'row-reverse',
          }}
          value="high"
          control={<Switch />}
          label={
            <Box
              width="100%"
              overflow="hidden"
            >
              <Stack
                spacing={0.5}
                direction="row"
                alignItems="center"
              >
                <Typography variant="h6">Spatial audio</Typography>
                <Tooltip
                  title="Apply a smooth effect to your appearance."
                  arrow
                  placement="top"
                >
                  <InfoRounded
                    fontSize="small"
                    sx={{
                      color: 'neutral.400',
                      '&:hover': {
                        color: 'neutral.600',
                      },
                    }}
                  />
                </Tooltip>
              </Stack>
              <Typography
                variant="body1"
                color="text.secondary"
              >
                More immersive sound in meetings. Available with{' '}
                <Typography
                  component="span"
                  fontWeight={500}
                >
                  Together Mode
                </Typography>
                ,{' '}
                <Typography
                  component="span"
                  fontWeight={500}
                >
                  Gallery
                </Typography>{' '}
                and{' '}
                <Typography
                  component="span"
                  fontWeight={500}
                >
                  Speaker
                </Typography>{' '}
                views.
              </Typography>
            </Box>
          }
          disableTypography
        />
      </Card>
      <Card sx={{ width: '100%' }}>
        <FormControlLabel
          sx={{
            width: '100%',
            mx: 0,
            p: 2,
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            },
            flexDirection: 'row-reverse',
          }}
          value="high"
          control={<Switch />}
          label={
            <Box
              width="100%"
              overflow="hidden"
            >
              <Typography variant="h6">High fidelity music mode</Typography>
              <Typography
                variant="body1"
                color="text.secondary"
              >
                Show the option in meeting to deliver high fidelity sound.{' '}
                <Link
                  href=""
                  underline="hover"
                  onClick={(e) => e.preventDefault()}
                >
                  Learn more
                </Link>
              </Typography>
            </Box>
          }
          disableTypography
        />
      </Card>
    </Stack>
  );
};

export default Component;
