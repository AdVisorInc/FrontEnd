import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import InsertInvitationTwoToneIcon from '@mui/icons-material/InsertInvitationTwoTone';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import PendingTwoToneIcon from '@mui/icons-material/PendingTwoTone';
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import BaseButtonTab from 'src/components/base/styles/button-tab';

type CourseItem = {
  imageSrc: string;
  tags: string[];
  title: string;
  dateRange: string;
  statusIcon: JSX.Element;
  statusText: string;
  score: number;
  buttonLabel: string;
  buttonVariant: 'outlined' | 'contained';
};

function RecentCourses() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const courseData: CourseItem[] = [
    {
      imageSrc: '/placeholders/covers/landscape1.png',
      tags: ['Software', 'Development', 'AML'],
      title: t('Machine learning basics: Regression'),
      dateRange: 'March 14, 2021 - March 28, 2021',
      statusIcon: <TimerTwoToneIcon />,
      statusText: 'In Progress',
      score: 9.2,
      buttonLabel: 'View course',
      buttonVariant: 'outlined',
    },
    {
      imageSrc: '/placeholders/covers/landscape2.png',
      tags: ['Dev Tools', 'Frontend'],
      title: t('Project Management: Managing Front-End Planning'),
      dateRange: 'April 5, 2021 - April 12, 2021',
      statusIcon: <CheckTwoToneIcon />,
      statusText: 'Completed',
      score: 6.4,
      buttonLabel: 'Get your certificate',
      buttonVariant: 'contained',
    },
  ];

  const handleDelete = () => {
    toast.error(t('You clicked on delete!'));
  };

  const handleClick = () => {
    toast.success(t('You clicked on the chip!'));
  };

  const [currentTab, setCurrentTab] = useState<number>(0);

  const tabs = [
    { value: 0, label: t('All Courses') },
    { value: 1, label: t('Active') },
    { value: 2, label: t('Upcoming') },
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: number): void => {
    setCurrentTab(value);
  };

  const handleSelectChange = (event: ChangeEvent<{ value: unknown }>) => {
    setCurrentTab(event.target.value as number);
  };

  return (
    <Card>
      <CardContent
        sx={{
          pb: 0,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <CardHeader
          sx={{
            p: 0,
            mb: 2,
          }}
          title={t('Recent Courses')}
          subheader={t(
            'Explore our curated selection of recent courses, featuring the latest in industry trends, skill development, and cutting-edge techniques'
          )}
        />
        {smUp ? (
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            sx={{
              overflow: 'visible',

              '& .MuiTabs-indicator': {
                display: 'none',
              },

              '& .MuiTabs-scroller': {
                overflow: 'visible !important',
              },
            }}
          >
            {tabs.map((tab) => (
              <BaseButtonTab
                componentType="tab"
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </Tabs>
        ) : (
          <Select
            sx={{
              mb: 2,
            }}
            value={currentTab}
            //@ts-ignore
            onChange={handleSelectChange}
            fullWidth
          >
            {tabs.map((tab) => (
              <MenuItem
                key={tab.value}
                value={tab.value}
              >
                {tab.label}
              </MenuItem>
            ))}
          </Select>
        )}
      </CardContent>
      <Divider />

      {currentTab === 0 && (
        <>
          <List disablePadding>
            {courseData.map((course, index) => (
              <React.Fragment key={index}>
                <ListItem
                  sx={{
                    display: { xs: 'block', md: 'flex' },
                    py: { xs: 2, md: 3 },
                  }}
                >
                  <ListItemAvatar sx={{ mr: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}>
                    <Link
                      underline="none"
                      sx={{ transition: 'all .2s', opacity: 1, '&:hover': { opacity: 0.8 } }}
                      href=""
                      onClick={(e) => e.preventDefault()}
                    >
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 'auto',
                          height: 138,
                        }}
                        src={course.imageSrc}
                        alt="course"
                      />
                    </Link>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <>
                        <Stack
                          flexWrap="wrap"
                          gap={1}
                          direction="row"
                          sx={{ pb: 1 }}
                        >
                          {course.tags.map((tag, tagIndex) => (
                            <Chip
                              key={tagIndex}
                              size="small"
                              label={t(tag)}
                              color="secondary"
                              onClick={handleClick}
                              onDelete={handleDelete}
                            />
                          ))}
                        </Stack>
                        <Link
                          underline="none"
                          sx={{ '&:hover': { color: theme.palette.primary.dark } }}
                          href=""
                          onClick={(e) => e.preventDefault()}
                        >
                          {course.title}
                        </Link>
                      </>
                    }
                    primaryTypographyProps={{ variant: 'h4' }}
                    secondary={
                      <>
                        {course.dateRange}
                        <Box
                          display="flex"
                          alignItems="center"
                          sx={{ pt: 1 }}
                        >
                          {course.statusIcon}
                          <Typography sx={{ pl: 1 }}>{t(course.statusText)}</Typography>
                        </Box>
                      </>
                    }
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      sx: {
                        pt: 1,
                      },
                    }}
                  />
                  <Stack
                    spacing={1}
                    direction="row"
                    whiteSpace="nowrap"
                    sx={{ my: { xs: 2, md: 0 } }}
                    display="flex"
                    alignItems="center"
                    justifyContent={{ xs: 'space-between', md: 'flex-end' }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                    >
                      <LocalFireDepartmentTwoToneIcon sx={{ color: 'warning.main' }} />
                      <b>{course.score}</b>
                    </Box>
                    <Button
                      variant={course.buttonVariant}
                      size="small"
                    >
                      {course.buttonLabel}
                    </Button>
                    <ButtonIcon
                      sx={{
                        display: { xs: 'none', md: 'flex' },
                      }}
                      variant="outlined"
                      size="small"
                      startIcon={<PendingTwoToneIcon />}
                      color="secondary"
                    />
                  </Stack>
                </ListItem>
                <Divider component="li" />
              </React.Fragment>
            ))}
          </List>
          <CardActions
            disableSpacing
            sx={{
              p: { xs: 2, sm: 3 },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Pagination
              size="large"
              count={3}
              color="primary"
            />
          </CardActions>
        </>
      )}

      {currentTab === 1 && (
        <Box
          sx={{
            py: { xs: 2, md: 6, lg: 8 },
            textAlign: 'center',
          }}
        >
          <AvatarState
            isSoft
            state="warning"
            sx={{
              width: 84,
              height: 84,
              mx: 'auto',
              mb: 2,
            }}
          >
            <NotificationsActiveTwoToneIcon />
          </AvatarState>
          <Typography variant="h4">{t('Start learning today')}!</Typography>
          <Typography
            variant="h5"
            sx={{
              pb: 2,
              px: 3,
            }}
            fontWeight={400}
            color="text.secondary"
          >
            {t('Browse over 500 quality courses to start learning something useful today')}!
          </Typography>
          <Button
            color="warning"
            variant="outlined"
            sx={{
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px',
              },
            }}
          >
            {t('Browse courses')}
          </Button>
        </Box>
      )}

      {currentTab === 2 && (
        <Box
          sx={{
            py: { xs: 2, md: 6, lg: 8 },
            textAlign: 'center',
          }}
        >
          <AvatarState
            isSoft
            state="info"
            sx={{
              width: 84,
              height: 84,
              mx: 'auto',
              mb: 2,
            }}
          >
            <InsertInvitationTwoToneIcon />
          </AvatarState>
          <Typography variant="h4">{t('Upcoming events')}</Typography>
          <Typography
            variant="h5"
            sx={{
              px: 3,
              pb: 2,
            }}
            fontWeight={400}
            color="text.secondary"
          >
            {t('Right now there are no upcoming events available')}!
          </Typography>
          <Button
            color="info"
            variant="outlined"
            startIcon={<MarkEmailReadTwoToneIcon />}
            sx={{
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px',
              },
            }}
          >
            {t('Subscribe to newsletter')}
          </Button>
        </Box>
      )}
    </Card>
  );
}

export default RecentCourses;
