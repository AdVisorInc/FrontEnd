import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import { formatDistance, subDays, subHours } from 'date-fns';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface QuestionData {
  avatarSrc: string;
  name: string;
  timeAgo: string;
  category: string;
  categoryLink: string;
  title: string;
  description: string;
  replies: number;
  views: number;
}

function RecentQuestions() {
  const { t } = useTranslation();

  const questions: QuestionData[] = [
    {
      avatarSrc: '/avatars/1.png',
      name: 'Alice',
      timeAgo: formatDistance(subHours(new Date(), 2), new Date(), { addSuffix: true }),
      category: 'Design Tips',
      categoryLink: '#',
      title: t('Best practices for mobile responsiveness?'),
      description:
        'In the process of making my app mobile-friendly, I encountered some layout issues.',
      replies: 7,
      views: 198,
    },
    {
      avatarSrc: '/avatars/3.png',
      name: 'Max',
      timeAgo: formatDistance(subDays(new Date(), 1), new Date(), { addSuffix: true }),
      category: 'API Integration',
      categoryLink: '#',
      title: t('Issues with REST API call in React?'),
      description:
        'I am facing difficulties in fetching data from a REST API in a React component.',
      replies: 12,
      views: 264,
    },
    {
      avatarSrc: '/avatars/5.png',
      name: 'Sophia',
      timeAgo: formatDistance(subHours(new Date(), 12), new Date(), { addSuffix: true }),
      category: 'Performance Optimization',
      categoryLink: '#',
      title: t('How to reduce the load time of a React app?'),
      description: 'My application is taking too long to load, especially on mobile devices.',
      replies: 9,
      views: 350,
    },
  ];

  return (
    <Card>
      <CardHeader title={t('Recent Questions')} />
      <Divider />
      <List disablePadding>
        {questions.map((question, index) => (
          <React.Fragment key={index}>
            <ListItem
              alignItems="flex-start"
              sx={{
                display: { xs: 'block', sm: 'flex' },
                py: 3,
              }}
            >
              <ListItemAvatar sx={{ mr: 2 }}>
                <Avatar
                  variant="rounded"
                  src={question.avatarSrc}
                  sx={{ width: 64, height: 64, mb: { xs: 2, sm: 0 } }}
                />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                    >
                      <b>{question.name}</b> {t('asked this question')} <b>{question.timeAgo}</b>,{' '}
                      {t('in')}{' '}
                      <Link
                        href=""
                        underline="hover"
                        onClick={(e) => e.preventDefault()}
                      >
                        {t(question.category)}
                      </Link>
                    </Typography>
                    <Link
                      href=""
                      onClick={(e) => e.preventDefault()}
                      underline="hover"
                      color="text.primary"
                      variant="h3"
                    >
                      {question.title}
                    </Link>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      variant="h5"
                      fontWeight={400}
                      sx={{ pt: 0.5 }}
                    >
                      {question.description}
                    </Typography>

                    <Stack
                      direction="row"
                      mt={2}
                      spacing={2}
                      alignItems="center"
                      divider={
                        <Divider
                          orientation="vertical"
                          flexItem
                        />
                      }
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                      >
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                        >
                          Answer
                        </Button>
                        <Button
                          size="small"
                          color="secondary"
                          variant="outlined"
                          startIcon={<>{question.replies}</>}
                        >
                          replies
                        </Button>
                      </Stack>
                      <Typography
                        variant="body2"
                        color="text.primary"
                      >
                        <b>{question.views}</b> views
                      </Typography>
                    </Stack>
                  </>
                }
                secondaryTypographyProps={{
                  variant: 'body1',
                  color: 'primary.main',
                }}
              />
            </ListItem>
            {index < questions.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
      <Divider />
      <CardActions
        disableSpacing
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Pagination
          variant="outlined"
          shape="rounded"
          count={5}
          defaultPage={1}
          siblingCount={0}
          boundaryCount={1}
          color="primary"
        />
      </CardActions>
    </Card>
  );
}

export default RecentQuestions;
