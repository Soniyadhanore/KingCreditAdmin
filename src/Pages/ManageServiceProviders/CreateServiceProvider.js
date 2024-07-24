import { useState } from "react";
import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  Typography,
  Row,
  Col,
  Checkbox,
  Select,
  Upload,
  Switch,
} from "antd";
import { LeftOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
const blogCategory = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];
const CreateServiceProvider = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isEdit = searchParams.has("edit");
  const isPendingEdit = searchParams.has("invitation-pending-edit");
  const isPendingServiceView = searchParams.has("pending-service-view");
  const { TextArea } = Input;
  const navigate = useNavigate();
  const [value, setValue] = useState();
  return (
    <Card>
      <div className="flex items-center justify-between relative mb-4">
        <Typography className="text-xl font-semibold" align={"left"}>
          <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
          Create / Edit Service Provider
        </Typography>
        <div className="flex justify-end flex-wrap gap-3 items-center	">
          {isEdit && (
            <Switch
              checkedChildren="Active"
              unCheckedChildren="Inactive"
              defaultChecked
            />
          )}
          {isPendingEdit && (
            <Button type="primary" onClick={() => navigate("")}>
              Resend password link
            </Button>
          )}
          {isPendingServiceView && (
            <Button type="primary" onClick={() => navigate("")}>
              Resend password link
            </Button>
          )}
        </div>
      </div>
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
                  label="Mode data fetching"
                  name="Mode data fetching"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Mode data fetching.",
                    },
                  ]}
                >
                  <Checkbox>CRM</Checkbox>
                </Form.Item>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4">
                <Form.Item
                  label="Company name"
                  name="Company name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Company name.",
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
                  label="Contact person full  name"
                  name="Contact person full  name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Contact person full  name.",
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
                  label="Contact person email address"
                  name="Contact person email address"
                  rules={[
                    {
                      required: true,
                      message:
                        "Please enter your Contact person email address.",
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
                  label="Contact person phone number"
                  name="Contact person phone number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Contact person phone number.",
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
                  label="Industry"
                  name="Industry"
                  rules={[
                    {
                      required: true,
                      message: "Please select your Industry.",
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
                  label="User name or subdomain"
                  name="User name or subdomain"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your User name or subdomain.",
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
                  label="Logo or image"
                  name="Logo or image"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Logo or image.",
                    },
                  ]}
                >
                  <Upload>
                    <Button
                      className="h-[39px] w-full rounded-lg"
                      icon={<UploadOutlined />}
                    >
                      Click to Upload
                    </Button>
                  </Upload>
                </Form.Item>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4">
                <Form.Item
                  label="Business credentials"
                  name="Business credentials"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Business credentials.",
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
                  label="Supporting Documents"
                  name="Supporting Documents"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Supporting Documents.",
                    },
                  ]}
                >
                  <Upload>
                    <Button
                      className="h-[39px] w-full rounded-lg"
                      icon={<UploadOutlined />}
                    >
                      Click to Upload
                    </Button>
                  </Upload>
                </Form.Item>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4">
                <Form.Item
                  label="Service or product details"
                  name="Service or product details"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Service or product details.",
                    },
                  ]}
                >
                  <TextArea rows={4} maxLength={6} />
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      <Divider />
      <div className="flex justify-end gap-3">
        <Button>Cancel</Button>
        {isEdit ? (
          <Button type="primary">Save</Button>
        ) : isPendingEdit ? (
          <Button type="primary">Save</Button>
        ) : (
          <Button type="primary">Create</Button>
        )}
      </div>
    </Card>
  );
};
export default CreateServiceProvider;