import EventCard from "../components/EventCard";
import { useEventContext } from "../context/EventContext";
import {Grid} from "@mui/material";

function EventList() {
  const { events } = useEventContext();

  if (events.length === 0) {
    return <div className="event-list--empty">Aucun événement à afficher</div>;
  }

  return (
    <Grid container spacing={2}>
      {events.map((event) => (
        <Grid key={event.id} size={{ lg: 3, md: 4, sm: 6, xs: 12 }}>
          <EventCard key={event.id} event={event} />
        </Grid>
      ))}
    </Grid>
  );
}

export default EventList