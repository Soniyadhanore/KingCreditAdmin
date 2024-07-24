import {
  Button,
  Card,
  Typography,
  Form,
  Input,
  Upload,
  Switch,
  Select,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  LeftOutlined,
  UploadOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const EditOpportunity = () => {
  const OpportunityImage = {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
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
  const navigate = useNavigate();
  return (
    <>
      <Card className="opportunityDetail">
        <Typography className="text-xl font-semibold mb-10" align={"left"}>
          <LeftOutlined className="mr-2 " onClick={() => navigate(-1)} />
          Edit detail
        </Typography>
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
                // title: 'Per deal cost',
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
      </Card>
    </>
  );
};
export default EditOpportunity;