import React from "react";

import { Button, Col, Row } from "antd";

import { Steps, Step } from "react-step-builder";
import Step1 from "./Step1.js";
import Step2 from "./Step2";
import FinalStep from "./FinaStep";

// import Navigation from "./Navigation";

const Navigation = (props) => {
  console.log({ props });
  return (
    <Row align="center">
      <Col>
        <Button type="primary" onClick={props.prev} style={{ marginRight: 10 }}>
          Previous
        </Button>
      </Col>
      <Col>
        <Button type="primary" onClick={props.next}>
          Next
        </Button>
      </Col>
    </Row>
  );
};

function CheckoutSteps() {
  const config = {
    navigation: {
      component: Navigation,
      location: "before", // or after
    },
  };
  return (
    <div className="Steps">
      <Steps config={config}>
        {/*
          <Step component={Step1} />
          <Step component={Step2} />
          <Step component={FinalStep} /> 
        */}
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={FinalStep} />
      </Steps>
    </div>
  );
}

export default CheckoutSteps;
