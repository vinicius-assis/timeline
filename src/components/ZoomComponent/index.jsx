import { useEffect, useState } from "react";
import "./style.css";

const ZoomComponent = () => {
  const [zoom, setZoom] = useState(100);

  const handleIncreaseZoom = () => setZoom(zoom + 10);
  const handleDecreaseZoom = () => setZoom(zoom - 10);

  useEffect(() => {
    const timeline = document.querySelector(".timeline");
    timeline.style.transform = `scale(${zoom}%)`;
  }, [zoom]);

  return (
    <div className="zoom-container">
      <button disabled={zoom === 150} onClick={handleIncreaseZoom}>
        +
      </button>
      <button disabled={zoom === 60} onClick={handleDecreaseZoom}>
        -
      </button>
    </div>
  );
};

export default ZoomComponent;
