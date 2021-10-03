// Step1.js
import React from "react";
import { Input } from "antd";

const Step1 = (props) => {
  return (
    <div>
      <p>
        <Input
          addonBefore="First Name"
          name="name"
          value={props.getState("name", "")}
          onChange={props.handleChange}
        />
      </p>
      <p>
        <Input
          addonBefore="Last Name"
          name="surname"
          value={props.getState("surname", "")}
          onChange={props.handleChange}
        />
      </p>
    </div>
  );
};

export default Step1;
