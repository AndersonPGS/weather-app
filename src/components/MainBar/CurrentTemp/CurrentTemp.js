import image from "../../../images/chuva.png";

import "./CurrentTemp.css";

const CurrentTemp = () => {
  return (
    <div className="CurrentTemp">
      <img src={image} alt="Chuva fraca" />
      <span>Chuva fraca</span>
      <h1>
        27<span>º</span>
      </h1>
    </div>
  );
};

export default CurrentTemp;
