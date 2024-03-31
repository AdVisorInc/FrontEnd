import {
  Box,
  Card,
  CardContent,
  FormControlLabel,
  Link,
  Radio,
  RadioGroup,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Card>
      <CardContent>
        <Box pb={1}>
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
        <RadioGroup
          row={smUp}
          aria-labelledby="noise-suppression-radio-buttons-group-label"
          name="noise-suppression-buttons-group"
        >
          <FormControlLabel
            value="high"
            control={<Radio />}
            label="High"
          />
          <FormControlLabel
            value="low"
            control={<Radio />}
            label="Balanced"
          />
          <FormControlLabel
            value="off"
            control={<Radio />}
            label="Off"
          />
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default Component;
