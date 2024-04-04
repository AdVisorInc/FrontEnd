import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import CalendarViewMonthTwoToneIcon from '@mui/icons-material/CalendarViewMonthTwoTone';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import ViewAgendaTwoToneIcon from '@mui/icons-material/ViewAgendaTwoTone';
import ViewDayTwoToneIcon from '@mui/icons-material/ViewDayTwoTone';
import ViewWeekTwoToneIcon from '@mui/icons-material/ViewWeekTwoTone';
import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import type { ElementType, FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import type { View } from 'src/models/calendar';

interface ActionsProps {
  children?: ReactNode;
  className?: string;
  date: Date;
  onNext?: () => void;
  onPrevious?: () => void;
  onToday?: () => void;
  handleCreateEvent?: () => void;
  changeView?: (view: View) => void;
  view: View;
}

interface ViewOption {
  label: string;
  value: View;
  icon: ElementType;
}

const viewOptions: ViewOption[] = [
  {
    label: 'Month',
    value: 'dayGridMonth',
    icon: CalendarViewMonthTwoToneIcon,
  },
  {
    label: 'Week',
    value: 'timeGridWeek',
    icon: ViewWeekTwoToneIcon,
  },
  {
    label: 'Day',
    value: 'timeGridDay',
    icon: ViewDayTwoToneIcon,
  },
  {
    label: 'Agenda',
    value: 'listWeek',
    icon: ViewAgendaTwoToneIcon,
  },
];

const Actions: FC<ActionsProps> = ({ date, onNext, onPrevious, onToday, changeView, view }) => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item>
        <Tooltip
          arrow
          placement="top"
          title={t('Previous Day')}
        >
          <ButtonIcon
            variant="outlined"
            color="secondary"
            size="small"
            onClick={onPrevious}
          >
            <ArrowBackTwoToneIcon fontSize="small" />
          </ButtonIcon>
        </Tooltip>
        <Tooltip
          arrow
          placement="top"
          title={t('Today')}
        >
          <ButtonIcon
            color="primary"
            size="small"
            variant="outlined"
            sx={{
              mx: 1,
            }}
            onClick={onToday}
          >
            <TodayTwoToneIcon fontSize="small" />
          </ButtonIcon>
        </Tooltip>
        <Tooltip
          arrow
          placement="top"
          title={t('Next Day')}
        >
          <ButtonIcon
            variant="outlined"
            color="secondary"
            size="small"
            onClick={onNext}
          >
            <ArrowForwardTwoToneIcon fontSize="small" />
          </ButtonIcon>
        </Tooltip>
      </Grid>
      <Grid
        sx={{
          display: { xs: 'none', sm: 'inline-block' },
        }}
      >
        <Typography variant="h4">{format(date, 'MMMM yyyy')}</Typography>
      </Grid>
      <Grid
        sx={{
          display: { xs: 'none', sm: 'inline-block' },
        }}
      >
        {viewOptions.map((viewOption) => {
          const Icon = viewOption.icon;

          return (
            <Tooltip
              key={viewOption.value}
              arrow
              placement="top"
              title={t(viewOption.label)}
            >
              <IconButton
                color={viewOption.value === view ? 'primary' : 'secondary'}
                onClick={() => changeView && changeView(viewOption.value)}
              >
                <Icon />
              </IconButton>
            </Tooltip>
          );
        })}
      </Grid>
    </Grid>
  );
};

Actions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  onToday: PropTypes.func,
  handleCreateEvent: PropTypes.func,
  changeView: PropTypes.func,
  // @ts-ignore
  view: PropTypes.oneOf(['dayGridMonth', 'timeGridWeek', 'timeGridDay', 'listWeek']),
};

Actions.defaultProps = {
  onNext: () => {},
  onPrevious: () => {},
  onToday: () => {},
  handleCreateEvent: () => {},
  changeView: () => {},
};

export default Actions;
