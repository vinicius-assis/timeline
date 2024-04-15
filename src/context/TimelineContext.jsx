import { createContext, useEffect, useState } from "react";
import timelineItems from "../timelineItems";
import { getSessionData, setSessionData } from "../helpers/sessionControll";
import { orderContentByDate } from "../helpers/orderContentByDate";
import invalidDate from "../helpers/invalidDate";
const INITIAL_VALUE = [...timelineItems];

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [content, setContent] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const editEvent = (eventId, form, setError, onClose) => {
    const hasError = invalidDate(form.start, form.end)
    if (hasError) {
      setError(hasError)
    } else {
      setContent((oldContent) => {
        const clone = [...oldContent];
        const index = clone.findIndex((item) => item.id === eventId);
        clone[index] = { ...clone[index], ...form };

        const orderEvents = orderContentByDate(clone);
        setSessionData(orderEvents);
        return orderEvents;
      });
      onClose()
    }
  };

  const addEvent = (data, setError, onClose) => {
    const lastId = content.sort((a, b) => a.id + b.id)[0].id;
    const hasError = invalidDate(form.start, form.end)
    if (hasError) {
      setError(hasError)
    } 
    else {
      const newItem = {
        id: lastId + 1,
        ...data,
      };
      const mergedItems = [...content, newItem];
      const orderEvents = orderContentByDate(mergedItems);
      setSessionData(orderEvents);
      setContent(orderEvents);
      onClose()
    }
  };

  const removeEvent = (eventId) => {
    const cleanContent = content.filter(({ id }) => eventId !== id);
    setSessionData(cleanContent);
    setContent(cleanContent);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const sessionData = getSessionData();
    const orderData = orderContentByDate(sessionData || INITIAL_VALUE);
    setContent(orderData);
  }, []);

  return (
    <TimelineContext.Provider
      value={{
        content,
        setContent,
        editEvent,
        isOpen,
        setIsOpen,
        addEvent,
        removeEvent,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};
