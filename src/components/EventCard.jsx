import { useEventContext } from "../context/EventContext";
import "../styles/components/event-card.css";

function EventCard({ event }) {
 
  const { likedEvents, toggleLike } = useEventContext();

  if (!event) return null;

  const isLiked = likedEvents.includes (event.id);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function handleLikeClick() {
    toggleLike(event.id);
  }

  return (
    <div className="event-card">
      <img src={event.image} alt={event.name} className="event-card__image" />
      <div className="event-card__body">
        <h3 className="event-card__title">{event.name}</h3>
        <p className="event-card__info">📅{formatDate(event.date)}</p>
        <p className="event-card__info">🚩{event.location}</p>
        <p className="event-card__info">🔥{event.category}</p>
        <p className="event-card__info">{event.description}</p>
        <button
          className={`event-card__like-btn ${
            isLiked ? "event-card__like-btn--liked" : ""
          }`}
          onClick={handleLikeClick}
          aria-label={isLiked ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          {isLiked ? "❤" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default EventCard;



