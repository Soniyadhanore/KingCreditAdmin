import { useState } from "react";
import { Tooltip, Select, Pagination, Input, Switch, Button } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  FunnelPlotOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SortingArrow from "../../../Common/SortingArrow";
import DeleteAccountRequest from "../../../Modal/DeleteAccountRequest";
const { Search } = Input;
const AllAffiliates = () => {
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
  const filterByCountry = [
    {
      value: "USA",
      label: "USA",
    },
    {
      value: "Uk",
      label: "Uk",
    },
    {
      value: "USA",
      label: "USA",
    },
  ];
  return (
    <>
      <div className="flex justify-end gap-3 mb-4">
        <FunnelPlotOutlined />
        <Select
          placeholder="Filter by status"
          options={filterByStatus}
          style={{
            width: 150,
          }}
        />
        <Select
          placeholder="Filter by country"
          options={filterByCountry}
          style={{
            width: 150,
          }}
        />
<Search
          placeholder="Search by affiliate name, email address, phone number"
          style={{
            width: 400,
          }}
          className="mx-1.5 cursor-pointer"
        />
        <Button
              type="primary"
            >
              Clear filter
            </Button>
      </div>
<div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 bg-gray-100">
            <tr>
              <th scope="col" className="px-3 py-3 whitespace-nowrap">
                Affiliate ID <SortingArrow />
              </th>
<th scope="col" className="px-3 py-3">
                Name <SortingArrow />
              </th>
              <th scope="col" className="px-3 py-3">
                Email address <SortingArrow />
              </th>
              <th scope="col" className="px-3 py-3">
                Phone number <SortingArrow />
              </th>
              <th scope="col" className="px-3 py-3">
                Country <SortingArrow />
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
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
              >
                1234
              </th>
              <td
                className="px-3 py-4 vertical-top cursor-pointer font-medium"
                onClick={() => navigate("/view-affiliates")}
              >
                Admin name
              </td>
              <td className="px-3 py-4 vertical-top">Noah432@gmail.com</td>
              <td className="px-3 py-4 vertical-top">+19876543231</td>
              <td className="px-3 py-4 vertical-top">USA</td>
              <td className="px-3 py-4 vertical-top">
                <Switch />
              </td>
              <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                <Tooltip title="Edit">
                  <EditOutlined
                    onClick={() => navigate("/edit-affiliates")}
                    className="mx-1.5 cursor-pointer"
                  />
                </Tooltip>
                <Tooltip title="Delete">
                  <DeleteOutlined
                    onClick={() => setIsDeleteModalOpen(true)}
                    className="mx-1.5 cursor-pointer"
                  />
                </Tooltip>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
              >
                1234
              </th>
              <td
                className="px-3 py-4 vertical-top cursor-pointer font-medium"
                onClick={() => navigate("/view-affiliates")}
              >
                Rosy Smith
              </td>
              <td className="px-3 py-4 vertical-top">Noah432@gmail.com</td>
              <td className="px-3 py-4 vertical-top">+19876543231</td>
              <td className="px-3 py-4 vertical-top">USA</td>
              <td className="px-3 py-4 vertical-top">
                <Switch />
              </td>
              <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                <Tooltip title="Edit">
                  <EditOutlined
                    onClick={() => navigate("/edit-affiliates")}
                    className="mx-1.5 cursor-pointer"
                  />
                </Tooltip>
                <Tooltip title="Delete">
                  <DeleteOutlined
                    onClick={() => setIsDeleteModalOpen(true)}
                    className="mx-1.5 cursor-pointer"
                  />
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-base font-semibold">Total affiliates- 100</div>
        <Pagination defaultCurrent={1} total={50} />
      </div>
      {/* delete modal */}
      <DeleteAccountRequest
        ConfirmationHeading="Delete Account Request"
        ConfirmationParagraph="If you accept the delete account request for this affiliate user, their account will be deleted."
        isOpen={isDeleteModalOpen}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      />
    </>
  );
};
export default AllAffiliates;