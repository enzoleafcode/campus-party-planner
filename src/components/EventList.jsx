import EventCard from "../components/EventCard";
import { useEventContext } from "../context/EventContext";

function EventList() {
  const { events } = useEventContext();

  if (events.length === 0) {
    return <div className="event-list--empty">Aucun événement à afficher</div>;
  }

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList