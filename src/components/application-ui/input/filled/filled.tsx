import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import {
  alpha,
  Button,
  Card,
  CardContent,
  Divider,
  FilledInput,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Unstable_Grid2 as Grid,
  InputAdornment,
  InputLabel,
  Typography,
} from '@mui/material';

const Component = () => {
  return (
    <Card>
      <FormGroup>
        <FormLabel
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
            p: 2,
          }}
          htmlFor="name-input"
        >
          <Typography
            variant="h5"
            color="text.primary"
          >
            User details
          </Typography>
          <Typography variant="subtitle2">Add the information you see fit</Typography>
        </FormLabel>
        <Divider sx={{ mb: 2 }} />
        <CardContent sx={{ py: 0 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
          >
            <Grid
              xs={12}
              md={6}
            >
              <FormControl fullWidth>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="name-input"
                  fontWeight={500}
                >
                  Name
                </Typography>

                <FilledInput
                  id="name-input"
                  hiddenLabel
                  placeholder="Write your name"
                />
              </FormControl>
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <FormControl
                fullWidth
                disabled
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="company-input"
                  fontWeight={500}
                >
                  Company
                  <Typography
                    component="span"
                    fontWeight={400}
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ pl: 0.5 }}
                  >
                    (Disabled)
                  </Typography>
                </Typography>

                <FilledInput
                  id="company-input"
                  hiddenLabel
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl
                margin="none"
                size="small"
                fullWidth
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="email-input"
                  fontWeight={500}
                >
                  Email
                </Typography>
                <FilledInput
                  type="email"
                  hiddenLabel
                  id="email-input"
                  placeholder="Write your email"
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineRoundedIcon fontSize="small" />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl
                margin="none"
                size="small"
                fullWidth
                error
                required
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="validation-input"
                  fontWeight={500}
                >
                  Validation
                  <Typography
                    component="span"
                    color="error.main"
                  >
                    {' '}
                    *
                  </Typography>
                </Typography>
                <FilledInput
                  hiddenLabel
                  id="validation-input"
                  type="email"
                  placeholder="Write your email"
                />
                <FormHelperText>You need to add a valid email address</FormHelperText>
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <Divider />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <FormControl
                margin="none"
                fullWidth
                required
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="price-input"
                  fontWeight={500}
                >
                  Website
                  <Typography
                    component="span"
                    color="text.secondary"
                  >
                    {' '}
                    *
                  </Typography>
                </Typography>
                <FilledInput
                  id="price-input"
                  type="text"
                  hiddenLabel
                  placeholder="example.com"
                  startAdornment={
                    <InputAdornment position="start">
                      <Typography
                        variant="h6"
                        color="text.primary"
                        lineHeight={1}
                      >
                        https://
                      </Typography>
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <Divider
                        sx={{ ml: 1 }}
                        orientation="vertical"
                        flexItem
                      />
                      <Button
                        size="small"
                        color="secondary"
                        variant="outlined"
                      >
                        Change
                      </Button>
                    </InputAdornment>
                  }
                />
                <FormHelperText>Composed input with text/select adornments</FormHelperText>
              </FormControl>
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <FormControl
                margin="none"
                fullWidth
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="members-input"
                  fontWeight={500}
                >
                  Members
                </Typography>
                <FilledInput
                  id="members-input"
                  type="text"
                  hiddenLabel
                  placeholder="Members"
                  sx={{
                    pr: 0.5,
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <PeopleOutlineRoundedIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <Divider
                        sx={{ ml: 1 }}
                        orientation="vertical"
                        flexItem
                      />
                      <Button startIcon={<SortRoundedIcon />}>Sort</Button>
                    </InputAdornment>
                  }
                />
                <FormHelperText>Composed input with button/icon adornments</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </FormGroup>
      <Divider />
      <CardContent sx={{ pb: 0 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
        >
          <Grid
            xs={12}
            md={6}
          >
            <FormControl
              fullWidth
              variant="filled"
            >
              <InputLabel htmlFor="name-input-alt">Name</InputLabel>

              <FilledInput
                id="name-input-alt"
                placeholder="Write your name"
              />
            </FormControl>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <FormControl
              fullWidth
              variant="filled"
              error
            >
              <InputLabel htmlFor="email-input-alt">Email</InputLabel>

              <FilledInput
                id="email-input-alt"
                placeholder="Write your email"
              />
            </FormControl>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <FormControl
              fullWidth
              variant="filled"
              size="small"
            >
              <InputLabel htmlFor="username-input">Username</InputLabel>

              <FilledInput
                id="username-input"
                placeholder="Write your username"
              />
            </FormControl>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <FormControl
              fullWidth
              variant="filled"
              size="small"
              disabled
            >
              <InputLabel htmlFor="company-disabled-input-alt">
                Company
                <Typography
                  component="span"
                  fontWeight={400}
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ pl: 0.5 }}
                >
                  (Disabled)
                </Typography>
              </InputLabel>

              <FilledInput
                id="company-disabled-input-alt"
                placeholder="Write your name"
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Component;
