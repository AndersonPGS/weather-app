/* eslint-disable array-callback-return */
import Week from "./Week/Week";
import "./WeekList.css";

const WeekList = ({ weather }) => {
  return (
    <div className="WeekList">
      {weather.daily.map((data, index) => {
        if (index === 0) {
          return <Week actived={true} data={data} />;
        } else {
          return <Week actived={false} data={data} />;
        }
      })}
    </div>
  );
};

export default WeekList;
