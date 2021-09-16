import image from "../../images/chuva.png";
import "./MainBar.css";

const MainBar = () => {
  return (
    <div className="MainBar">
      <div className="MainBar__current-temp">
        <img src={image} alt="Chuva fraca" />
        <span>Chuva fraca</span>
        <h1>
          27<span>º</span>
        </h1>
      </div>
      <div className="MainBar__more-info">
        <div className="MainBar__more-info__title">
          <h1>Salvador</h1>
          <h2>Bahia</h2>
        </div>
        <div className="MainBar__more-info__infos">
          <div className="MainBar__more-info__infos__info">
            <img src="" alt="Sensação" />
            <h4>26º</h4>
            <p>sensação</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBar;
