import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
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
        <FormGroup
          row={smUp}
          aria-labelledby="noise-suppression-checkbox-buttons-group-label"
        >
          <FormControlLabel
            value="high"
            control={<Checkbox />}
            label="High"
          />
          <FormControlLabel
            value="low"
            control={<Checkbox />}
            label="Balanced"
          />
          <FormControlLabel
            value="not_decided"
            control={<Checkbox indeterminate />}
            label="Not decided"
          />
          <FormControlLabel
            value="off"
            disabled
            control={<Checkbox />}
            label="Off"
          />
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default Component;
