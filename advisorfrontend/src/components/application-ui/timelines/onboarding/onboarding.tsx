import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { alpha, Typography } from '@mui/material';

const TimelineOnboarding = () => {
  return (
    <Timeline
      sx={{
        '& .MuiTimelineItem-root::before': {
          display: 'none',
        },
      }}
    >
      {/* Step 1 - Completed */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="success"
            sx={{
              borderWidth: 1,
              backgroundColor: (theme) => alpha(theme.palette.success.main, 0.12),
            }}
          >
            <CheckOutlinedIcon
              sx={{
                fontSize: 16,
                color: 'success.main',
              }}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="body1"
            fontWeight={500}
          >
            Account Creation
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            Your account has been successfully created.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Step 2 - Completed */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="success"
            sx={{
              borderWidth: 1,
              backgroundColor: (theme) => alpha(theme.palette.success.main, 0.12),
            }}
          >
            <CheckOutlinedIcon
              sx={{
                fontSize: 16,
                color: 'success.main',
              }}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="body1"
            fontWeight={500}
          >
            Email Verification
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            Your email address has been verified.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Step 3 - Completed */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="error"
            sx={{
              borderWidth: 1,
              backgroundColor: (theme) => alpha(theme.palette.error.main, 0.12),
            }}
          >
            <PriorityHighOutlinedIcon
              sx={{
                fontSize: 16,
                color: 'error.main',
              }}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="body1"
            fontWeight={500}
            color="error.main"
          >
            Profile Setup
          </Typography>
          <Typography
            color="error.light"
            variant="body2"
          >
            Your profile information has been set up.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Step 4 - Completed */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="success"
            sx={{
              borderWidth: 1,
              backgroundColor: (theme) => alpha(theme.palette.success.main, 0.12),
            }}
          >
            <CheckOutlinedIcon
              sx={{
                fontSize: 16,
                color: 'success.main',
              }}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="body1"
            fontWeight={500}
          >
            Preferences Selection
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            You have selected your preferences.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Step 5 - In Progress */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="warning"
            sx={{
              borderWidth: 1,
              backgroundColor: (theme) => alpha(theme.palette.warning.main, 0.12),
            }}
          >
            <HourglassEmptyOutlinedIcon
              sx={{
                fontSize: 16,
                color: 'warning.main',
              }}
            />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="body1"
            fontWeight={500}
            color="warning.main"
          >
            Complete Onboarding Tutorial
          </Typography>
          <Typography
            color="warning.light"
            variant="body2"
          >
            You are currently going through the onboarding tutorial.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineOnboarding;
