import { useEventContext } from "../context/EventContext";
import "../styles/components/city-selector.css";

function CitySelector() {
  const { selectedCity, setCity, cities } = useEventContext();

function handleCityChange(event) {
  setCity(event.target.value);
}

  return (
    <div className="city-selector">
      <label className="city-selector__label" htmlFor="city-select">
        Ville :
      </label>
      <select
        id="city-select"
        className="city-selector__select"
        value={selectedCity || ''}
        onChange={handleCityChange}
      >
        <option value="">Toutes les villes</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
