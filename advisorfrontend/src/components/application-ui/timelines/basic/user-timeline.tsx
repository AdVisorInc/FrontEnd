import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Box, Button, Card, CardActionArea, CardMedia, Chip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {RootState, useSelector} from 'src/store';
import {
  AddCircleOutline,
  Campaign,
  Delete,
  Edit,
  Group,
  Pause,
  Person,
  PhotoCamera,
  RemoveCircleOutline,
} from '@mui/icons-material';

const TimelineBasic = () => {
  const { t } = useTranslation();
  const activities = useSelector((state: RootState) => state.userActivity.activities);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderActivityContent = (activity: any) => {
    switch (activity.activity_type) {
      case 'organization_created':
        return (
          <>
            <Typography variant="h5">
              <Campaign sx={{ mr: 1, verticalAlign: 'middle' }} />
              {t('Organization Created')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('You created a new organization named "{{organizationName}}".', { organizationName: activity.metadata.organization_name })}
            </Typography>
          </>
        );
      case 'campaign_created':
        return (
          <>
            <Typography variant="h5">
              <AddCircleOutline sx={{ mr: 1, verticalAlign: 'middle' }} />
              {t('Campaign Created')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('You created a new campaign "{{campaignName}}" for the organization "{{organizationName}}".', {
                campaignName: activity.metadata.campaign_name,
                organizationName: activity.metadata.organization_name,
              })}
            </Typography>
          </>
        );
      case 'campaign_modified':
        return (
          <>
            <Typography variant="h5">
              <Edit sx={{ mr: 1, verticalAlign: 'middle' }} />
              {t('Campaign Modified')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('You modified the campaign "{{campaignName}}" for the organization "{{organizationName}}".', {
                campaignName: activity.metadata.campaign_name,
                organizationName: activity.metadata.organization_name,
              })}
            </Typography>
          </>
        );
      case 'user_profile_updated':
        return (
          <>
            <Typography variant="h5">
              <Person sx={{ mr: 1, verticalAlign: 'middle' }} />
              {t('Profile Updated')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('You updated your profile information.')}
            </Typography>
          </>
        );
      case 'profile_image_uploaded':
        return (
          <>
            <Typography variant="h5">
              <PhotoCamera sx={{ mr: 1, verticalAlign: 'middle' }} />
              {t('Profile Image Updated')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('You updated your profile image.')}
            </Typography>
            <Box display="flex" mt={2} alignItems="flex-start">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={isMobile ? '100' : '200'}
                    image={activity.metadata.url}
                    alt="Updated Profile Image"
                  />
                </CardActionArea>
              </Card>
            </Box>
          </>
        );
      case 'cover_image_uploaded':
        return (
          <>
            <Typography variant="h5">
              <PhotoCamera sx={{ mr: 1, verticalAlign: 'middle' }} />
              {t('Profile Cover Updated')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('You updated your profile cover image.')}
            </Typography>
            <Box display="flex" mt={2} alignItems="flex-start">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={isMobile ? '100' : '200'}
                    image={activity.metadata.url}
                    alt="Updated Profile Cover"
                  />
                </CardActionArea>
              </Card>
            </Box>
          </>
        );
      case 'campaign_stopped':
        return (
          <>
            <Typography variant="h5">
              <Pause sx={{ mr: 1, verticalAlign: 'middle' }} />
              {t('Campaign Stopped')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('You stopped the campaign "{{campaignName}}" for the organization "{{organizationName}}".', {
                campaignName: activity.metadata.campaign_name,
                organizationName: activity.metadata.organization_name,
              })}
            </Typography>
          </>
        );
      case 'campaign_deleted':
        return (
          <>
            <Typography variant="h5">
              <Delete sx={{ mr: 1, verticalAlign: 'middle' }} />
              {t('Campaign Deleted')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('You deleted the campaign "{{campaignName}}" from the organization "{{organizationName}}".', {
                campaignName: activity.metadata.campaign_name,
                organizationName: activity.metadata.organization_name,
              })}
            </Typography>
          </>
        );
      case 'member_added':
        return (
          <>
            <Typography variant="h5">
              <AddCircleOutline sx={{ mr: 1, verticalAlign: 'middle' }} />
              {t('Member Added')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('You added {{memberName}} as a member to the organization "{{organizationName}}".', {
                memberName: activity.metadata.member_name,
                organizationName: activity.metadata.organization_name,
              })}
            </Typography>
          </>
        );
      case 'member_removed':
        return (
          <>
            <Typography variant="h5">
              <RemoveCircleOutline sx={{ mr: 1, verticalAlign: 'middle' }} />
              {t('Member Removed')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('You removed {{memberName}} from the organization "{{organizationName}}".', {
                memberName: activity.metadata.member_name,
                organizationName: activity.metadata.organization_name,
              })}
            </Typography>
          </>
        );
      case 'member_role_changed':
        return (
          <>
            <Typography variant="h5">
              <Group sx={{ mr: 1, verticalAlign: 'middle' }} />
              {t('Member Role Changed')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('You changed {{memberName}}\'s role to "{{newRole}}" in the organization "{{organizationName}}".', {
                memberName: activity.metadata.member_name,
                newRole: activity.metadata.new_role,
                organizationName: activity.metadata.organization_name,
              })}
            </Typography>
          </>
        );
      case 'user_followed':
        return (
          <>
            <Typography variant="h5">
              <Person sx={{ mr: 1, verticalAlign: 'middle' }} />
              {t('User Followed')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('You followed {{userName}}.', { userName: activity.metadata.user_name })}
            </Typography>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Timeline>
      {activities.map((activity) => (
        <TimelineItem key={activity.id}>
          <TimelineOppositeContent sx={{ width: '85px', flex: 'none' }} color="text.secondary">
            {new Date(activity.timestamp).toLocaleDateString()}
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ml: 1}}>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ pb: 4, mt: -0.4 }}>
            {renderActivityContent(activity)}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineBasic;
