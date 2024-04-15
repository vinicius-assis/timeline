import { useContext, useState } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import EditField from "../EditField";
import "./style.css";
import CancelButton from "../CancelButton";
import ConfirmButton from "../ConfirmButton";

const EditForm = ({ item, onClose }) => {
  const { name, id, start, end } = item;
  const { editEvent } = useContext(TimelineContext);
  const [form, setForm] = useState({ name, start, end });
  const [error, setError] = useState('')

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    
    setForm((old) => ({
      ...old,
      [field]: value,
    }));
  };

  const handleConfirm = () => {
    editEvent(id, form, setError, onClose);
  };

  return (
    <div onChange={() => setError('')}>
      <div className="edit-wrapper full">
        <EditField
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="edit-wrapper">
        <EditField
          type="date"
          name="start"
          value={form.start}
          onChange={handleInputChange}
        />

        <EditField
          type="date"
          name="end"
          value={form.end}
          onChange={handleInputChange}
        />
        {error && <p className="error-message">{error}</p>}
        <CancelButton onClick={onClose} />
        <div className="border"></div>

        <ConfirmButton onClick={handleConfirm} />
      </div>
    </div>
  );
};

export default EditForm;
