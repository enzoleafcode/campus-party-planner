import CitySelector from "../components/CitySelector";
import EventList from "../components/EventList";
import { Link } from "react-router-dom";
import "../styles/components/home.css";
import "../styles/components/event-list.css";

function HomePage() {
  return (
    <>
      <header className="app-header" role="banner">
        <div className="container header-inner">
          <h1 className="brand">Campus Party Planner</h1>
          <div className="header-actions">
            <CitySelector />
            <Link className="btn btn--primary" to="/stats" aria-label="Voir les statistiques">
              Voir les stats
            </Link>
          </div>

        </div>
      </header>

      <main className="app-main" role="main">
        <section className="container">
          <EventList />
        </section>
      </main>
    </>
  );
}

export default HomePage;
