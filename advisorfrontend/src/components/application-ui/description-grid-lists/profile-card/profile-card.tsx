import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import {
  Avatar,
  Box,
  Card,
  Chip,
  Divider,
  IconButton,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1.5),
  top: theme.spacing(1.5),
  zIndex: 7,
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: 'relative',
        textAlign: 'center',
        p: { xs: 2, md: 4 },
      }}
    >
      <CardActions>
        <IconButton color="primary">
          <MoreHorizTwoToneIcon />
        </IconButton>
      </CardActions>
      <Avatar
        sx={{
          mx: 'auto',
          mb: 1.5,
          width: 114,
          height: 114,
          border: `${theme.palette.common.white} solid 4px`,
          boxShadow: `0 0 0 3px ${theme.palette.error.main}`,
        }}
        src="/avatars/2.png"
      />
      <Typography variant="h4">Marion Devine</Typography>

      <Stack
        py={2}
        gap={1}
        direction="row"
        flexWrap={{ xs: 'wrap', md: 'nowrap' }}
        justifyContent="center"
      >
        <Chip
          label="Web developer"
          color="info"
        />

        <Chip
          label="Typescript"
          color="warning"
        />
        <Chip
          label="React"
          color="error"
        />
      </Stack>
      <Typography
        sx={{
          px: { xs: 0, md: 4 },
        }}
        variant="subtitle1"
        color="text.secondary"
      >
        {t(
          ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
        )}
        .
      </Typography>
      <Divider
        sx={{
          mt: 3,
        }}
      />
      <Stack
        sx={{
          mt: 2.5,
          textAlign: 'center',
        }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Box>
          <Typography variant="h4">86%</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Profile completion')}
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Typography variant="h4">$19,495</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Lifetime earnings')}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4">174</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Projects completed')}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}

export default Component;
