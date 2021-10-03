import React from "react";
import { Row, Col, Divider, Steps, Button } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  CreditCardOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import InvoiceServer from "../../services/data-server/Invoice.js";

import ProductInfo from "../../Components/Checkout/ProductInfo/index.jsx";

import UserInfo from "../../Components/Checkout/UserInfo/index";

import CheckoutSteps from "../../Components/Checkout/Steps/index.jsx";

import "./index.css";

const { Step } = Steps;

const Checkout = () => {
  const [current, setCurrent] = React.useState(0);
  const [userData, setUserData] = React.useState({});

  const saveData = (values) => {
    console.log(values);
    setUserData(values);
    InvoiceServer.PostInvoice(
      "email@compuletra.com.br",
      "qualuer coisa server",
      "produto bem vindo"
    );
    next();
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      key: "info",
      title: "Dados da Empresa",
      content: <UserInfo handlerSubmit={(values) => saveData(values)} />,
      status: "finish",
      icon: <SolutionOutlined />,
    },
    {
      key: "payment",
      title: "Pagamento",
      content: "payment",
      status: "process",
      icon: <CreditCardOutlined />,
    },
    {
      key: "paid",
      title: "Pago",
      content: "paid",
      status: "wait",
      icon: <SmileOutlined />,
    },
  ];

  return (
    <div className="checkout">
      <Divider orientation="left">Checkout de Pagamento</Divider>
      <Row
        style={{
          backgroundColor: "greenyellow",
        }}
        className="shadow-box"
      >
        <Col span={2} style={{ padding: "0 15px" }}>
          {current > 0 && (
            <Button style={{ margin: "0 0px" }} onClick={() => prev()} ghost>
              Previous
            </Button>
          )}
        </Col>
        <Col span={20}>
          <Steps current={current}>
            {/* 
          {steps.map((item) => (
            <Step
              key={item.key}
              title={item.title}
              status={item.status}
              icon={item.icon}
            />
          ))}
          
        */}
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </Col>
        <Col span={2} style={{ padding: "0 30px" }}>
          {current < steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => next()}
              style={{ margin: "0px 0px" }}
              ghost
            >
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => alert("Processing complete!")}
              ghost
            >
              Done
            </Button>
          )}
        </Col>
        <div className="steps-action"></div>
      </Row>
      <Row style={{ backgroundColor: "red" }} className="shadow-box">
        {/*
          <Step status="finish" title="Dados Pessoais" icon={<UserOutlined />} />
          <Step status="finish" title="Dados de Pagamento" icon={<SolutionOutlined />} />
          <Step status="process" title="Pagamento" icon={<CreditCardOutlined />} />
          <Step status="wait" title="Pago" icon={<SmileOutlined />} />
        <Steps>
            <Step status="finish" title="Login" icon={<UserOutlined />} />
            <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
            <Step status="process" title="Pay" icon={<LoadingOutlined />} />
            <Step status="wait" title="Done" icon={<SmileOutlined />} />
        </Steps>
      */}
        <Col flex={4} style={{ backgroundColor: "yellow" }}>
          {/*<CheckoutSteps />
          
          */}
          <div className="steps-content">{steps[current].content}</div>
        </Col>
        <Col flex={1} style={{ backgroundColor: "white" }}>
          <ProductInfo />
        </Col>
      </Row>
    </div>
  );
};

export default Checkout;
