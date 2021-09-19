import "./BottomBar.css";
import TodayList from "./TodayList/TodayList";

const BottomBar = ({ weather }) => {
  return (
    <div className="BottomBar">
      <div className="BottomBar__menu">
        <div className="BottomBar__tab actived">
          <h2>Hoje</h2>
        </div>
        <div className="BottomBar__tab">
          <h2>Amanhã</h2>
        </div>
        <div className="BottomBar__tab">
          <h2>Semana</h2>
        </div>
      </div>

      <TodayList weather={weather} />
    </div>
  );
};

export default BottomBar;
