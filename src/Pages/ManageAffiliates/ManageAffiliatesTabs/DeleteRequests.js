import { useState } from "react";
import { Tooltip, Pagination, Input, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SortingArrow from "../../../Common/SortingArrow";
import DeleteRequestsFilter from "./DeleteRequestsFilter";
const { Search } = Input;
const DeleteRequests = () => {
  const navigate = useNavigate();
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const handleFilterDrawerClose = () => {
    setFilterDrawerOpen(false);
  };
  return (
    <>
      <div className="flex justify-end gap-3  mb-4">
        <Search
          placeholder="Search by affiliate name, email address, phone number"
          style={{
            width: 400,
          }}
          className="mx-1.5 cursor-pointer"
        />
        <Button type="primary">Clear filter</Button>
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
                Requested on
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
              <td className="px-3 py-4 vertical-top">02-06-2024</td>
              <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                <Tooltip title="Delete">
                  <DeleteOutlined className="mx-1.5 cursor-pointer" />
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
              <td className="px-3 py-4 vertical-top">02-06-2024</td>
              <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                <Tooltip title="Delete">
                  <DeleteOutlined className="mx-1.5 cursor-pointer" />
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
      <DeleteRequestsFilter
        isOpen={filterDrawerOpen}
        onClose={handleFilterDrawerClose}
      />
    </>
  );
};
export default DeleteRequests;