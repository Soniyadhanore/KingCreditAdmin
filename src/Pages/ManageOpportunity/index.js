import { useState } from "react";
import {
  Tooltip,
  Button,
  Pagination,
  Card,
  Typography,
  Input,
  Switch,
  Select,
} from "antd";
import { EditOutlined, PlusOutlined, FunnelPlotOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SortingArrow from "../../Common/SortingArrow";
import ConfirmationModal from "../../Modal/ConfirmationModal";
const { Search } = Input;
const ManageOpportunity = () => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteOk = () => {
    setIsDeleteModalOpen(false);
  };
  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };
  const filterByStatus = [
    {
      value: "Active",
      label: "Active",
    },
    {
      value: "Inactive",
      label: " Inactive",
    },
  ];
  const filterByServiceProvider = [
    {
      value: "Vantage iHub",
      label: "Vantage iHub",
    },
    {
      value: "Gig Worker",
      label: "Gig Worker",
    },
    {
      value: "Vantage iHub",
      label: "Vantage iHub",
    },
  ];
  return (
    <>
      <Card className="">
        <div className="flex items-center justify-between relative mb-4">
          <Typography className="text-xl font-semibold mb-0" align={"left"}>
            Manage Opportunities
          </Typography>
          <div className="flex justify-end gap-2">
            <FunnelPlotOutlined />
            <Select
              placeholder="Filter by status"
              options={filterByStatus}
              style={{
                width: 150,
              }}
            />
            <Select
              placeholder="Filter by service provider"
              options={filterByServiceProvider}
              style={{
                width: 200,
              }}
            />
            <Search
              placeholder="Search by opportunity name"
              style={{
                width: 200,
              }}
              className="cursor-pointer"
            />
            <Button type="primary">Clear filter</Button>
            <Button
              type="primary"
              onClick={() => navigate("/create-opportunity")}
              icon={<PlusOutlined />}
            >
              Create opportunity
            </Button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-100">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  ID <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Opportunity name
                </th>
                <th scope="col" className="px-3 py-3">
                  Service Provider
                </th>
                <th scope="col" className="px-3 py-3">
                  Created date
                </th>
                <th scope="col" className="px-3 py-3">
                  Status
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
                  1234
                </th>
                <td
                  className="px-3 py-4 vertical-top cursor-pointer font-medium"
                  onClick={() => navigate("/opportunity-details")}
                >
                  Wellness
                </td>
                <td className="px-3 py-4 vertical-top">Vantage iHub</td>
                <td className="px-3 py-4 vertical-top">17-06-2024</td>
                <td className="px-3 py-4 vertical-top">
                  <Switch />
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => navigate("/create-opportunity")}
                      className="mx-1.5 cursor-pointer"
                    />
                  </Tooltip>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
                >
                  1234
                </th>
                <td
                  className="px-3 py-4 vertical-top cursor-pointer font-medium"
                  onClick={() => navigate("/opportunity-details")}
                >
                  Executive bonus
                </td>
                <td className="px-3 py-4 vertical-top">Gig Worker</td>
                <td className="px-3 py-4 vertical-top">12-06-2024</td>
                <td className="px-3 py-4 vertical-top">
                  <Switch />
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => navigate("/create-opportunity")}
                      className="mx-1.5 cursor-pointer"
                    />
                  </Tooltip>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
                >
                  1234
                </th>
                <td
                  className="px-3 py-4 vertical-top cursor-pointer font-medium"
                  onClick={() => navigate("/opportunity-details")}
                >
                  Wellness bonus
                </td>
                <td className="px-3 py-4 vertical-top">Vantage iHub</td>
                <td className="px-3 py-4 vertical-top">17-06-2024</td>
                <td className="px-3 py-4 vertical-top">
                  <Switch />
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => navigate("/create-opportunity")}
                      className="mx-1.5 cursor-pointer"
                    />
                  </Tooltip>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
                >
                  1234
                </th>
                <td
                  className="px-3 py-4 vertical-top cursor-pointer font-medium"
                  onClick={() => navigate("/opportunity-details")}
                >
                  Executive bonus
                </td>
                <td className="px-3 py-4 vertical-top">Gig Worker</td>
                <td className="px-3 py-4 vertical-top">12-06-2024</td>
                <td className="px-3 py-4 vertical-top">
                  <Switch defaultChecked />
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => navigate("/create-opportunity")}
                      className="mx-1.5 cursor-pointer"
                    />
                  </Tooltip>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-base font-semibold">Total opportunity- 100</div>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </Card>
      {/* delete modal */}
      <ConfirmationModal
        ConfirmationHeading="Delete"
        ConfirmationParagraph="Are you sure you want to delete this Service."
        isOpen={isDeleteModalOpen}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      />
    </>
  );
};
export default ManageOpportunity;