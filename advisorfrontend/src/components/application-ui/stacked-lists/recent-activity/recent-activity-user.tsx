import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from '@mui/material';
import React, {MouseEvent, useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';
import UserTimeline from "../../timelines/basic/user-timeline";
import {RootState, useDispatch, useSelector} from "../../../../store";
import {fetchRecentUserActivities, fetchUserActivities} from "../../../../slices/userActivities";
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import PauseTwoToneIcon from '@mui/icons-material/PauseTwoTone';
import PlayArrowTwoToneIcon from '@mui/icons-material/PlayArrowTwoTone';
import PersonAddTwoToneIcon from '@mui/icons-material/PersonAddTwoTone';
import PersonRemoveTwoToneIcon from '@mui/icons-material/PersonRemoveTwoTone';
import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import AdActivityList, {AdActivity} from "./ad-activity";


function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const activities = useSelector((state: RootState) => state.userActivity.activities);
  const isLoading = useSelector((state: RootState) => state.userActivity.isLoading);

  const [tabs, setTab] = useState<string | null>('activity');

  useEffect(() => {
    dispatch(fetchRecentUserActivities());
  }, [dispatch]);

  const handleViewOrientation = (_event: MouseEvent<HTMLElement>, newValue: string | null) => {
    setTab(newValue);
  };

  const adActivities: AdActivity[] = [
    {
      id: '1',
      background: theme.palette.success.main,
      contrastText: theme.palette.success.contrastText,
      icon: <TrendingUpTwoToneIcon />,
      primaryText: t('Campaign Budget Increased'),
      secondaryText: `${t('In')} AdWords Campaign`,
      value: '+$500',
      amountColor: 'success',
    },
    {
      id: '2',
      background: theme.palette.error.main,
      contrastText: theme.palette.error.contrastText,
      icon: <TrendingDownTwoToneIcon />,
      primaryText: t('Campaign Budget Decreased'),
      secondaryText: `${t('In')} Facebook Ads`,
      value: '-$200',
      amountColor: 'error',
    },
    {
      id: '3',
      background: theme.palette.warning.main,
      contrastText: theme.palette.warning.contrastText,
      icon: <PauseTwoToneIcon />,
      primaryText: t('Campaign Paused'),
      secondaryText: `${t('In')} Twitter Ads`,
      value: 'Paused',
    },
    {
      id: '4',
      background: theme.palette.success.main,
      contrastText: theme.palette.success.contrastText,
      icon: <PlayArrowTwoToneIcon />,
      primaryText: t('Campaign Resumed'),
      secondaryText: `${t('In')} LinkedIn Ads`,
      value: 'Resumed',
    },
    {
      id: '5',
      background: theme.palette.info.main,
      contrastText: theme.palette.info.contrastText,
      icon: <PersonAddTwoToneIcon />,
      primaryText: t('New Member Invited'),
      secondaryText: `${t('To')} My Organization`,
      value: 'John Doe',
    },
    {
      id: '6',
      background: theme.palette.warning.main,
      contrastText: theme.palette.warning.contrastText,
      icon: <PersonRemoveTwoToneIcon />,
      primaryText: t('Member Removed'),
      secondaryText: `${t('From')} My Organization`,
      value: 'Jane Smith',
    },
    {
      id: '7',
      background: theme.palette.error.main,
      contrastText: theme.palette.error.contrastText,
      icon: <BlockTwoToneIcon />,
      primaryText: t('Ad Account Removed'),
      secondaryText: `${t('From')} My Organization`,
      value: 'TikTok Ads',
    },
    {
      id: '8',
      background: theme.palette.success.main,
      contrastText: theme.palette.success.contrastText,
      icon: <AddTwoToneIcon />,
      primaryText: t('Ad Account Added'),
      secondaryText: `${t('To')} My Organization`,
      value: 'Snapchat Ads',
    },
  ];

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardHeader
        disableTypography
        title={<Typography variant="h6">{t('Recent Activity')}</Typography>}
        subheader={
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Your recent activities')}
          </Typography>
        }
        action={
          <ToggleButtonGroup
            color="primary"
            size="small"
            value={tabs}
            exclusive
            onChange={handleViewOrientation}
          >
            <ToggleButton
              sx={{
                px: 2,
                py: 0.5,
                lineHeight: 1.5,
                fontSize: theme.typography.pxToRem(12),
              }}
              value="activity"
            >
              {t('Activity')}
            </ToggleButton>
            <ToggleButton
              sx={{
                px: 2,
                py: 0.5,
                lineHeight: 1.5,
                fontSize: theme.typography.pxToRem(12),
              }}
              value="adActivity"
            >
              {t('Ad Activities')}
            </ToggleButton>
          </ToggleButtonGroup>
        }
      />
      <Divider />

      {tabs === 'activity' && (
        <>
          <Box sx={{ height: 700 }}>
            <Scrollbar>
              <Box pt={2}>
                {isLoading ? (
                  <Box display="flex" justifyContent="center" alignItems="center" height={400}>
                    <Typography variant="h6">{t('Loading activities...')}</Typography>
                  </Box>
                ) : activities.length > 0 ? (
                  <UserTimeline />
                ) : (
                  <Box display="flex" justifyContent="center" alignItems="center" height={400}>
                    <Typography variant="h6">{t('No activities found')}</Typography>
                  </Box>
                )}
              </Box>
            </Scrollbar>
          </Box>
          <Divider />
          <Box p={2} sx={{ textAlign: 'center' }}>
            <Button variant="contained" disabled endIcon={<KeyboardArrowRightTwoToneIcon />}>
              {t('View all activity')}
            </Button>
          </Box>
        </>
      )}
      {tabs === 'adActivity' && (
        <>
          <Box sx={{ height: 700 }}>
            <Scrollbar>
              <AdActivityList activities={adActivities} />
              <Box px={2} py={3} sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2" color="text.secondary">
                  {t("You've reached the end of the ad activity list")}!
                </Typography>
              </Box>
            </Scrollbar>
          </Box>
          <Divider />
          <Box p={2} sx={{ textAlign: 'center' }}>
            <Button variant="contained" endIcon={<KeyboardArrowRightTwoToneIcon />}>
              {t('View all ad activities')}
            </Button>
          </Box>
        </>
      )}
      {!tabs && (
        <Box
          p={{ xs: 2, sm: 3 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            height: 422,
            textAlign: 'center',
          }}
        >
          <Box>
            <Typography
              align="center"
              variant="h3"
              fontWeight={400}
              color="text.secondary"
              sx={{
                mt: 3,
              }}
            >
              {t('Select one of the tabs to continue')}
            </Typography>
            <Button
              sx={{
                mt: 4,
              }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      )}
    </Card>
  );
}

export default Component;
