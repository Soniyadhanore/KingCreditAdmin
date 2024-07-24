import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  Typography,
  Row,
  Col,
  Select,
  Switch,
} from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
const blogCategory = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];
const EditAffiliate = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  return (
    <Card>
      <Typography className="text-xl font-semibold" align={"left"}>
        <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
        Edit Affiliate
      </Typography>
      <Divider />
      <div className="min-h-[calc(100vh_-_305px)]">
        <Form
          layout="vertical"
          style={{
            //   maxWidth: 600,
            width: "100%",
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Row>
            <Col span={10}>
              <div className="mr-4">
                <Form.Item
                  label="Name "
                  name="Name "
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Name .",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4">
                <Form.Item
                  label="Email address"
                  name="Email address"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Email address.",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4">
                <Form.Item
                  label="Phone number"
                  name="Phone number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Phone number.",
                    },
                  ]}
                >
                  <PhoneInput
                    className="border border-[#d9d9d9] rounded-lg	px-[11px] h-[40px]"
                    international
                    defaultCountry="RU"
                    value={value}
                    onChange={setValue}
                  />
                </Form.Item>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4">
                <Form.Item
                  label="Country"
                  name="Country"
                  rules={[
                    {
                      required: true,
                      message: "Please select your Country.",
                    },
                  ]}
                >
                  <Select options={blogCategory} />
                </Form.Item>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4">
                <Form.Item
                  label="Status"
                  name="Status"
                  rules={[
                    {
                      required: true,
                      message: "Please select your Status.",
                    },
                  ]}
                >
                  <Switch />
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      <Divider />
      <div className="flex justify-end gap-3">
        <Button>Cancel</Button>
        <Button type="primary">Save</Button>
      </div>
    </Card>
  );
};
export default EditAffiliate;