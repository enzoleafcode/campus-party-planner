// function HomePage() {
//   return <h1> Hello !</h1>;
// }
// export default HomePage;

import CitySelector from "../components/CitySelector";
import EventCard from "../components/EventCard";

const Header = () => (
  <header className="app-header">
    <h1>Campus Party Planner</h1>
    <CitySelector />
    <EventCard/>
  </header>
);

export default Header;
