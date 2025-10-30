import CitySelector from "../components/CitySelector";
import EventList from "../components/EventList";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
    <header className="app-header">
    <h1>Campus Party Planner</h1>
    <CitySelector />
    <EventCard/>
    </header>
    <Link to="/stats">Voir les stats</Link>
    <EventList />
    </>
  );
}

export default HomePage;
