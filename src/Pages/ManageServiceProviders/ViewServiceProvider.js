import {
  Card,
  Divider,
  Typography,
  Row,
  Col,
  Tooltip,
  Button,
  Switch,
} from "antd";
import {
  LeftOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useNavigate, Link, useLocation } from "react-router-dom";
const ViewServiceProvider = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isPendingServiceView = searchParams.has("pending-service-view");
  const navigate = useNavigate();
  return (
    <Card className="cardHeightFull">
      <div className="flex items-center justify-between relative mb-4">
        <Typography className="text-xl font-semibold" align={"left"}>
          <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
          View Service Provider
        </Typography>
        <div className="flex justify-end flex-wrap gap-3 items-center	">
          {isPendingServiceView ? (
            <Button
            // onClick={() => navigate("")}
            >
              Resend Password link
            </Button>
          ) : (
            <Switch
              checkedChildren="Active"
              unCheckedChildren="Inactive"
              defaultChecked
            />
          )}
          <Button
            type="primary"
            onClick={() => navigate("")}
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
              <div className="font-semibold text-[17px]">
                Mode data fetching
              </div>
              <div className="text-sm">CRM</div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">Company name</div>
              <div className="text-sm">Vantage iHub</div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">
                Contact person name
              </div>
              <div className="text-sm">Noah Gibbs</div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">
                Contact person email address
              </div>
              <div className="text-sm">noah.gibbs@gmail.com</div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">
                Contact person phone number
              </div>
              <div className="text-sm">+19876446789</div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">Industry</div>
              <div className="text-sm">Taxation</div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">
                User name or subdomain
              </div>
              <div className="text-sm">noah.12</div>
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
              <div className="font-semibold text-[17px]">Logo or image</div>
              <div>
                <img src="images/1.png" alt="User" className="w-[60px] mt-1" />
              </div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">
                Business credentials or supporting documents
              </div>
              <div className="text-sm">
                123456787 ,
                <Link to="" className="link">
                  Doc.pdf
                </Link>
              </div>
            </div>
          </Col>
          <Col span={10}>
            <div className="mr-4 my-5">
              <div className="font-semibold text-[17px]">
                Service or product details
              </div>
              <div className="text-sm">
                lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </Col>
        </Row>
        <div className="font-semibold text-xl">Associated Opportunities</div>
        <table className="w-[85%] mt-3 text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 bg-gray-100">
            <tr>
              <th scope="col" className="px-3 py-3 whitespace-nowrap">
                ID
              </th>
              <th scope="col" className="px-3 py-3">
                Opportunity name
              </th>
              <th scope="col" className="px-3 py-3">
                Created date
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-center whitespace-nowrap"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
              >
                #1234
              </th>
              <td className="px-3 py-4 vertical-top">Wellness</td>
              <td className="px-3 py-4 vertical-top">01/04/2024</td>
              <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                <Tooltip title="View">
                  <EyeOutlined className="mx-1.5 cursor-pointer" />
                </Tooltip>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
              >
                #1234
              </th>
              <td className="px-3 py-4 vertical-top">Wellness</td>
              <td className="px-3 py-4 vertical-top">01/04/2024</td>
              <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                <Tooltip title="View">
                  <EyeOutlined className="mx-1.5 cursor-pointer" />
                </Tooltip>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
              >
                #1234
              </th>
              <td className="px-3 py-4 vertical-top">Wellness</td>
              <td className="px-3 py-4 vertical-top">01/04/2024</td>
              <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                <Tooltip title="View">
                  <EyeOutlined className="mx-1.5 cursor-pointer" />
                </Tooltip>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
              >
                #1234
              </th>
              <td className="px-3 py-4 vertical-top">Wellness</td>
              <td className="px-3 py-4 vertical-top">01/04/2024</td>
              <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                <Tooltip title="View">
                  <EyeOutlined className="mx-1.5 cursor-pointer" />
                </Tooltip>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
              >
                #1234
              </th>
              <td className="px-3 py-4 vertical-top">Wellness</td>
              <td className="px-3 py-4 vertical-top">01/04/2024</td>
              <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                <Tooltip title="View">
                  <EyeOutlined className="mx-1.5 cursor-pointer" />
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};
export default ViewServiceProvider;