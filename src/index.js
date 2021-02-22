import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// Icons
import MoreIcon from "./assets/more.svg";
import EyeIcon from "./assets/eye.svg";
import EyeIconBlue from "./assets/eyeblue.svg";
import ActionIcon from "./assets/action.svg";
import ActionIconBlue from "./assets/actionblue.svg";
import TimeIcon from "./assets/time.svg";
import TimeIconBlue from "./assets/timeblue.svg";
import ErrorIcon from "./assets/error.svg";
import ErrorIconBlue from "./assets/errorblue.svg";
// Components
import Tabs from "./components/tabs/tabs";
import SearchBox from "./components/search/search";
import Block from "./components/block/block";
// Utils
import flowy from "./utils/flowy.min.js";

const Index = () => {
  var spacing_x = 40;
  var spacing_y = 100;
  // Initialize Flowy
  function onGrab(block) {
    // When the user grabs a block
  }
  function onRelease() {
    // When the user releases a block
  }
  function onSnap(drag, first, parent) {
    // When a block snaps with another one
    var grab = drag.querySelector(".grabme");
    grab.parentNode.removeChild(grab);
    var blockin = drag.querySelector(".blockin");
    blockin.parentNode.removeChild(blockin);
    if (drag.querySelector(".blockelemtype").value == "1") {
      drag.innerHTML += `<div class='blockyleft'><img src=${EyeIconBlue}><p class='blockyname'>New visitor</p></div><div class='blockyright'><img src=${MoreIcon}></div><div class='blockydiv'></div><div class='blockyinfo'>When a <span>new visitor</span> goes to <span>Site 1</span></div>`;
    } else if (drag.querySelector(".blockelemtype").value == "2") {
      drag.innerHTML += `<div class='blockyleft'><img src=${ActionIconBlue}><p class='blockyname'>Action is performed</p></div><div class='blockyright'><img src=${MoreIcon}></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>Action 1</span> is performed</div>`;
    } else if (drag.querySelector(".blockelemtype").value == "3") {
      drag.innerHTML += `<div class='blockyleft'><img src=${TimeIconBlue}><p class='blockyname'>Time has passed</p></div><div class='blockyright'><img src=${MoreIcon}></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>10 seconds</span> have passed</div>`;
    } else if (drag.querySelector(".blockelemtype").value == "4") {
      drag.innerHTML += `<div class='blockyleft'><img src=${ErrorIconBlue}><p class='blockyname'>Error prompt</p></div><div class='blockyright'><img src=${MoreIcon}></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>Error 1</span> is triggered</div>`;
    }

    return true;
  }
  function onRearrange(block, parent) {
    // When a block is rearranged
    // return true;
  }
  useEffect(() => {
    flowy(
      document.getElementById("canvas"),
      onGrab,
      onRelease,
      onSnap,
      onRearrange,
      spacing_x,
      spacing_y
    );
  });

  return (
    <div>
      <div id="leftcard">
        <p id="header">Blocks</p>
        <SearchBox content="Search blocks" />
        <Tabs />
        <div id="blocklist">
          <Block
            icon={EyeIcon}
            title="New visitor"
            description="Triggers when somebody visits a specified page"
            id={1}
          />
          <Block
            icon={ActionIcon}
            title="Action is performed"
            description="Triggers when somebody performs a specified action"
            id={2}
          />
          <Block
            icon={TimeIcon}
            title="Time has passed"
            description="Triggers after a specified amount of time"
            id={3}
          />
          <Block
            icon={ErrorIcon}
            title="Error prompt"
            description="Triggers when a specified error happens"
            id={4}
          />
          <button className="btn-remove" onClick={() => flowy.deleteBlocks()}>
            Remove Block
          </button>
        </div>
      </div>
      <div id="canvas"></div>
    </div>
  );
};

export default Index;

ReactDOM.render(<Index />, document.querySelector("#root"));
