import { CancelIcon } from "../Icons/Icons";
import "./style.css";

const CancelButton = ({ onClick }) => {
  return (
    <button className="cancel-button" onClick={onClick}>
      <CancelIcon />
    </button>
  );
};

export default CancelButton;
