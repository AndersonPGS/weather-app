import "./MoreInfo.css";

import feelsLike from "../../../assets/images/feels-like.png";
import clouds from "../../../assets/images/clouds.png";
import humidity from "../../../assets/images/humidity.png";
import uv from "../../../assets/images/uv.png";
import visibility from "../../../assets/images/visibility.png";
import windSpeed from "../../../assets/images/wind-speed.png";

const MoreInfo = () => {
  return (
    <div className="MoreInfo">
      <div className="MoreInfo__title">
        <h1>Salvador</h1>
        <h2>Bahia</h2>
      </div>
      <div className="MoreInfo__infos">
        <div className="MoreInfo__infos__info">
          <img src={feelsLike} alt="Sensação" />
          <h4>
            26<span>º</span>
          </h4>
          <p>sensação</p>
        </div>

        <div className="MoreInfo__infos__info">
          <img src={humidity} alt="Humidade" />
          <h4>
            60<p>%</p>
          </h4>
          <p>humidade</p>
        </div>

        <div className="MoreInfo__infos__info">
          <img src={clouds} alt="Nuvens" />
          <h4>
            10<p>%</p>
          </h4>
          <p>nuvens</p>
        </div>

        <div className="MoreInfo__infos__info">
          <img src={uv} alt="uv" />
          <h4>3.48</h4>
          <p>uv</p>
        </div>

        <div className="MoreInfo__infos__info">
          <img src={visibility} alt="Visibilidade" />
          <h4>
            1000<p>m</p>
          </h4>
          <p>visibilidade</p>
        </div>

        <div className="MoreInfo__infos__info">
          <img src={windSpeed} alt="Velocidade Vento" />
          <h4>
            4<p>km/h</p>
          </h4>
          <p>vento</p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
