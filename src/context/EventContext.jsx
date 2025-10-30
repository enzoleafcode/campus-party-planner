import { createContext, useContext, useState, useEffect } from "react";
import { fetchEvents } from "../services/api";

const EventContext = createContext();

export const useEventContext = () => {
  return useContext(EventContext);
};

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [likedEvents, setLikedEvents] = useState(() => {
    try {
      const saved = localStorage.getItem("likedEvents");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const setCity = (city) => {
    setSelectedCity(city);
  };

  const refreshEvents = async (city) => {
    const targetCity = city || selectedCity;
    try {
      const data = await fetchEvents(targetCity || null);
      setEvents(Array.isArray(data) ? data : []);
    } catch {
      setEvents([]);
    }
  };

  const toggleLike = (eventId) => {
    const id = String(eventId);
    setLikedEvents((prevLikes) => {
      if (prevLikes.includes(id)) {
        return prevLikes.filter((x) => x !== id);
      }
      return [...prevLikes, id];
    });
  };

  useEffect(() => {
    try {
      localStorage.setItem("likedEvents", JSON.stringify(likedEvents));
    } catch {}
  }, [likedEvents]);

  useEffect(() => {
    if (selectedCity) {
      refreshEvents(selectedCity);
    }
  }, [selectedCity]);

  useEffect(() => {
    refreshEvents(selectedCity);
  }, []);

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        selectedCity,
        setCity,
        refreshEvents,
        likedEvents,
        toggleLike,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
