import { getEvents } from "@/data/event";
export default async () => {
  const events = await getEvents();
  return (
    <div>
      <h2>Events</h2>
      { events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.id} data-key={event.id} className={`event-item ${(event.id === "1" ? " highlight" : "")}`}>
              <h3>{event.title}</h3>
              <p>
                <strong>When:</strong> {event.start.toLocaleString()} - {event.end.toLocaleString()}<br />
                <strong>Where:</strong> {event.location}<br />
                <strong>Description:</strong> {event.description}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};
