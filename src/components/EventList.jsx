import { useEventContext } from "../context/EventContext"
import EventCard from "../components/EventCard";

function EventList() {
    const { events } = useEventContext()

    function displayEventCard() {
        if (events.length == 0) {
            return (
                <>
                    <p className="event-list--empty">
                        Aucun évènement à afficher
                    </p>
                </>
            )
        }
        for (let index = 0; index < events.length; index++) {
            <>
                <EventCard />
            </>
        }
    }

    return displayEventCard();

}
export default EventList