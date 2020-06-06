import React from "react";
import Modal from "./modal";

function hardnessModal(hardness) {
  return (
    <div>
      <p style={{ display: "inline", margin: "0" }}>{hardness} </p>
      <img
        alt="more info"
        src={require("../assets/questionMark.png")}
        data-toggle="modal"
        data-target="#hardnessModal"
        style={{
          height: "20px",
          width: "20px",
          display: "inline",
          marginTop: "-3px",
        }}
      />
      <Modal
        content={
          <img
            src={require("../assets/hardnessChart.png")}
            alt="rubber hardness chart"
            style={{ height: "auto", width: "100%", display: "block" }}
          />
        }
        title="Hardness Chart"
        id="hardnessModal"
      />
    </div>
  );
}

export default hardnessModal;
