import React from "react";
import "./block.css";
import GrabMe from "../../assets/grabme.svg";
const Block = ({ icon, id, title, description }) => {
  return (
    <div>
      <div className="blockelem create-flowy noselect">
        <input
          type="hidden"
          name="blockelemtype"
          className="blockelemtype"
          value={id}
        />
        <div className="grabme">
          <img src={GrabMe} />
        </div>
        <div className="blockin">
          <div className="blockico">
            <span></span>
            <img src={icon} />
          </div>
          <div className="blocktext">
            <p className="blocktitle">{title}</p>
            <p className="blockdesc">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
