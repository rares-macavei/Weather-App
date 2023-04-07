import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";
import logo from './assets/logo.png'
import { BiSearch } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

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
            <div className="header">
              <a href="#" className="logo">
                <img src={logo} alt="logo" className="" />
              </a>
              <div className="search-view">
                <div className="search-wrapper">
                  <input type="text" 
                  onKeyDown={enterKeyPressed} 
                  name="city" 
                  placeholder="Enter a city..." autocomplete="off" className="search-field"/>
                  <BiSearch className='m-icon leading-icon'/>
                </div>
              </div>
              <div className="link-container">
                <a href="https://github.com/rares-macavei/Weather-App" target="_blank">
                  <button className="link-div">
                    <BsGithub className="link-btn"/>
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/raresmacavei/" target="_blank">
                  <button className="link-div">
                    <BsLinkedin className="link-btn"/>
                  </button>
                </a>
              </div>
            </div>
              <div className="card card-sm highlight">
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
