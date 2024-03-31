import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  List,
  ListItem,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const AvatarPrimary = styled(Avatar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  width: theme.spacing(5),
  height: theme.spacing(5),
}));

const BoxWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  textAlign: 'center',
  width: theme.spacing(9),
  height: theme.spacing(9),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1.5),
  flexShrink: 0,
}));

const ListItemWrapper = styled(ListItem)(({ theme }) => ({
  borderRadius: 0,
  padding: theme.spacing(2),
  '&:hover': {
    '.MuiDate-wrapper': {
      background: alpha(theme.palette.common.black, 0.08),
    },
  },
}));

function UpcomingEvents() {
  const { t } = useTranslation();

  return (
    <Card>
      <Box
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <AvatarPrimary
            sx={{
              mr: 1.5,
            }}
          >
            <DateRangeTwoToneIcon fontSize="small" />
          </AvatarPrimary>
          <Typography variant="h5">{t('Upcoming Events')}</Typography>
        </Box>
        <Tooltip
          placement="top"
          arrow
          title={t('Create new event')}
        >
          <IconButton
            sx={{
              alignSelf: 'center',
            }}
            color="primary"
          >
            <ControlPointTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider />
      <List
        disablePadding
        component="div"
      >
        <ListItemWrapper alignItems="flex-start">
          <BoxWrapper className="MuiDate-wrapper">
            <Box>
              <Typography
                variant="h3"
                lineHeight={1}
              >
                23
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                {t('June')}
              </Typography>
            </Box>
          </BoxWrapper>
          <Box>
            <Typography
              variant="h5"
              sx={{
                pt: 1,
              }}
            >
              {t('Healthy Body')}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
            >
              {t('You will learn how to have a healthy body and how to stay fit in this event.')}
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper alignItems="flex-start">
          <BoxWrapper className="MuiDate-wrapper">
            <Box>
              <Typography
                variant="h3"
                lineHeight={1}
              >
                30
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                {t('July')}
              </Typography>
            </Box>
          </BoxWrapper>
          <Box>
            <Typography
              variant="h5"
              sx={{
                pt: 1,
              }}
            >
              {t('Healthy Nutrition - The Power is in You')}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
            >
              {t(
                'Three day course that will help you harness your inner power in order to have a healthier life.'
              )}
            </Typography>
          </Box>
        </ListItemWrapper>
        <Divider />
        <ListItemWrapper alignItems="flex-start">
          <BoxWrapper className="MuiDate-wrapper">
            <Box>
              <Typography
                variant="h3"
                lineHeight={1}
              >
                14
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                {t('August')}
              </Typography>
            </Box>
          </BoxWrapper>
          <Box>
            <Typography
              variant="h5"
              sx={{
                pt: 1,
              }}
            >
              {t('Mindfulness Online Course')}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
            >
              {t(
                'Learn how to better manage the stresses of daily life, improve your overall health.'
              )}
            </Typography>
          </Box>
        </ListItemWrapper>
      </List>
      <Divider />
      <Box p={2}>
        <Button
          variant="outlined"
          size="small"
          endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
        >
          {t('View all')}
        </Button>
      </Box>
    </Card>
  );
}

export default UpcomingEvents;
