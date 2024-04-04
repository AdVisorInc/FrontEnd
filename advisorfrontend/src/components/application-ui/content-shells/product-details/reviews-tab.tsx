import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import RateReviewTwoToneIcon from '@mui/icons-material/RateReviewTwoTone';
import ThumbDownTwoToneIcon from '@mui/icons-material/ThumbDownTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Unstable_Grid2 as Grid,
  List,
  ListItem,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';

function ReviewsTab() {
  const { t } = useTranslation();

  return (
    <>
      <Grid container>
        <Grid
          xs={12}
          md={6}
          sm={7}
          position="relative"
        >
          <Box
            component="span"
            sx={{
              display: { xs: 'none', md: 'inline-block' },
            }}
          >
            <Divider
              absolute
              sx={{
                width: 1,
                height: '100%',
                left: 'auto',
                right: 0,
              }}
              orientation="vertical"
              flexItem
            />
          </Box>
          <Box p={{ xs: 2, sm: 3 }}>
            <Typography variant="h3">
              {t('Customer Reviews')}{' '}
              <Typography
                component="span"
                variant="h4"
              >
                (75)
              </Typography>
            </Typography>

            <List>
              <ListItem disableGutters>
                <Box
                  sx={{
                    minWidth: 40,
                    textAlign: 'right',
                  }}
                >
                  <Typography variant="h5">5 {t('stars')}</Typography>
                </Box>
                <Box
                  px={2}
                  flexGrow={1}
                >
                  <LinearProgressSlim
                    value={84}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 40,
                    textAlign: 'right',
                  }}
                >
                  <Typography variant="h4">84%</Typography>
                </Box>
              </ListItem>
              <ListItem disableGutters>
                <Box
                  sx={{
                    minWidth: 40,
                    textAlign: 'right',
                  }}
                >
                  <Typography variant="h5">4 {t('stars')}</Typography>
                </Box>
                <Box
                  px={2}
                  flexGrow={1}
                >
                  <LinearProgressSlim
                    value={7}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 40,
                    textAlign: 'right',
                  }}
                >
                  <Typography variant="h4">7%</Typography>
                </Box>
              </ListItem>
              <ListItem disableGutters>
                <Box
                  sx={{
                    minWidth: 40,
                    textAlign: 'right',
                  }}
                >
                  <Typography variant="h5">3 {t('stars')}</Typography>
                </Box>
                <Box
                  px={2}
                  flexGrow={1}
                >
                  <LinearProgressSlim
                    value={5}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 40,
                    textAlign: 'right',
                  }}
                >
                  <Typography variant="h4">5%</Typography>
                </Box>
              </ListItem>
              <ListItem disableGutters>
                <Box
                  sx={{
                    minWidth: 40,
                    textAlign: 'right',
                  }}
                >
                  <Typography variant="h5">2 {t('stars')}</Typography>
                </Box>
                <Box
                  px={2}
                  flexGrow={1}
                >
                  <LinearProgressSlim
                    value={3}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 40,
                    textAlign: 'right',
                  }}
                >
                  <Typography variant="h4">3%</Typography>
                </Box>
              </ListItem>
              <ListItem disableGutters>
                <Box
                  sx={{
                    minWidth: 40,
                    textAlign: 'right',
                  }}
                >
                  <Typography variant="h5">1 {t('star')}</Typography>
                </Box>
                <Box
                  px={2}
                  flexGrow={1}
                >
                  <LinearProgressSlim
                    value={1}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box
                  sx={{
                    minWidth: 40,
                    textAlign: 'right',
                  }}
                >
                  <Typography variant="h4">1%</Typography>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={6}
          sm={5}
        >
          <Box
            p={{ xs: 2, sm: 3 }}
            flex={1}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 51,
                }}
                variant="h1"
              >
                4.5/5
              </Typography>
            </Box>
            <Box py={2}>
              <Rating
                size="large"
                value={4.5}
                precision={0.5}
                readOnly
              />
            </Box>
            <Tooltip
              placement="top"
              arrow
              title={t('Only verified customers can write reviews')}
            >
              <Box component="span">
                <Button
                  disabled
                  startIcon={<RateReviewTwoToneIcon />}
                  variant="contained"
                  size="large"
                >
                  {t('Write review')}
                </Button>
              </Box>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <List>
        <ListItem
          sx={{
            display: { xs: 'block', sm: 'flex' },
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            sx={{
              minWidth: { xs: 0, sm: 180, md: 210 },
              pb: { xs: 2, sm: 0 },
            }}
          >
            <Avatar src="/avatars/5.png" />
            <Typography
              sx={{
                my: 1,
              }}
              variant="h5"
            >
              Brook Holding
            </Typography>
            <ReactCountryFlag
              style={{
                width: '2.6em',
                height: '2.6em',
              }}
              countryCode="US"
              svg
            />
          </Box>
          <Box flex={1}>
            <Typography
              sx={{
                mb: { xs: 2, sm: 3 },
              }}
            >
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
              molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              flexDirection={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
            >
              <Box
                display="flex"
                alignItems="center"
              >
                <AvatarState
                  isSoft
                  state="success"
                  sx={{
                    mr: 1,
                  }}
                >
                  <CheckTwoToneIcon />
                </AvatarState>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mr: { xs: 1, md: 3 },
                  }}
                  noWrap
                  fontWeight={400}
                  color="success.main"
                >
                  {t('Verified purchase')}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.primary"
                >
                  21 July 2021
                </Typography>
              </Box>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                  pt: { xs: 2, md: 0 },
                }}
              >
                <Typography
                  sx={{
                    pr: 1,
                  }}
                  component="span"
                >
                  {t('Helpful')}?
                </Typography>
                <ButtonSoft
                  sx={{ minWidth: 0, p: 1 }}
                  color="success"
                  size="small"
                >
                  <ThumbUpTwoToneIcon fontSize="small" />
                </ButtonSoft>
                <ButtonSoft
                  sx={{ minWidth: 0, p: 1 }}
                  color="error"
                  size="small"
                >
                  <ThumbDownTwoToneIcon fontSize="small" />
                </ButtonSoft>
              </Stack>
            </Box>
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            display: { xs: 'block', sm: 'flex' },
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            sx={{
              minWidth: { xs: 0, sm: 180, md: 210 },
              pb: { xs: 2, sm: 0 },
            }}
          >
            <Avatar src="/avatars/4.png" />
            <Typography
              sx={{
                my: 1,
              }}
              variant="h5"
            >
              Emerson Bothman
            </Typography>
            <ReactCountryFlag
              style={{
                width: '2.6em',
                height: '2.6em',
              }}
              countryCode="DE"
              svg
            />
          </Box>
          <Box flex={1}>
            <Typography
              sx={{
                mb: { xs: 2, sm: 3 },
              }}
            >
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
              molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              flexDirection={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
            >
              <Box
                display="flex"
                alignItems="center"
              >
                <AvatarState
                  isSoft
                  state="success"
                  sx={{
                    mr: 1,
                  }}
                >
                  <CheckTwoToneIcon />
                </AvatarState>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mr: { xs: 1, md: 3 },
                  }}
                  noWrap
                  fontWeight={400}
                  color="success.main"
                >
                  {t('Verified purchase')}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.primary"
                >
                  20 March 2021
                </Typography>
              </Box>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                  pt: { xs: 2, md: 0 },
                }}
              >
                <Typography
                  sx={{
                    pr: 1,
                  }}
                  component="span"
                >
                  {t('Helpful')}?
                </Typography>
                <ButtonSoft
                  sx={{ minWidth: 0, p: 1 }}
                  color="success"
                  size="small"
                >
                  <ThumbUpTwoToneIcon fontSize="small" />
                </ButtonSoft>
                <ButtonSoft
                  sx={{ minWidth: 0, p: 1 }}
                  color="error"
                  size="small"
                >
                  <ThumbDownTwoToneIcon fontSize="small" />
                </ButtonSoft>
              </Stack>
            </Box>
          </Box>
        </ListItem>
      </List>
    </>
  );
}

export default ReviewsTab;
