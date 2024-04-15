import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import "./style.css";

const AddButton = () => {
  const { setIsOpen } = useContext(TimelineContext);
  const handleOpenForm = () => setIsOpen((old) => !old);

  return (
    <button className="add-button" onClick={handleOpenForm}>
      +
    </button>
  );
};

export default AddButton;
