import {
  alpha,
  Box,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Link,
  Typography,
} from '@mui/material';

const Component = () => {
  return (
    <Card>
      <CardHeader
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.50',
        }}
        title="Noise suppression"
        subheader="Choose Low if you want others to hear music."
        action={
          <Link
            href=""
            onClick={(e) => e.preventDefault()}
            underline="hover"
          >
            Learn more
          </Link>
        }
      />
      <Divider />
      <FormGroup
        sx={{
          flexWrap: 'nowrap',
        }}
        aria-labelledby="noise-suppression-checkbox-buttons-group-label"
      >
        <FormControlLabel
          sx={{
            pb: 2,
            px: 2,
            mr: 0,
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            },
          }}
          value="high"
          control={<Checkbox />}
          label={
            <Box pt={2}>
              <Typography variant="h6">High</Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                noWrap
              >
                Maximizes noise filtering to eliminate background sound.
              </Typography>
            </Box>
          }
          disableTypography
        />
        <Divider />
        <FormControlLabel
          value="low"
          sx={{
            pb: 2,
            px: 2,
            mr: 0,
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            },
          }}
          control={<Checkbox />}
          label={
            <Box pt={2}>
              <Typography variant="h6">Balanced</Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                noWrap
              >
                Reduces some noise while retaining natural ambient sounds.
              </Typography>
            </Box>
          }
          disableTypography
        />
        <Divider />
        <FormControlLabel
          sx={{
            pb: 2,
            px: 2,
            mr: 0,
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            },
          }}
          value="off"
          control={<Checkbox />}
          label={
            <Box pt={2}>
              <Typography variant="h6">Off</Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                noWrap
              >
                Turns off noise filtering for a natural sound environment.
              </Typography>
            </Box>
          }
          disableTypography
        />
      </FormGroup>
    </Card>
  );
};

export default Component;
