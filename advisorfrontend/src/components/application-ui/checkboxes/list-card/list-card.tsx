import {
  alpha,
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
      <FormGroup
        sx={{
          flexWrap: 'nowrap',
        }}
        aria-labelledby="noise-suppression-checkbox-buttons-group-label"
      >
        <FormControlLabel
          value="high"
          sx={{ py: 1, px: 2, mr: 0 }}
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
        <Divider />
        <FormControlLabel
          value="low"
          sx={{ py: 1, px: 2, mr: 0 }}
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
        <Divider />
        <FormControlLabel
          sx={{ py: 1, px: 2, mr: 0 }}
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
    </Card>
  );
};

export default Component;
