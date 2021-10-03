// FinalStep.js
import React from "react";

function FinalStep(props) {
  return (
    <div style={{ textAlign: "left" }}>
      <p>
        <b>Name:</b> {props.state.name}
      </p>
      <p>
        <b>Surname:</b> {props.state.surname}
      </p>
      <p>
        <b>Email:</b> {props.state.email}
      </p>
      <p>
        <b>Phone:</b> {props.state.phone}
      </p>
    </div>
  );
}

export default FinalStep;