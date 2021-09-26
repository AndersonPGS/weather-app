import "./Tomorrow.css";
import ImageSelector from "../../../Functions/ImageSelector/ImageSelector";

const Tomorrow = ({ actived, data }) => {
  const unixTime = data.dt;
  const date = new Date(unixTime * 1000);
  const currentHour = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className={`Tomorrow ${actived ? "active" : ""}`}>
      <p className="Tomorrow__hour">{currentHour}</p>
      <img
        src={ImageSelector(data.weather[0].icon)}
        alt=""
        className="Tomorrow__img"
      />
      <p className="Tomorrow__temp">
        {Math.round(data.temp)}
        <span>º</span>
      </p>
    </div>
  );
};

export default Tomorrow;
