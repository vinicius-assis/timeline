import { useContext, useState } from "react";
import EditField from "../EditField";
import { TimelineContext } from "../../context/TimelineContext";
import "./style.css";
import CancelButton from "../CancelButton";
import ConfirmButton from "../ConfirmButton";

const EventForm = () => {
  const [error, setError] = useState('');
  const { setIsOpen, addEvent } = useContext(TimelineContext);

  const [form, setForm] = useState({ name: "", start: "", end: "" });

  const handleClose = () => setIsOpen(false);
  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    setForm((old) => ({
      ...old,
      [field]: value,
    }));
  };

  const handleConfirm = () => {
    if (Object.values(form).some((field) => !field)) {
      setError("Please fill in all fields, I can't guess at this time.");
    } else {
      addEvent(form, setError, handleClose);
    }
  };

  return (
    <div className="event-form-layer" onChange={() => setError('')}>
      <button className="close-button" onClick={() => setIsOpen(false)}>
        x
      </button>
      <div className="event-form-container">
        <label htmlFor="name">Name</label>
        <div className="edit-wrapper">
          <EditField
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <label htmlFor="name">Start</label>
        <div className="edit-wrapper">
          <EditField
            type="date"
            name="start"
            value={form.start}
            onChange={handleInputChange}
            required
          />
        </div>
        <label htmlFor="name">End</label>
        <div className="edit-wrapper">
          <EditField
            type="date"
            name="end"
            value={form.end}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="button-wrapper">
          {error && <p className="error-message">{error}</p>}
          <CancelButton onClick={handleClose} />
          <div className="border"></div>
          <ConfirmButton onClick={handleConfirm} />
        </div>
      </div>
    </div>
  );
};

export default EventForm;
