import {
  Box,
  Card,
  CardContent,
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
      <CardContent>
        <Box pb={2}>
          <Typography variant="h5">Noise suppression</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            Choose Low if you want others to hear music.{' '}
            <Link
              href=""
              onClick={(e) => e.preventDefault()}
              underline="hover"
            >
              Learn more
            </Link>
          </Typography>
        </Box>
        <Divider />
        <RadioGroup
          sx={{
            flexWrap: 'nowrap',
          }}
          aria-labelledby="noise-suppression-radio-buttons-group-label"
          name="noise-suppression-buttons-group"
        >
          <FormControlLabel
            value="high"
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
          <FormControlLabel
            value="low"
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
          <FormControlLabel
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
      </CardContent>
    </Card>
  );
};

export default Component;
