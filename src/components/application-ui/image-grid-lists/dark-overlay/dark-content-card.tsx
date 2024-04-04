import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  CardMedia,
  darken,
  Divider,
  Link,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { format, subDays } from 'date-fns';
import { useTranslation } from 'react-i18next';

const Label = styled(Box)(({ theme }) => ({
  background: theme.palette.success.main,
  color: theme.palette.success.contrastText,
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(13),
  fontWeight: 600,
  lineHeight: '23px',
  height: '22px',
  padding: theme.spacing(0, 1.2),
  borderRadius: '50px',
}));

const BgComposed = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 6,
  background: darken(alpha(theme.palette.secondary.main, 0.7), 0.8),
  boxShadow: `inset 0 0 4rem 1rem ${darken(theme.palette.secondary.main, 0.9)}`,
}));

function DarkContentCard() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <BgComposed
        sx={{
          p: { xs: 3, md: 4, lg: 6 },
        }}
      >
        <Box
          display="flex"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          justifyContent="space-between"
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          <Box
            display="flex"
            alignItems="center"
          >
            <Avatar
              sx={{
                width: 44,
                height: 44,
              }}
              src="/avatars/3.png"
            />

            <Box ml={1.5}>
              <Link
                href=""
                onClick={(e) => e.preventDefault()}
                variant="h5"
                sx={{
                  color: theme.palette.common.white,
                }}
                noWrap
              >
                Shanelle Wynn
              </Link>
              <Typography
                variant="subtitle2"
                noWrap
                sx={{
                  color: alpha(theme.palette.common.white, 0.8),
                }}
              >
                UI Engineer, Apple Inc.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            mt={{ xs: 3, md: 0 }}
          >
            <Label
              sx={{
                mr: 1,
                borderRadius: theme.shape.borderRadius,
                background: theme.palette.error.main,
                color: theme.palette.error.contrastText,
              }}
            >
              {t('Sales')}
            </Label>
            <Label
              sx={{
                borderRadius: theme.shape.borderRadius,
                background: theme.palette.success.main,
                color: theme.palette.success.contrastText,
              }}
            >
              {t('Deploys')}
            </Label>
          </Box>
        </Box>
        <Divider
          sx={{
            my: 3,
            borderColor: alpha(theme.palette.common.white, 0.1),
          }}
        />
        <Link
          href=""
          onClick={(e) => e.preventDefault()}
          underline="none"
          lineHeight={1.5}
          variant="h3"
          sx={{
            color: theme.palette.common.white,

            '&:hover': {
              color: alpha(theme.palette.common.white, 0.9),
            },
          }}
        >
          {t('Revolutionize Your Dashboard Experience')}
        </Link>
        <Typography
          variant="subtitle2"
          sx={{
            mt: 2,
            fontSize: theme.typography.pxToRem(16),
            color: alpha(theme.palette.common.white, 0.7),
          }}
        >
          {t(
            ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
          )}
          .
        </Typography>
        <Divider
          sx={{
            my: 3,
            borderColor: alpha(theme.palette.common.white, 0.1),
          }}
        />
        <Box
          display="flex"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          justifyContent="space-between"
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: alpha(theme.palette.common.white, 0.7),
              mb: { xs: 3, md: 0 },
            }}
          >
            <AccessTimeTwoToneIcon
              fontSize="small"
              sx={{
                opacity: 0.7,
                mr: 0.5,
              }}
            />
            {format(subDays(new Date(), 2), 'MMMM dd yyyy')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
          >
            {t('Read more')}
          </Button>
        </Box>
      </BgComposed>
      <CardMedia
        component="img"
        height="100%"
        width={'auto'}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          borderRadius: 'inherit',
          zIndex: 5,
        }}
        image="/placeholders/covers/3.jpg"
        alt="..."
      />
    </>
  );
}

export default DarkContentCard;
