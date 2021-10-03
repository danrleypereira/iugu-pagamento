import React from "react";
import { Row, Col, Divider, Button, Card, Descriptions, Space } from "antd";

const ProductInfo = () => {
  return (
    <div style={{ padding: 20 }}>
      <Row>
        <Space align="center">
          <Descriptions
            title="Responsive Descriptions"
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
            bordered
          >
            <Descriptions.Item label="Produto">Vistomobi</Descriptions.Item>
            {/*



                <Descriptions.Item label="Preço">R$80.00</Descriptions.Item>
                <Descriptions.Item label="Disconto">R$20.00</Descriptions.Item>
            */}
            <Descriptions.Item label="Total">$60.00</Descriptions.Item>
          </Descriptions>
        </Space>
      </Row>
      <Row>
      <Space align="baseline">
        <Button type="primary">Confirmar pedido</Button>
      </Space>
      </Row>
    </div>
  );
};

export default ProductInfo;
