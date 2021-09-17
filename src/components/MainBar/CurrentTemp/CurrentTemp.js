import "./CurrentTemp.css";
import ImageSelector from "./ImageSelector/ImageSelector";

const CurrentTemp = ({ weather }) => {
  return (
    <div className="CurrentTemp">
      <img
        src={ImageSelector(weather.current.weather[0].icon)}
        alt={weather.current.weather[0].main}
      />
      <div className="CurrentTemp__Title">
        <div></div>
        <span>{weather.current.weather[0].description}</span>
      </div>
      <h1>
        {Math.round(weather.current.temp)}
        <span>º</span>
      </h1>
    </div>
  );
};

export default CurrentTemp;
