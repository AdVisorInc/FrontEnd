import {
  alpha,
  Box,
  Card,
  CardContent,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Switch,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const icons = [
    {
      label: 'Visibility',
      color: 'primary',
      position: 'top',
    },
    {
      label: 'Favorites',
      color: 'warning',
      position: 'end',
    },
    {
      label: 'Bookmarks',
      color: 'success',
      position: 'bottom',
    },
    {
      label: 'Help',
      color: 'error',
      position: 'start',
    },
  ];

  return (
    <Card
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
      }}
    >
      <CardContent>
        <Box pb={2}>
          <Typography variant="h5">App Features</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            Explore the various features of our application.{' '}
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
          sx={{
            backgroundColor: 'background.paper',
          }}
          row={smUp}
          aria-labelledby="checkbox-buttons-group-label"
        >
          <Grid
            container
            alignItems="center"
            sx={{
              '--Grid-borderWidth': '1px',
              borderTop: 'var(--Grid-borderWidth) solid',
              borderLeft: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',
              '& > div': {
                borderRight: 'var(--Grid-borderWidth) solid',
                borderBottom: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
              },
            }}
          >
            {icons.map((iconInfo) => (
              <Grid
                xs={12}
                sm={6}
                item
                key={iconInfo.label}
              >
                <Box
                  p={{ xs: 2, sm: 3 }}
                  minHeight={130}
                  display="flex"
                  justifyContent="center"
                >
                  <FormControlLabel
                    //@ts-ignore
                    labelPlacement={iconInfo.position}
                    control={
                      <Switch
                        //@ts-ignore
                        color={iconInfo.color}
                      />
                    }
                    label={iconInfo.label}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default Component;
