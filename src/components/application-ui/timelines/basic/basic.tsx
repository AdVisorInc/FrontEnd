import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Box, Button, Card, CardActionArea, CardMedia, Chip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const TimelineBasic = () => {
  const { t } = useTranslation();

  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            width: '85px',
            flex: 'none',
          }}
          color="text.secondary"
        >
          12 Feb
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="primary"
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            pb: 4,
            mt: -0.4,
          }}
        >
          <Chip
            label={t('Sell / Market')}
            color="success"
            variant="filled"
          />
          <Typography
            sx={{
              pt: 1,
            }}
            variant="body2"
            color="text.primary"
          >
            You sold <b>10 ETH</b> for <b>48,500 USD</b>.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            width: '85px',
            flex: 'none',
          }}
          color="text.secondary"
        >
          11 Feb
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="primary"
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            pb: 4,
            mt: -0.1,
          }}
        >
          <Typography variant="h5">Invite code sent</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Your friends joined the platform.
          </Typography>
          <Box
            display="flex"
            mt={1}
            alignItems="flex-start"
          >
            AvatarGroup
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            width: '85px',
            flex: 'none',
          }}
          color="text.secondary"
        >
          9 Feb
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="primary"
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            pb: 4,
            mt: -0.1,
          }}
        >
          <Typography variant="h5">Uploaded documents</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            You uploaded the following documents onto the crypto platform:
          </Typography>
          <Box
            display="flex"
            mt={2}
            alignItems="flex-start"
          >
            <Card
              sx={{
                mr: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="64"
                  image="/placeholders/fitness/1.png"
                  alt="..."
                />
              </CardActionArea>
            </Card>
            <Card
              sx={{
                mr: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="64"
                  image="/placeholders/fitness/2.png"
                  alt="..."
                />
              </CardActionArea>
            </Card>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            width: '85px',
            flex: 'none',
          }}
          color="text.secondary"
        >
          8 Feb
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="primary"
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            pb: 4,
            mt: -0.1,
          }}
        >
          <Typography variant="h5">Profile verification</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            You partially submitted the required documents.
          </Typography>
          <Box
            display="flex"
            mt={1}
            alignItems="flex-start"
          >
            <Button
              size="small"
              variant="contained"
              color="warning"
            >
              {t('Submit  docs')}
            </Button>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            width: '85px',
            flex: 'none',
          }}
          color="text.secondary"
        >
          6 Feb
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="primary"
          />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            pb: 4,
            mt: -0.1,
          }}
        >
          <Typography variant="h5">Joined CryptoIO Platform</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Welcome to the platform. Enjoy your stay here!
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineBasic;
