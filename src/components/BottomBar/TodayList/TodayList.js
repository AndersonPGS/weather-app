import Today from "./Today/Today";
import "./TodayList.css";

const TodayList = ({ weather }) => {
  return (
    <div className="TodayList">
      {weather.hourly.map((data, index) => {
        if (index === 0) {
          return <Today actived={true} data={data} />;
        } else if (index >= 8) {
          // eslint-disable-next-line array-callback-return
          return;
        } else {
          return <Today actived={false} data={data} />;
        }
      })}
    </div>
  );
};

export default TodayList;
