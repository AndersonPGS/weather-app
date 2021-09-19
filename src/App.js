import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import BottomBar from "./components/BottomBar/BottomBar";
import MainBar from "./components/MainBar/MainBar";
import TopBar from "./components/TopBar/TopBar";

require("dotenv").config();

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState({});

  let getWeather = async (lat, lon) => {
    let res = await axios.get(
      "https://api.openweathermap.org/data/2.5/onecall",
      {
        params: {
          lat,
          lon,
          lang: "pt",
          units: "metric",
          appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        },
      }
    );
    setWeather(res.data);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  setInterval(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, 10 * 60 * 1000);

  if (location === false) {
    return (
      <div className="App">
        <p className="message">
          Permita o site acessar a localização para conseguir utilizar o site.
        </p>
      </div>
    );
  } else if (Object.keys(weather).length === 0) {
    return (
      <div className="App">
        <p className="message">Carregando clima...</p>
      </div>
    );
  } else {
    return (
      <div className="App">
        <TopBar />
        <MainBar weather={weather} />
        <BottomBar weather={weather} />
      </div>
    );
  }
}

export default App;
