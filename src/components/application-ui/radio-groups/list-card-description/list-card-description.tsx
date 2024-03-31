import {
  alpha,
  Box,
  Card,
  CardHeader,
  Divider,
  FormControlLabel,
  Link,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

const Component = () => {
  return (
    <Card>
      <CardHeader
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
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
      <RadioGroup
        sx={{
          flexWrap: 'nowrap',
        }}
        aria-labelledby="noise-suppression-radio-buttons-group-label"
        name="noise-suppression-buttons-group"
      >
        <FormControlLabel
          value="high"
          sx={{ pb: 2, px: 2, mr: 0 }}
          control={<Radio />}
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
          sx={{ pb: 2, px: 2, mr: 0 }}
          control={<Radio />}
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
          sx={{ pb: 2, px: 2, mr: 0 }}
          value="off"
          control={<Radio />}
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
      </RadioGroup>
    </Card>
  );
};

export default Component;
