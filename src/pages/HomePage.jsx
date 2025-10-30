import EventList from "../components/EventList";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Link to="/stats">Voir les stats</Link>
      <EventList />
    </>
  );
}
export default HomePage;
