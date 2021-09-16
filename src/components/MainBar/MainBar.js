import CurrentTemp from "./CurrentTemp/CurrentTemp";
import "./MainBar.css";
import MoreInfo from "./MoreInfo/MoreInfo";

const MainBar = () => {
  return (
    <div className="MainBar">
      <CurrentTemp />
      <MoreInfo />
    </div>
  );
};

export default MainBar;
