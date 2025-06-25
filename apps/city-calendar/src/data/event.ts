interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  location: string;
  description: string;
}

const events: Event[] = [
  {
    id: "1",
    title: "City Council Meeting",
    start: new Date("2025-07-01T18:00:00"),
    end: new Date("2025-07-01T20:00:00"),
    location: "City Hall",
    description: "Monthly city council meeting to discuss local issues.",
  },
  {
    id: "2",
    title: "Community Clean-Up Day",
    start: new Date("2025-07-05T09:00:00"),
    end: new Date("2025-07-05T12:00:00"),
    location: "Central Park",
    description: "Join us for a community clean-up to keep our parks beautiful.",
  },
  {
    id: "3",
    title: "Local Art Exhibition",
    start: new Date("2025-07-10T10:00:00"),
    end: new Date("2025-07-10T18:00:00"),
    location: "City Art Gallery",
    description: "Explore the works of local artists at the annual art exhibition.",
  },
];

export const getEvents = async (): Promise<Event[]> => {
  return events;
};

export const getEventById = async (id: string): Promise<Event | undefined> => {
  return events.find((event) => event.id === id);
};

export const addEvent = async (event: Event): Promise<void> => {
  events.push(event);
};
