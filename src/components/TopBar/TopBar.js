import react, { useState } from "react";

import "./TopBar.css";

const TopBar = () => {
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const [DateComplete, setDateComplete] = useState("");
  const [Hours, setHours] = useState("");
  const [Minutes, setMinutes] = useState("");

  setInterval(() => {
    let date = new Date();
    setDateComplete(
      date.getDate() +
        " " +
        monthNames[date.getMonth()] +
        " " +
        date.getFullYear()
    );

    setHours(date.getHours());
    setMinutes(date.getMinutes());
  }, 1000);

  return (
    <div className="TopBar">
      <div className="TopBar__date">{DateComplete} </div>
      <div className="TopBar__hour">
        {Hours}
        <span>:</span>
        {Minutes}
      </div>
    </div>
  );
};

export default TopBar;
