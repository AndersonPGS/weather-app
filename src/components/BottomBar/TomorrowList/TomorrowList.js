import Tomorrow from "./Tomorrow/Tomorrow";
import "./TomorrowList.css";

const TomorrowList = ({ weather }) => {
  let TomorrowNumber = 0;
  return (
    <div className="TomorrowList">
      {weather.hourly.map((data, index) => {
        if (index === 24) {
          TomorrowNumber++;
          return <Tomorrow actived={true} data={data} />;
        } else if (TomorrowNumber >= 8) {
          // eslint-disable-next-line array-callback-return
          return;
        } else if ((index > 24) & (index % 2 !== 0)) {
          // eslint-disable-next-line array-callback-return
          return;
        } else if (index > 24) {
          TomorrowNumber++;
          return <Tomorrow actived={false} data={data} />;
        }
      })}
    </div>
  );
};

export default TomorrowList;
