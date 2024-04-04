import { addDays, setHours, setMinutes, subDays } from 'date-fns';
import type { Event } from 'src/models/calendar';
import { copy } from 'src/utils/copy';
import { randomId } from 'src/utils/randomId';

let events: Event[] = [
  {
    id: '1',
    allDay: false,
    color: '#368711',
    description: '',
    end: setHours(setMinutes(subDays(new Date(), 3), 14), 6).getTime(),
    start: setHours(setMinutes(subDays(new Date(), 1), 8), 6).getTime(),
    title: 'Investors Meeting',
  },
  {
    id: '2',
    allDay: false,
    color: '#EB0831',
    description: '',
    end: setHours(setMinutes(addDays(new Date(), 2), 5), 4).getTime(),
    start: setHours(setMinutes(addDays(new Date(), 2), 7), 3).getTime(),
    title: 'UX Design Gathering',
  },
  {
    id: '3',
    allDay: false,
    color: '#106EFB',
    description: '',
    end: setHours(setMinutes(subDays(new Date(), 3), 3), 1).getTime(),
    start: setHours(setMinutes(subDays(new Date(), 4), 3), 2).getTime(),
    title: 'Set up a board meeting',
  },
  {
    id: '4',
    allDay: false,
    color: '#106EFB',
    description: '',
    end: setHours(setMinutes(addDays(new Date(), 5), 1), 4).getTime(),
    start: setHours(setMinutes(addDays(new Date(), 5), 1), 4).getTime(),
    title: 'Call all developers',
  },
];

class CalendarApi {
  getEvents(): Promise<Event[]> {
    return Promise.resolve(copy(events));
  }
  //@ts-ignore
  createEvent(data): Promise<Event> {
    return new Promise((resolve, reject) => {
      try {
        const { allDay, description, end, start, title } = data;

        const clonedEvents = copy(events);

        const event = {
          id: randomId(),
          allDay,
          description,
          end,
          start,
          title,
        };

        clonedEvents.push(event);
        events = clonedEvents;

        resolve(copy(event));
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }

  //@ts-ignore
  updateEvent({ eventId, update }): Promise<Event> {
    return new Promise((resolve, reject) => {
      try {
        const clonedEvents = copy(events);

        const event = events.find((_event) => _event.id === eventId);

        if (!event) {
          reject(new Error('Event not found'));
          return;
        }

        Object.assign(event, update);

        events = clonedEvents;

        resolve(copy(event));
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }

  deleteEvent(eventId: string): Promise<true> {
    return new Promise((resolve, reject) => {
      try {
        const clonedEvents = copy(events);

        const event = events.find((_event) => _event.id === eventId);

        if (!event) {
          reject(new Error('Event not found'));
          return;
        }

        events = events.filter((_event) => _event.id !== eventId);

        events = clonedEvents;

        resolve(true);
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const calendar = new CalendarApi();
