import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import {
  alpha,
  Box,
  darken,
  Unstable_Grid2 as Grid,
  SwipeableDrawer,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { FullCalendarWrapper } from 'src/components/base/styles/calendar';
import { View } from 'src/models/calendar';
import { getEvents, updateEvent } from 'src/slices/calendar';
import { useDispatch, useSelector } from 'src/store';
import Actions from './actions';
import EventDrawer from './event-drawer';

const Component = () => {
  const [date, setDate] = useState<Date>(new Date());
  const theme = useTheme();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const calendarRef = useRef<FullCalendar | null>(null);

  const [view, setView] = useState<View>(mobile ? 'listWeek' : 'dayGridMonth');

  const { events } = useSelector((state) => state.calendar);

  const [drawer, setDrawer] = useState<any>({
    isDrawerOpen: false,
    eId: undefined,
    range: undefined,
  });

  const eventChosen = drawer.eId && events.find((event) => event.id === drawer.eId);

  const handleEventDrop = async ({ event }: any): Promise<void> => {
    try {
      if (!event.start || !event.end) {
        console.error('Event start or end date is missing');
        return;
      }

      dispatch(
        updateEvent(event.id, {
          allDay: event.allDay,
          start: event.start.toISOString(),
          end: event.end.toISOString(),
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleEventSelect = (arg: any): void => {
    setDrawer({
      isDrawerOpen: true,
      eId: arg.event.id,
      range: undefined,
    });
  };

  const handleEventResize = async ({ event }: any): Promise<void> => {
    try {
      await dispatch(
        updateEvent(event.id, {
          allDay: event.allDay,
          start: event.start.getTime(),
          end: event.end.getTime(),
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleRangeSelect = (arg: any): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calendar = calItem.getApi();

      calendar.unselect();
    }
  };

  const handleDateToday = (): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calendar = calItem.getApi();

      calendar.today();
      setDate(calendar.getDate());
    }
  };

  const changeView = (changedView: View): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calendar = calItem.getApi();

      calendar.changeView(changedView);
      setView(changedView);
    }
  };

  const handleDatePrev = (): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calendar = calItem.getApi();

      calendar.prev();
      setDate(calendar.getDate());
    }
  };

  const handleDateNext = (): void => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calendar = calItem.getApi();

      calendar.next();
      setDate(calendar.getDate());
    }
  };

  const closeDrawer = (): void => {
    setDrawer({
      isDrawerOpen: false,
    });
  };

  const openDrawer = (): void => {
    setDrawer({
      isDrawerOpen: true,
    });
  };

  const handleDateClick = (arg: any): void => {
    setDrawer({
      isDrawerOpen: true,
      eId: undefined,
      range: { start: arg.date.getTime(), end: arg.date.getTime() + 60 * 60 * 1000 },
    });
  };

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  useEffect(() => {
    const calItem = calendarRef.current;

    if (calItem) {
      const calendar = calItem.getApi();
      const changedView = mobile ? 'listWeek' : 'dayGridMonth';

      calendar.changeView(changedView);
      setView(changedView);
    }
  }, [mobile]);
  return (
    <>
      <Grid
        container
        spacing={2}
      >
        <Grid xs={12}>
          <Actions
            date={date}
            onNext={handleDateNext}
            onPrevious={handleDatePrev}
            onToday={handleDateToday}
            changeView={changeView}
            view={view}
          />
        </Grid>
        <Grid xs={12}>
          <FullCalendarWrapper>
            <FullCalendar
              allDayMaintainDuration
              initialDate={date}
              initialView={view}
              droppable
              editable
              eventDisplay="block"
              eventClick={handleEventSelect}
              eventDrop={handleEventDrop}
              dayMaxEventRows={4}
              eventResizableFromStart
              dateClick={handleDateClick}
              eventResize={handleEventResize}
              events={events}
              headerToolbar={false}
              height={660}
              ref={calendarRef}
              rerenderDelay={10}
              select={handleRangeSelect}
              selectable
              weekends
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            />
          </FullCalendarWrapper>
        </Grid>
      </Grid>
      <SwipeableDrawer
        variant="temporary"
        anchor="right"
        onClose={closeDrawer}
        onOpen={openDrawer}
        open={drawer.isDrawerOpen}
        elevation={9}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: { xs: 340, md: 540, lg: 720 },
            overflow: 'visible',
            flexDirection: 'row',
          },
        }}
        ModalProps={{
          BackdropProps: {
            sx: {
              backdropFilter: 'blur(3px) !important',
              background:
                theme.palette.mode === 'dark'
                  ? `linear-gradient(90deg, ${alpha(
                      darken(theme.palette.neutral[900], 0.2),
                      0.9
                    )} 10%, ${alpha(theme.palette.neutral[300], 0.16)} 100%) !important`
                  : `linear-gradient(90deg, ${alpha(theme.palette.neutral[900], 0.7)} 10%, ${alpha(
                      theme.palette.neutral[700],
                      0.7
                    )} 100%) !important`,
            },
          },
        }}
      >
        {drawer.isDrawerOpen && (
          <Box
            overflow="hidden"
            display="flex"
            flexDirection="column"
            width="100%"
          >
            <EventDrawer
              event={eventChosen}
              onAddComplete={closeDrawer}
              onCancel={closeDrawer}
              onDeleteComplete={closeDrawer}
              onEditComplete={closeDrawer}
              range={drawer.range}
            />
          </Box>
        )}
      </SwipeableDrawer>
    </>
  );
};

export default Component;
