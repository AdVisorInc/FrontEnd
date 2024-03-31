import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Link,
  List,
  ListItem,
  ListItemText,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { formatDistance, subMinutes } from 'date-fns';
import { useTranslation } from 'react-i18next';
import GridGradientsNavigation from 'src/components/application-ui/vertical-menus/grid-gradients/grid-gradients-navigation';

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: theme.spacing(2.5),
  width: theme.spacing(2.5),
  height: theme.spacing(2.5),
  display: 'inline-block',
  border: `${theme.palette.background.paper} solid 2px`,
  position: 'relative',

  '&::after': {
    content: '" "',
    borderRadius: theme.spacing(1.1),
    position: 'absolute',
    width: theme.spacing(1.1),
    height: theme.spacing(1.1),
    top: theme.spacing(0.5),
    left: theme.spacing(0.5),
    background: theme.palette.common.white,
  },
}));

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 7,
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: 'relative',
      }}
    >
      <CardActions>
        <Checkbox />
      </CardActions>
      <Box
        p={{ xs: 2, sm: 3 }}
        display="flex"
        alignItems="center"
      >
        <Badge
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          overlap="rectangular"
          badgeContent={
            <Tooltip
              arrow
              placement="top"
              title={
                t('Idle since') +
                ' ' +
                formatDistance(subMinutes(new Date(), 42), new Date(), {
                  addSuffix: true,
                })
              }
            >
              <DotLegend style={{ background: theme.palette.warning.main }} />
            </Tooltip>
          }
        >
          <Avatar
            variant="rounded"
            sx={{
              width: 104,
              height: 104,
            }}
            src="/avatars/4.png"
          />
        </Badge>
        <Box ml={2.5}>
          <Link
            href=""
            onClick={(e) => e.preventDefault()}
            variant="h5"
          >
            Kris Alexander
          </Link>
          <Typography
            sx={{
              mb: 2,
            }}
            variant="subtitle2"
            color="text.secondary"
          >
            Project Manager, Apple Inc.
          </Typography>
          <Button
            size="small"
            variant="contained"
            color="primary"
          >
            {t('Chat')}
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            sx={{
              ml: 1,
            }}
          >
            {t('View')}
          </Button>
        </Box>
      </Box>
      <Card
        elevation={0}
        sx={{
          mx: 3,
          backgroundColor:
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[800], 0.12) : 'neutral.25',
        }}
      >
        <List dense>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                variant: 'subtitle2',
                fontWeight: 600,
                color: 'text.secondary',
              }}
              primary={t('Email') + ':'}
            />
            <Typography variant="subtitle2">russotry@russo.com</Typography>
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                variant: 'subtitle2',
                fontWeight: 600,
                color: 'text.secondary',
              }}
              primary={t('Job Description') + ':'}
            />
            <Typography variant="subtitle2">Project Manager</Typography>
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                variant: 'subtitle2',
                fontWeight: 600,
                color: 'text.secondary',
              }}
              primary={t('Location') + ':'}
            />
            <Typography variant="subtitle2">San Francisco, USA</Typography>
          </ListItem>
        </List>
      </Card>
      <Box p={{ xs: 2, sm: 3 }}>
        <GridGradientsNavigation />
      </Box>
    </Card>
  );
}

export default Component;
