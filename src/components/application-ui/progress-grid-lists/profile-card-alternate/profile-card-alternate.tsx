import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  Link,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const LinearProgressSuccess = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: theme.shape.borderRadius,

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: alpha(theme.palette.success.main, 0.1),
  },

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.success.main,
  },
}));

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1.5),
  top: theme.spacing(1.5),
  zIndex: 7,
}));

function Component0() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: 'relative',
        p: { xs: 2, sm: 3 },
      }}
    >
      <CardActions>
        <IconButton color="primary">
          <MoreHorizTwoToneIcon />
        </IconButton>
      </CardActions>
      <Box
        mb={2}
        display="flex"
        alignItems="center"
      >
        <Avatar
          variant="rounded"
          sx={{
            width: 95,
            height: 95,
          }}
          src="/avatars/3.png"
        />
        <Box
          sx={{
            width: '100%',
          }}
          ml={1.5}
        >
          <Link
            href=""
            onClick={(e) => e.preventDefault()}
            color="text.primary"
            underline="none"
            sx={{
              transition: theme.transitions.create(['color']),
              fontSize: theme.typography.pxToRem(17),

              '&:hover': {
                color: theme.palette.primary.main,
              },
            }}
            variant="h5"
          >
            Kate Winchester
          </Link>
          <Typography
            gutterBottom
            variant="subtitle2"
            color="text.secondary"
          >
            Freelance Designer, Mutual Inc.
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            sx={{
              width: '100%',
            }}
          >
            <LinearProgressSuccess
              sx={{
                minWidth: 65,
                width: '100%',
              }}
              variant="determinate"
              value={63}
            />
            <Typography
              sx={{
                pl: 1,
              }}
              fontWeight={700}
              variant="body1"
              textAlign="right"
            >
              +63%
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        variant="subtitle2"
        color="text.secondary"
      >
        {t(
          ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
        )}
        .
      </Typography>
      <Card
        elevation={0}
        sx={{
          mt: 2,
          mb: 3,
          background: theme.palette.background.default,
        }}
      >
        <List dense>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                variant: 'h6',
              }}
              primary={t('Email') + ':'}
            />
            <Typography variant="subtitle2">russotry@russo.com</Typography>
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                variant: 'h6',
              }}
              primary={t('Job Description') + ':'}
            />
            <Typography variant="subtitle2">Project Manager</Typography>
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                variant: 'h6',
              }}
              primary={t('Location') + ':'}
            />
            <Typography variant="subtitle2">San Francisco, USA</Typography>
          </ListItem>
        </List>
      </Card>
      <Button
        fullWidth
        variant="text"
        color="success"
        sx={{
          backgroundColor: alpha(theme.palette.success.main, 0.05),
          textTransform: 'uppercase',
          py: 1.5,
          '&:hover': {
            backgroundColor: alpha(theme.palette.success.main, 0.15),
            color: theme.palette.success.main,
          },
        }}
      >
        {t('View complete profile')}
      </Button>
    </Card>
  );
}

export default Component0;
