import { ConfirmIcon } from "../Icons/Icons";
import "./style.css";

const ConfirmButton = ({ onClick }) => {
  return (
    <button className="confirm-button" onClick={onClick}>
      <ConfirmIcon />
    </button>
  );
};

export default ConfirmButton;
