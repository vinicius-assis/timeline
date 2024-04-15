import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import CancelButton from "../CancelButton";
import ConfirmButton from "../ConfirmButton";
import "./style.css";

const RemoveForm = ({ onClose, id }) => {
  const { removeEvent } = useContext(TimelineContext);
  const handleRemove = () => removeEvent(id);

  return (
    <div className="remove-form">
      <p>
        Removing this item will not be possible to recover.
        <br />
        Are you sure?
      </p>
      <CancelButton onClick={onClose} />
      <div className="border"></div>

      <ConfirmButton onClick={handleRemove} />
    </div>
  );
};

export default RemoveForm;
