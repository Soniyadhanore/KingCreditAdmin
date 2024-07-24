import { Card, Divider, Typography, Row, Col, Tabs, Button } from "antd";
import { LeftOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import TabPane from "antd/es/tabs/TabPane";
import Opportunity from "./AffiliateDetailTabs/Opportunity";
import Commission from "./AffiliateDetailTabs/Commission";
const AffiliateDetail = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <div className="flex items-center justify-between relative mb-4">
        <Typography className="text-xl font-semibold" align={"left"}>
          <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
          Affiliate Detail
        </Typography>
        <div className="flex justify-end flex-wrap gap-3 items-center	">
          <Button
            type="primary"
            onClick={() => navigate("/edit-affiliates")}
            icon={<EditOutlined />}
          >
            Edit
          </Button>
          <Button type="primary" icon={<DeleteOutlined />}>
            Delete
          </Button>
        </div>
      </div>
      <Divider />
      <div>
        <Row>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">Affiliate ID</div>
              <div className="text-sm">#12345</div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">Name </div>
              <div className="text-sm">Noah Wilson</div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">Email address</div>
              <div className="text-sm">Noah123@gmail.com</div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">Phone number</div>
              <div className="text-sm">9876543219</div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">Country</div>
              <div className="text-sm">USA</div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">
                User name or subdomain URL
              </div>
              <div className="text-sm">noah12</div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">Status</div>
              <div className="text-sm">Active</div>
            </div>
          </Col>
        </Row>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Opportunity" key="1">
            <Opportunity />
          </TabPane>
          <TabPane tab="Commission " key="2">
            <Commission />
          </TabPane>
        </Tabs>
      </div>
    </Card>
  );
};
export default AffiliateDetail;