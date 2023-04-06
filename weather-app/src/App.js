import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";
import logo from './assets/logo.png'

function App() {
  const [city, setCity] = useState("Cluj-Napoca");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city);
      setWeather(data);
    };

    fetchWeatherData();
  }, [city]);


  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="app">
      <div className="overlay">
        
        {weather && (
          <div className="container">
            <a href="#" className="logo">
              <img src={logo} alt="logo" className="" />
            </a>
            <div className="section section__inputs">
              <input
                onKeyDown={enterKeyPressed}
                type="text"
                name="city"
                placeholder="Enter City..."
                className="search-view"
              />
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="weatherIcon" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °C`}</h1>
              </div>
            </div>

            {/* bottom description */}
            <Descriptions weather={weather}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
