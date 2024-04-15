import { useState } from "react";
import EditButton from "../EditButton";
import "./style.css";
import EditForm from "../EditForm";
import CancelButton from "../CancelButton";
import RemoveForm from "../RemoveForm";

const SwapContent = ({ action, item, onClose }) => {
  if (!item.id) return null;

  if (action === "edit") {
    return <EditForm item={item} onClose={onClose} />;
  }

  return <RemoveForm onClose={onClose} id={item.id} />;
};

const EventCard = ({ content, prefix }) => {
  const [modal, setModal] = useState({ id: "", action: "" });

  const handleOpenEditMode = (id) => setModal({ action: "edit", id });
  const handleOpenRemoveMode = (id) => setModal({ action: "remove", id });
  const handleClose = () => setModal({ action: "", id: "" });

  if (!content?.length) {
    return <div className="empty-period" />;
  }

  return content.map((item, index, array) => {
    const { name, start, end, id } = item;
    const firstItem = index === 0;
    const lastItemBorder = array.length - 1 === index ? "border-bottom" : "";
    return (
      <div
        key={`${name}_${start}_${index}`}
        className={`text-box ${firstItem ? "border-top" : ""}${lastItemBorder}`}
      >
        {modal.action && modal.id === id ? (
          <SwapContent
            action={modal.action}
            item={item}
            onClose={handleClose}
          />
        ) : (
          <>
            <div className="title-wrapper">
              <h2>{name}</h2>
              <CancelButton onClick={() => handleOpenRemoveMode(id)} />
              <EditButton onClick={() => handleOpenEditMode(id)} />
            </div>
            <small>{`${start} | ${end}`}</small>
          </>
        )}
        {firstItem && <span className={`${prefix}-container-arrow`}></span>}
      </div>
    );
  });
};

export default EventCard;
