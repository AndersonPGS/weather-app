import Today from "./Today/Today";
import "./TodayList.css";

const TodayList = ({ weather }) => {
  let TodayNumber = 0;
  return (
    <div className="TodayList">
      {weather.hourly.map((data, index) => {
        if (index === 0) {
          TodayNumber++;
          return <Today actived={true} data={data} />;
        } else if (TodayNumber >= 8) {
          // eslint-disable-next-line array-callback-return
          return;
        } else if (index % 2 !== 0) {
          // eslint-disable-next-line array-callback-return
          return;
        } else {
          TodayNumber++;
          return <Today actived={false} data={data} />;
        }
      })}
    </div>
  );
};

export default TodayList;
