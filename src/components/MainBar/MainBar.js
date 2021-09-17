import CurrentTemp from "./CurrentTemp/CurrentTemp";
import "./MainBar.css";
import MoreInfo from "./MoreInfo/MoreInfo";

const MainBar = ({ weather }) => {
  return (
    <div className="MainBar">
      <CurrentTemp weather={weather} />
      <MoreInfo weather={weather} />
    </div>
  );
};

export default MainBar;
