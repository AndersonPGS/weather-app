import { useState } from "react";
import "./BottomBar.css";
import TodayList from "./TodayList/TodayList";
import TomorrowList from "./TomorrowList/TomorrowList";
import WeekList from "./WeekList/WeekList";

const BottomBar = ({ weather }) => {
  const [currentDiv, setCurrentDiv] = useState(0);

  return (
    <div className="BottomBar">
      <div className="BottomBar__menu">
        <div className="BottomBar__tab actived" onClick={setCurrentDiv(0)}>
          <h2>Hoje</h2>
        </div>
        <div className="BottomBar__tab" onClick={setCurrentDiv(1)}>
          <h2>Amanhã</h2>
        </div>
        <div className="BottomBar__tab" onClick={setCurrentDiv(2)}>
          <h2>Semana</h2>
        </div>
      </div>

      {() => {
        if (currentDiv === 0) {
          return <TodayList weather={weather} />;
        } else if (currentDiv === 1) {
          return <TomorrowList weather={weather} />;
        } else {
          return <WeekList weather={weather} />;
        }
      }}
    </div>
  );
};

export default BottomBar;
