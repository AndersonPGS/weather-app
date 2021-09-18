import Today from "./Today/Today";
import "./TodayList.css";

const TodayList = () => {
  return (
    <div className="TodayList">
      <Today actived={true} />
      <Today />
      <Today />
      <Today />
      <Today />
      <Today />
      <Today />
      <Today />
    </div>
  );
};

export default TodayList;
