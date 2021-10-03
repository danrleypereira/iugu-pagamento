import React from "react";
import { Form, Input, InputNumber, Button, Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 }
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const UserInfo = (props) => {
  const handleChange = (e) => console.log(e);
  const onFinish = (values) => {
    props.handlerSubmit(values);
  };
  return (
    <>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        style={{ marginTop: 50 }}
      >
        <Form.Item name={["user", "name"]} label="Nome da Empresa">
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email Comercial"
          rules={[{ type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "cep"]}
          label="CEP"
          rules={[{ type: "number", min: 1000000, max: 99999999 }]}
        >
          <InputNumber style={{width: 200}} />
        </Form.Item>
        <Form.Item
          name={["user", "cnpj"]}
          label="CNPJ"
          rules={[
            { type: "number", min: 10000000000000, max: 99999999999999 },
          ]}
        >
          <InputNumber style={{width: 200}} />
        </Form.Item>
        <Form.Item name={["user", "endereco"]} label="Endereço">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "pagamento"]} label="Forma de Pagamento">
          <Select
            size="default"
            initialvalues="pix"
            onChange={handleChange}
            style={{ width: 200 }}
          >
            <Option key="pix">Pix</Option>
            <Option key="cartao">Cartão de Crédito</Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Pronto
          </Button>
        </Form.Item>
        {/*
        */}
      </Form>
    </>
  );
};

export default UserInfo;
