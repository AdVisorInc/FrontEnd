import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardHeader
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
        disableTypography
        action={
          <>
            <Tooltip
              arrow
              placement="top"
              title="View profile"
            >
              <IconButton
                color="secondary"
                size="small"
              >
                <PermIdentityTwoToneIcon />
              </IconButton>
            </Tooltip>
            <Button
              startIcon={<ChatBubbleTwoToneIcon />}
              color="primary"
              size="small"
              variant="contained"
            >
              Contact
            </Button>
          </>
        }
        title={
          <Box
            display="flex"
            alignItems="center"
          >
            <Avatar
              variant="rounded"
              alt="..."
              sx={{
                width: 52,
                height: 52,
              }}
              src="/avatars/5.png"
            />
            <Box
              mx={1}
              overflow="hidden"
            >
              <Typography
                variant="h5"
                component="div"
              >
                Jessica Martinez
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                noWrap
              >
                Lead Software Engineer
              </Typography>
            </Box>
          </Box>
        }
      />
      <CardContent>
        <PlaceholderBox height={128} />
      </CardContent>
    </Card>
  );
};

export default Component;
