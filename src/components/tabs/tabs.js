import React, { useState } from "react";
import "./tabs.css";
const Tabs = () => {
  const [tab, setTab] = useState("triggers");

  const toggleTab = (e) => {
    setTab(e.target.id);
  };
  return (
    <div>
      <div id="subnav">
        <div
          id="triggers"
          className={`nav${tab === "triggers" ? "active" : "disabled"}`}
          onClick={toggleTab}
        >
          Triggers
        </div>
        <div
          id="actions"
          className={`nav${tab === "actions" ? "active" : "disabled"}`}
          onClick={toggleTab}
        >
          Actions
        </div>
        <div
          id="loggers"
          className={`nav${tab === "loggers" ? "active" : "disabled"}`}
          onClick={toggleTab}
        >
          Loggers
        </div>
      </div>
    </div>
  );
};

export default Tabs;
