import AlarmTwoToneIcon from '@mui/icons-material/AlarmTwoTone';
import BalconyTwoToneIcon from '@mui/icons-material/BalconyTwoTone';
import DirectionsCarTwoToneIcon from '@mui/icons-material/DirectionsCarTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  CardActionArea,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { ButtonLight } from 'src/components/base/styles/button';
import { DividerLight } from 'src/components/base/styles/card';

const CardHover = styled(Card)(({ theme }) => ({
  transform: 'scale(1)',
  transition: theme.transitions.create(['transform']),

  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

function Component() {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important',
            color: theme.palette.primary.contrastText,
          }}
        >
          <CardActionArea
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column',
              p: { xs: 2, sm: 3 },
            }}
            component="div"
          >
            <Avatar
              sx={{
                mr: 3,
                mb: 3,
                width: 62,
                height: 62,
                color: theme.palette.warning.main,
                background: theme.palette.warning.contrastText,
              }}
            >
              <DirectionsCarTwoToneIcon
                sx={{
                  fontSize: theme.typography.pxToRem(30),
                }}
              />
            </Avatar>
            <Box>
              <Typography
                sx={{
                  pb: 1.5,
                  color: theme.palette.primary.contrastText,
                }}
                variant="h4"
              >
                MacBook Pro
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                  color: alpha(theme.palette.primary.contrastText, 0.8),
                }}
              >
                You can build unlimited layout styles using any of the 500+ included components and
                elements.
              </Typography>
              <DividerLight sx={{ my: 3 }} />
              <ButtonLight>Learn more</ButtonLight>
            </Box>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <CardHover
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            p: { xs: 2, sm: 3 },
            background:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.common.white, 0.3)
                : theme.palette.common.black,
            color: theme.palette.common.white,
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              mr: 3,
              mb: 3,
              width: 62,
              height: 62,
              color: theme.palette.common.black,
              background: theme.palette.common.white,
            }}
          >
            <AlarmTwoToneIcon
              sx={{
                fontSize: theme.typography.pxToRem(30),
              }}
            />
          </Avatar>
          <Box>
            <Typography
              sx={{
                pb: 1.5,
                color: theme.palette.primary.contrastText,
              }}
              variant="h4"
            >
              iPhone 15 Pro
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                lineHeight: 1.8,
                color: alpha(theme.palette.primary.contrastText, 0.8),
              }}
            >
              You can build unlimited layout styles using any of the 500+ included components and
              elements.
            </Typography>
            <DividerLight sx={{ my: 3 }} />
            <ButtonLight>Learn more</ButtonLight>
          </Box>
        </CardHover>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            p: { xs: 2, sm: 3 },
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          <Avatar
            sx={{
              mr: 3,
              mb: 3,
              width: 62,
              height: 62,
              color: theme.palette.primary.main,
              background: theme.palette.primary.contrastText,
            }}
          >
            <BalconyTwoToneIcon
              sx={{
                fontSize: theme.typography.pxToRem(30),
              }}
            />
          </Avatar>
          <Box>
            <Typography
              sx={{
                pb: 1.5,
                color: theme.palette.primary.contrastText,
              }}
              variant="h4"
            >
              Apple Watch 12
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                lineHeight: 1.8,
                color: alpha(theme.palette.primary.contrastText, 0.8),
              }}
            >
              You can build unlimited layout styles using any of the 500+ included components and
              elements.
            </Typography>
            <DividerLight sx={{ my: 3 }} />
            <ButtonLight>Learn more</ButtonLight>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
