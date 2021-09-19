import "./Today.css";
import ImageSelector from "../../../Functions/ImageSelector/ImageSelector";

const Today = ({ actived, data }) => {
  const unixTime = data.dt;
  const date = new Date(unixTime * 1000);
  const currentHour = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className={`Today ${actived ? "active" : ""}`}>
      <p className="Today__hour">{currentHour}</p>
      <img
        src={ImageSelector(data.weather[0].icon)}
        alt=""
        className="Today__img"
      />
      <p className="Today__temp">
        {Math.round(data.temp)}
        <span>º</span>
      </p>
    </div>
  );
};

export default Today;
