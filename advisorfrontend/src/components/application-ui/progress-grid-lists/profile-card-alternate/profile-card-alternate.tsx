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
  Skeleton,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import {RootState, useSelector} from "../../../../store";
import {format, parseISO} from "date-fns";
import { RouterLink } from 'src/components/base/router-link';
import {routes} from "../../../../router/routes";

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

function UserProfileCard() {
  const { t } = useTranslation();
  const theme = useTheme();
  const { isLoaded, data: userProfile } = useSelector((state: RootState) => state.userProfile);

  const calculateProfileCompleteness = () => {
    if (!userProfile) return 0;
    const requiredFields = ['first_name', 'last_name', 'email', 'date_of_birth', 'address'];
    const completedFields = requiredFields.filter((field) => userProfile[field]);
    return Math.round((completedFields.length / requiredFields.length) * 100);
  };
  const formatDateOfBirth = (dateString: string) => {
    if (!dateString) return 'Not specified';
    const date = parseISO(dateString);
    return format(date, 'MMMM d, yyyy');
  };

  const profileCompleteness = calculateProfileCompleteness();

  return (
    <Card
      sx={{
        position: 'relative',
        p: { xs: 3, sm: 8 },
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
        {isLoaded ? (
          <Avatar
            variant="rounded"
            sx={{
              width: 95,
              height: 95,
            }}
            src={userProfile?.avatar_url || '/avatars/default.png'}
          />
        ) : (
          <Skeleton variant="rounded" width={95} height={95} />
        )}
        <Box
          sx={{
            width: '100%',
          }}
          ml={1.5}
        >
          {isLoaded ? (
            <>
              <Link
                component={RouterLink}
                href={routes.blueprints["generic-admin-dashboard"].management.users.profile}
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
                {userProfile?.first_name} {userProfile?.last_name}
              </Link>
              <Typography
                gutterBottom
                variant="subtitle2"
                color="text.secondary"
              >
                {userProfile?.role || 'Not specified'}
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
                  value={profileCompleteness}
                />
                <Typography
                  sx={{
                    pl: 1,
                  }}
                  fontWeight={700}
                  variant="body1"
                  textAlign="right"
                >
                  {profileCompleteness}%
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Profile Completeness
              </Typography>
            </>
          ) : (
            <>
              <Skeleton variant="text" width="40%" height={32} />
              <Skeleton variant="text" width="30%" height={24} />
              <Box
                display="flex"
                alignItems="center"
                flex={1}
                sx={{
                  width: '100%',
                }}
              >
                <Skeleton variant="rectangular" width="100%" height={8} />
              </Box>
              <Skeleton variant="text" width="20%" height={16} />
            </>
          )}
        </Box>
      </Box>
      {isLoaded ? (
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          {userProfile?.description || 'No description provided'}
        </Typography>
      ) : (
        <Skeleton variant="text" width="100%" height={16} />
      )}
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
            {isLoaded ? (
              <Typography variant="subtitle2">{userProfile?.email || 'Not specified'}</Typography>
            ) : (
              <Skeleton variant="text" width={120} height={24} />
            )}
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                variant: 'h6',
              }}
              primary={t('Location') + ':'}
            />
            {isLoaded ? (
              <Typography variant="subtitle2">{userProfile?.address?.description || 'Not specified'}</Typography>
            ) : (
              <Skeleton variant="text" width={120} height={24} />
            )}
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                variant: 'h6',
              }}
              primary={t('Date of Birth') + ':'}
            />
            {isLoaded ? (
              <Typography variant="subtitle2">
                {formatDateOfBirth(userProfile?.date_of_birth || '')}
              </Typography>
            ) : (
              <Skeleton variant="text" width={120} height={24} />
            )}
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
        component={RouterLink}
        href={routes.blueprints["generic-admin-dashboard"].management.users.profile}
      >
        {t('View complete profile')}
      </Button>
    </Card>
  );
}

export default UserProfileCard;
