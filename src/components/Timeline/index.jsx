import { useContext } from "react";
import AddButton from "../AddButton";
import EventForm from "../EventForm";
import TimelineItem from "../TimelineItem";
import ZoomComponent from "../ZoomComponent";
import "./style.css";
import { TimelineContext } from "../../context/TimelineContext";

const Timeline = () => {
  const { isOpen } = useContext(TimelineContext);
  const months = [...Array(12).keys()]
    .map((key) => new Date(0, key).toLocaleString("en", { month: "long" }))
    .map((item) => item.slice(0, 3));

  return (
    <>
      {isOpen && <EventForm />}
      <AddButton />
      <div className="timeline">
        {months?.map((month, index) => {
          const prefix = index % 2 === 0 ? "left" : "right";
          return (
            <TimelineItem
              key={month}
              period={month}
              prefix={prefix}
              monthIndex={index}
            />
          );
        })}
      </div>
      {!isOpen && <ZoomComponent />}
    </>
  );
};

export default Timeline;
