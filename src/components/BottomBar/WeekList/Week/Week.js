import "./Week.css";
import ImageSelector from "../../../Functions/ImageSelector/ImageSelector";

const Week = ({ actived, data }) => {
  const unixTime = data.dt;
  const date = new Date(unixTime * 1000);
  const day = date.toLocaleDateString("pt-BR", { weekday: "long" });
  return (
    <div className={`Week ${actived ? "active" : ""}`}>
      <p className="Week__day">{day.replace("-feira", "")}</p>

      <div className="imgDiv">
        <img
          src={ImageSelector(data.weather[0].icon)}
          alt=""
          className="Week__img"
        />
      </div>

      <p className="Week__temp">
        {Math.round(data.temp.day)}
        <span>º</span>
      </p>

      <p className="Week__minmax">
        {Math.round(data.temp.min)}
        <span>º</span>
        <strong>/</strong>
        {Math.round(data.temp.max)}
        <span>º</span>
      </p>
    </div>
  );
};

export default Week;
