import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const campaignModules = {
  1: { title: "Introdution", duration: "10", costPerRecipient: "0" },
};
const threatModules = {
  1: { title: "Session Hijacking", duration: "10", costPerRecipient: "4" },
  2: { title: "IP Spoofing", duration: "12", costPerRecipient: "6" },
  3: { title: "DDos", duration: "30", costPerRecipient: "15" },
  4: { title: "Man In The Middle", duration: "11", costPerRecipient: "7" },
  5: { title: "Phishing", duration: "3", costPerRecipient: "3" },
  6: { title: "Ransomware", duration: "6", costPerRecipient: "17" },
  7: {
    title: "Attack On IoT Devices",
    duration: "23 Min",
    costPerRecipient: "25",
  },
  8: { title: "Malware On Mobile", duration: "13 Min", costPerRecipient: "22" },
  9: { title: "Password Attack", duration: "17 Min", costPerRecipient: "13" },
};

const AddModules = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = () => {
    dispatch({ type: "ADD_MODULES", payload: { modules: 5, cost: "5,000" } });
    history.push("./schedule-campaign");
  };

  const renderMoules = (modules) => {
    return Object.values(modules).map((module, index) => {
      return (
        <div className="ui fluid card" key={index}>
          <div className="content">
            <div className="header">{module.title}</div>
            <div className="description">
              Playing Time <b>{module.duration} Min</b>
            </div>
            <div className="description">
              Cost Per Recipient <b>{module.costPerRecipient}$</b>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="ui grid">
      <div className="five wide column">
        <h2 className="ui center aligned header">Your Campaign</h2>
        <div className="ui middle aligned list">
          {renderMoules(campaignModules)}
        </div>
      </div>

      <div className="five wide column">
        <Link to="/dashboard" className="ui left floated secondary basic button">
          Discard
        </Link>
        <button
          onClick={onClick}
          className="ui right floated primary basic button"
          type="button"
        >
          Next
        </button>
      </div>

      <div className="five wide column">
        <h2 className="ui center aligned header">Threat Modules</h2>
        <div className="ui middle aligned list">
          {renderMoules(threatModules)}
        </div>
      </div>
    </div>
  );
};

export default AddModules;
