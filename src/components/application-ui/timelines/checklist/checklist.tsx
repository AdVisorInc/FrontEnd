import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import {
  alpha,
  Box,
  CardHeader,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const TimelineWrapper = styled(Timeline)(({ theme }) => ({
  paddingTop: theme.spacing(2),

  '& .MuiTimelineItem-root::before': {
    display: 'none',
  },

  '.MuiTimelineDot-root': {
    marginTop: theme.spacing(-0.6),
    height: theme.spacing(4.5),
    width: theme.spacing(4.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '.MuiTimelineContent-root': {
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },

  '.MuiFormControlLabel-root': {
    marginLeft: theme.spacing(-0.7),
    marginBottom: theme.spacing(0.5),
  },

  '.MuiFormControlLabel-label': {
    color:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.white, 0.5)
        : alpha(theme.palette.common.black, 0.5),
  },
}));

const CheckboxWrapper = styled(Checkbox)(({ theme }) => ({
  padding: theme.spacing(0.5),
}));

function Checklist() {
  const { t } = useTranslation();

  return (
    <Box>
      <CardHeader
        sx={{
          px: 0,
          pt: 0,
        }}
        action={
          <Tooltip
            arrow
            title={t('Refresh list')}
          >
            <IconButton
              size="small"
              color="primary"
            >
              <RefreshTwoToneIcon />
            </IconButton>
          </Tooltip>
        }
        title={t('Checklist')}
        titleTypographyProps={{ variant: 'h3' }}
      />
      <TimelineWrapper>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <AssignmentTwoToneIcon fontSize="small" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h5"
              sx={{ pb: 1.5 }}
            >
              {t('Tasks Quick List')}
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <CheckboxWrapper
                    color="primary"
                    name="checkedC"
                  />
                }
                label={t('Prepare website launch')}
              />
              <FormControlLabel
                control={
                  <CheckboxWrapper
                    color="primary"
                    name="checkedC"
                  />
                }
                label={t('Build React Native application')}
              />
              <FormControlLabel
                control={
                  <CheckboxWrapper
                    color="primary"
                    name="checkedC"
                  />
                }
                label={t('Fix remaining bugs for first 4 pages')}
              />
            </FormGroup>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <AccountTreeTwoToneIcon fontSize="small" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h5"
              sx={{ pb: 1.5 }}
            >
              {t('Project Management')}
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <CheckboxWrapper
                    color="primary"
                    name="checkedC"
                  />
                }
                label={t('Complete sales pitch')}
              />
              <FormControlLabel
                control={
                  <CheckboxWrapper
                    color="primary"
                    name="checkedC"
                  />
                }
                label={t('Improve SEO visibility')}
              />
            </FormGroup>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <BusinessCenterTwoToneIcon fontSize="small" />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h5"
              sx={{ pb: 1.5 }}
            >
              {t('Business & Marketing')}
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={
                  <CheckboxWrapper
                    color="primary"
                    name="checkedC"
                  />
                }
                label={t('Create marketing campaign')}
              />
              <FormControlLabel
                control={
                  <CheckboxWrapper
                    color="primary"
                    name="checkedC"
                  />
                }
                label={t('Sign business contract with partners')}
              />
            </FormGroup>
          </TimelineContent>
        </TimelineItem>
      </TimelineWrapper>
    </Box>
  );
}

export default Checklist;
