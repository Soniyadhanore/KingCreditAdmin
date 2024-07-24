import { useState } from "react";
import {
  Button,
  message,
  Steps,
  theme,
  Card,
  Typography,
  Form,
  Select,
  Input,
  Upload,
  Switch,
  Row,
  Col,
  Radio,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  LeftOutlined,
  UploadOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const CreateOpportunity = () => {
  const OpportunityImage = {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    accept: ".jpg, .jpeg, .png, .gif", // only allow image files
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
  };
  const serviceProviderList = [
    {
      value: "Gig Worker",
      label: "Gig Worker",
    },
    {
      value: " Vantage iHub",
      label: " Vantage iHub",
    },
    {
      value: "Gig Worker",
      label: "Gig Worker",
    },
  ];
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const steps = [
    {
      title: "Step 1",
      content: (
        <div className="w-2/3">
          <Form layout="vertical" name="step1">
            <Form.Item
              label="Select service provider"
              name="service provider"
              rules={[
                { required: true, message: "Please select service provider!" },
              ]}
            >
              <Select
                size="large"
                placeholder="Please select"
                options={serviceProviderList}
              />
            </Form.Item>
            <Form.Item
              label="Opportunity name"
              name="Opportunity name"
              rules={[
                { required: true, message: "Please select service provider!" },
              ]}
            >
              <Input
                size="large"
                label="Opportunity name"
                placeholder="Opportunity name"
              />
            </Form.Item>
            <Form.Item
              label="Image"
              name="service image"
              rules={[{ required: true, message: "Please select image!" }]}
            >
              <Upload {...OpportunityImage}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="Description"
              name="Description"
              rules={[{ required: true, message: "Please inter description!" }]}
            >
              <CKEditor className="min-h-72" editor={ClassicEditor} />
            </Form.Item>
            <Form.Item
              label="Is profile review required?"
              name="profile review"
            >
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item
              label="Agreement of Opportunity"
              name="Agreement of Opportunity"
              rules={[
                {
                  required: true,
                  message: "Please inter Agreement of Opportunity!",
                },
              ]}
            >
              <CKEditor className="min-h-72" editor={ClassicEditor} />
            </Form.Item>
            <Form.Item
              label="Per deal cost"
              name="Per deal cost"
              tooltip={{
                title: "Per deal cost",
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input
                size="large"
                label="USD"
                placeholder="USD"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Per deal cost",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Commission percentage (for all affiliates)"
              name="Commission percentage"
              rules={[
                {
                  required: true,
                  message: "Please enter your Current Commission Rate",
                },
              ]}
            >
              <Input size="large" placeholder="%" />
            </Form.Item>
          </Form>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div className="w-2/3">
          <Form layout="vertical" name="step2">
            <Form.Item
              label="Select template"
              name="Select template"
              rules={[
                {
                  required: true,
                  message: "Select template",
                },
              ]}
            >
              <Radio.Group
                onChange={(e) => setSelectedTemplate(e.target.value)}
                value={selectedTemplate}
              >
                <Row gutter={15} className="text-center">
                  <Col className="gutter-row selectTemplate" span={4}>
                    <Radio value="template1">
                      <div className="selectTemplateLable">
                        <img src="template.png" alt="" />
                      </div>
                      <p className="text-base pt-1">Template 1</p>
                    </Radio>
                  </Col>
                  <Col className="gutter-row selectTemplate" span={4}>
                    <Radio value="template2" className="">
                      <div className="selectTemplateLable">
                        <img src="template.png" alt="" />
                      </div>
                      <p className="text-base pt-1">Template 2</p>
                    </Radio>
                  </Col>
                  <Col className="gutter-row selectTemplate" span={4}>
                    <Radio value="template3">
                      <div className="selectTemplateLable">
                        <img src="template.png" alt="" />
                      </div>
                      <p className="text-base pt-1">Template 1</p>
                    </Radio>
                  </Col>
                  <Col className="gutter-row selectTemplate" span={4}>
                    <Radio value="template4" className="">
                      <div className="selectTemplateLable">
                        <img src="template.png" alt="" />
                      </div>
                      <p className="text-base pt-1">Template 2</p>
                    </Radio>
                  </Col>
                </Row>
              </Radio.Group>
            </Form.Item>
          </Form>
          <div className="">
            <Row gutter={15} className="text-center mb-16 mt-16">
              <Col className="gutter-row" span={16}>
                <div className="border p-5 h-64	">
                  <p className="text-base pt-1">Unlayer API integration here</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      ),
    },
  ];
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const step = [
    {
      title: <span className="text-sm">Opportunity Info</span>,
    },
    {
      title: (
        <span className="text-sm whitespace-nowrap	">Design Landing page</span>
      ),
    },
  ];
  const stepItems = step.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <Card className="opportunityDetail">
        <Typography className="text-xl font-semibold mb-10" align={"left"}>
          <LeftOutlined className="mr-2 " onClick={() => navigate(-1)} />
          Create / Edit Opportunity
        </Typography>
        <div className="w-2/6 mb-5">
          <Steps
            current={current}
            items={stepItems}
            labelPlacement="vertical"
          />
        </div>
        <div>{steps[current].content}</div>
        <div className="mt-6">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button className="ml-2" onClick={() => navigate(-1)}>
              Cancel
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Create
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Cancel
            </Button>
          )}
        </div>
      </Card>
    </>
  );
};
export default CreateOpportunity;