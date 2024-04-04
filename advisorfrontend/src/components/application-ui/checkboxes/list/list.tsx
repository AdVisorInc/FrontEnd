import {
  Box,
  Card,
  CardContent,
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
      <CardContent>
        <Box>
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
        <Divider sx={{ my: 2 }} />
        <FormGroup
          sx={{
            flexWrap: 'nowrap',
          }}
          aria-labelledby="noise-suppression-checkbox-buttons-group-label"
        >
          <FormControlLabel
            value="high"
            control={<Checkbox />}
            label={
              <>
                <Typography
                  variant="h6"
                  lineHeight={1}
                >
                  High
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ pl: 1 }}
                  color="text.secondary"
                  noWrap
                >
                  Maximizes noise filtering to eliminate background sound.
                </Typography>
              </>
            }
            disableTypography
          />
          <FormControlLabel
            value="low"
            control={<Checkbox />}
            label={
              <>
                <Typography
                  variant="h6"
                  lineHeight={1}
                >
                  Balanced
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ pl: 1 }}
                  color="text.secondary"
                  noWrap
                >
                  Reduces some noise while retaining natural ambient sounds.
                </Typography>
              </>
            }
            disableTypography
          />
          <FormControlLabel
            value="off"
            control={<Checkbox />}
            label={
              <>
                <Typography
                  variant="h6"
                  lineHeight={1}
                >
                  Off
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ pl: 1 }}
                  color="text.secondary"
                  noWrap
                >
                  Turns off noise filtering for a natural sound environment.
                </Typography>
              </>
            }
            disableTypography
          />
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default Component;
