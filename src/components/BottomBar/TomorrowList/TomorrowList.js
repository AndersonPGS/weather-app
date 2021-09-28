/* eslint-disable array-callback-return */
import Tomorrow from "./Tomorrow/Tomorrow";
import "./TomorrowList.css";

const TomorrowList = ({ weather }) => {
  let TomorrowNumber = 0;
  return (
    <div className="TomorrowList">
      {weather.hourly.map((data, index) => {
        if (index === 24) {
          TomorrowNumber++;
          return <Tomorrow actived={true} data={data} key={index} />;
        } else if (TomorrowNumber >= 8) {
          return;
        } else if ((index > 24) & (index % 2 !== 0)) {
          return;
        } else if (index > 24) {
          TomorrowNumber++;
          return <Tomorrow actived={false} data={data} key={index} />;
        }
      })}
    </div>
  );
};

export default TomorrowList;
