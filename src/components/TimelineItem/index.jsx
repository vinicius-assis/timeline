import { useContext } from "react";
import "./style.css";
import { TimelineContext } from "../../context/TimelineContext";
import EventCard from "../EventCard";
import { getDateContent } from "../../helpers/getDateContent";

const TimelineItem = ({ period, prefix, monthIndex }) => {
  const { content } = useContext(TimelineContext);
  const contentByMonth = getDateContent(content, monthIndex);

  return (
    <div className={`container ${prefix}-container`}>
      <span className="period">{period}</span>
      <EventCard content={contentByMonth} prefix={prefix} />
    </div>
  );
};

export default TimelineItem;
