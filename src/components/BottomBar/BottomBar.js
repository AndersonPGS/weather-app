import { useState } from "react";
import "./BottomBar.css";
import TodayList from "./TodayList/TodayList";
import TomorrowList from "./TomorrowList/TomorrowList";
import WeekList from "./WeekList/WeekList";

const BottomBar = ({ weather }) => {
  const [currentDiv, setCurrentDiv] = useState(0);

  function onClicked(index) {
    let divCurrent = document.querySelector("#div" + index);
    document.querySelectorAll(".actived").forEach((div) => {
      div.classList.remove("actived");
    });

    divCurrent.classList.add("actived");
    setCurrentDiv(index);
  }

  return (
    <div className="BottomBar">
      <div className="BottomBar__menu">
        <div
          className="BottomBar__tab actived"
          id="div0"
          onClick={() => onClicked(0)}
        >
          <h2>Hoje</h2>
        </div>
        <div className="BottomBar__tab" id="div1" onClick={() => onClicked(1)}>
          <h2>Amanhã</h2>
        </div>
        <div className="BottomBar__tab" id="div2" onClick={() => onClicked(2)}>
          <h2>Semana</h2>
        </div>
      </div>

      {currentDiv === 0 && <TodayList weather={weather} />}
      {currentDiv === 1 && <TomorrowList weather={weather} />}
      {currentDiv === 2 && <WeekList weather={weather} />}
    </div>
  );
};

export default BottomBar;
