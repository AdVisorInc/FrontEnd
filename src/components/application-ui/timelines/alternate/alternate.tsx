import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Avatar, Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

interface TimelineEvent {
  time: string;
  roomNumber: number;
  avatarSrc?: string;
  initials?: string;
  name: string;
  speciality: string;
  avatarBgColor?: string;
  avatarColor?: string;
}

const TimelineAlternate = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const timelineEvents: TimelineEvent[] = [
    {
      time: '09:30 AM',
      roomNumber: 11,
      avatarSrc: '/avatars/2.png',
      name: 'Makenna Arcand',
      speciality: 'Pediatrician',
    },
    {
      time: '10:00 AM',
      roomNumber: 15,
      avatarSrc: '/avatars/1.png',
      name: 'Kaiya Westervelt',
      speciality: 'Orthopedics',
    },
    {
      time: '11:30 AM',
      roomNumber: 9,
      avatarSrc: '/avatars/4.png',
      name: 'Jakob Torff',
      speciality: 'Cardiology',
    },
    {
      time: '10:30 AM',
      roomNumber: 8,
      initials: 'HB',
      name: 'Hanna Baptista',
      speciality: 'Cardiology',
      avatarBgColor: theme.palette.warning.main,
      avatarColor: theme.palette.common.white,
    },
  ];

  return (
    <Timeline
      sx={{
        '& .MuiTimelineItem-root::before': {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {timelineEvents.map((event, index) => (
        <TimelineItem key={event.time}>
          <TimelineSeparator
            sx={{
              mt: '23px',
              mb: '-23px',
            }}
          >
            <TimelineDot
              sx={{ my: 0.5 }}
              variant="outlined"
              color="primary"
            />
            {index !== timelineEvents.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent
            sx={{
              py: { xs: 2, sm: 1 },
            }}
            display="flex"
          >
            <AvatarState
              isSoft
              state="secondary"
              sx={{ mr: { xs: 1, sm: 2 }, width: 44, height: 44 }}
              variant="rounded"
            >
              <CalendarTodayTwoToneIcon fontSize="small" />
            </AvatarState>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
            >
              <Box
                display="flex"
                flexDirection={{ xs: 'row', sm: 'column' }}
                alignItems={{ xs: 'center', sm: 'flex-start' }}
                sx={{ mr: { xs: 1, sm: 2 } }}
                pt={{ xs: 1.2, sm: 0 }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    pr: { xs: 1, sm: 0 },
                  }}
                >
                  {event.time}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  noWrap
                >
                  {t('room')} {event.roomNumber}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                pt={{ xs: 1.5, sm: 0 }}
              >
                {event.avatarSrc ? (
                  <Avatar
                    src={event.avatarSrc}
                    sx={{ mr: 1 }}
                  />
                ) : (
                  <Avatar
                    sx={{
                      mr: 1,
                      background: event.avatarBgColor,
                      color: event.avatarColor,
                    }}
                  >
                    {event.initials}
                  </Avatar>
                )}
                <Box>
                  <Typography
                    variant="h6"
                    noWrap
                  >
                    {event.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    noWrap
                  >
                    {t('Doctor (' + event.speciality + ')')}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineAlternate;
