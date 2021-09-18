import "./Today.css";

import img from "../../../../assets/images/02d.png";

const Today = ({ actived }) => {
  return (
    <div className="Today">
      <p className="Today__hour">12:00</p>
      <img src={img} alt="" className="Today__img" />
      <p className="Today__temp">
        20<span>º</span>
      </p>
    </div>
  );
};

export default Today;
