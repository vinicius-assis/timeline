import { EditIcon } from "../Icons/Icons";
import "./style.css";

const EditButton = ({ onClick }) => {
  return (
    <button className="edit-button" onClick={onClick}>
      <EditIcon />
    </button>
  );
};

export default EditButton;
