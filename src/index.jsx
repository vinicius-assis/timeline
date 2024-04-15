import React from "react";
import { render } from "react-dom";
import "./index.css";
import Timeline from "./components/Timeline";
import { TimelineProvider } from "./context/TimelineContext";

const App = () => (
  <TimelineProvider>
    <Timeline />
  </TimelineProvider>
);

render(<App />, document.getElementById("root"));
