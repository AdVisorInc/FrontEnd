import GroupIcon from '@mui/icons-material/Group';
import LaptopIcon from '@mui/icons-material/Laptop';
import CoffeeIcon from '@mui/icons-material/LocalCafe';
import MicIcon from '@mui/icons-material/Mic';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface ConferenceEvent {
  time: string;
  title: string;
  description: string;
  icon: ReactNode;
  iconColor: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  textColor:
    | 'inherit'
    | 'primary.main'
    | 'secondary.main'
    | 'error.main'
    | 'info.main'
    | 'success.main'
    | 'warning.main';
}

const ConferenceTimeline = () => {
  const { t } = useTranslation();

  const events: ConferenceEvent[] = [
    {
      time: '9:30 am',
      title: t('Registration'),
      description: 'Check in and receive your access credentials',
      icon: <GroupIcon fontSize="small" />,
      iconColor: 'primary',
      textColor: 'primary.main',
    },
    {
      time: '10:00 am',
      title: t('Opening Remarks'),
      description: 'Welcoming speech by the host and overview of the conference agenda',
      icon: <MicIcon fontSize="small" />,
      iconColor: 'secondary',
      textColor: 'secondary.main',
    },
    {
      time: '11:00 am',
      title: t('Keynote Presentation'),
      description: 'Featured talk by a leading industry expert',
      icon: <LaptopIcon fontSize="small" />,
      iconColor: 'info',
      textColor: 'info.main',
    },
    {
      time: '12:30 pm',
      title: t('Lunch Break'),
      description: 'Network with peers and enjoy a catered lunch',
      icon: <CoffeeIcon fontSize="small" />,
      iconColor: 'warning',
      textColor: 'warning.main',
    },
    {
      time: '2:00 pm',
      title: t('Panel Discussion'),
      description: 'Interactive session with a panel of experts',
      icon: <QuestionAnswerIcon fontSize="small" />,
      iconColor: 'success',
      textColor: 'success.main',
    },
  ];

  return (
    <Timeline position="alternate">
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
            }}
            align="right"
            variant="body1"
            color="text.secondary"
          >
            {event.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              color={event.iconColor}
              variant="outlined"
              sx={{ p: 1, color: event.textColor }}
            >
              {event.icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ p: 2 }}>
            <Typography
              variant="h6"
              component="span"
            >
              {event.title}
            </Typography>
            <Typography>{event.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ConferenceTimeline;
