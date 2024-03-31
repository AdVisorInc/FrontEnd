import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemText,
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

function Component1() {
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
        <IconButton
          size="small"
          color="primary"
        >
          <MoreHorizTwoToneIcon />
        </IconButton>
      </CardActions>
      <Box
        mb={2}
        display="flex"
        alignItems="center"
      >
        <Badge
          color="success"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          badgeContent="24"
          overlap="circular"
        >
          <Avatar
            variant="rounded"
            sx={{
              fontSize: theme.typography.pxToRem(16),
              background: theme.palette.common.black,
              color: theme.palette.common.white,
              borderRadius: theme.shape.borderRadius,
              width: 95,
              height: 95,
            }}
          >
            SS
          </Avatar>
        </Badge>
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
            Stevie Sharp
          </Link>
          <Typography
            gutterBottom
            variant="subtitle2"
            color="text.secondary"
          >
            UX Developer
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            sx={{
              width: '100%',
            }}
          >
            <LinearProgress
              color="primary"
              sx={{
                minWidth: 65,
                width: '100%',
              }}
              variant="determinate"
              value={39}
            />
            <Typography
              sx={{
                pl: 1,
              }}
              fontWeight={700}
              variant="body1"
              textAlign="right"
            >
              +39%
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
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
      <List
        disablePadding
        sx={{
          my: 1.5,
        }}
      >
        <ListItem disableGutters>
          <ListItemText
            primaryTypographyProps={{
              variant: 'subtitle2',
              fontWeight: 500,
              color: 'text.secondary',
            }}
            primary={t('Email') + ':'}
          />
          <Typography variant="subtitle2">russotry@russo.com</Typography>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primaryTypographyProps={{
              variant: 'subtitle2',
              fontWeight: 500,
              color: 'text.secondary',
            }}
            primary={t('Job Description') + ':'}
          />
          <Typography variant="subtitle2">Project Manager</Typography>
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primaryTypographyProps={{
              variant: 'subtitle2',
              fontWeight: 500,
              color: 'text.secondary',
            }}
            primary={t('Location') + ':'}
          />
          <Typography variant="subtitle2">San Francisco, USA</Typography>
        </ListItem>
      </List>
      <Divider
        sx={{
          mb: 3,
        }}
      />
      <Button
        fullWidth
        variant="text"
        color="primary"
        sx={{
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          textTransform: 'uppercase',
          py: 1,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        }}
      >
        {t('View complete profile')}
      </Button>
    </Card>
  );
}

export default Component1;
