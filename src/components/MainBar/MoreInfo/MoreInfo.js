import clouds from "../../../assets/icons/clouds.png";
import feelsLike from "../../../assets/icons/feels-like.png";
import humidity from "../../../assets/icons/humidity.png";
import uv from "../../../assets/icons/uv.png";
import visibility from "../../../assets/icons/visibility.png";
import windSpeed from "../../../assets/icons/wind-speed.png";
import "./MoreInfo.css";


const MoreInfo = ({ weather }) => {
  let km = weather.current.visibility / 1000;
  return (
    <div className="MoreInfo">
      <div className="MoreInfo__title">
        <h1>Clima</h1>
        <h2>atual</h2>
      </div>
      <div className="MoreInfo__infos">
        <div className="MoreInfo__infos__info">
          <img src={feelsLike} alt="Sensação" />
          <h4>
            {Math.round(weather.current.feels_like)}
            <span>º</span>
          </h4>
          <p>sensação</p>
        </div>

        <div className="MoreInfo__infos__info">
          <img src={humidity} alt="Humidade" />
          <h4>
            {weather.current.humidity}
            <p>%</p>
          </h4>
          <p>humidade</p>
        </div>

        <div className="MoreInfo__infos__info">
          <img src={clouds} alt="Nuvens" />
          <h4>
            {weather.current.clouds}
            <p>%</p>
          </h4>
          <p>nuvens</p>
        </div>

        <div className="MoreInfo__infos__info">
          <img src={uv} alt="uv" />
          <h4>{weather.current.uvi}</h4>
          <p>uv</p>
        </div>

        <div className="MoreInfo__infos__info">
          <img src={visibility} alt="Visibilidade" />
          <h4>
            {km}
            <p>Km</p>
          </h4>
          <p>visibilidade</p>
        </div>

        <div className="MoreInfo__infos__info">
          <img src={windSpeed} alt="Velocidade Vento" />
          <h4>
            {Math.round(weather.current.wind_speed)}
            <p>km/h</p>
          </h4>
          <p>vento</p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
