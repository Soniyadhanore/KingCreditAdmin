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
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  FunnelPlotOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SortingArrow from "../../Common/SortingArrow";
import ConfirmationModal from "../../Modal/ConfirmationModal";
import FilterServiceProviders from "./FilterClientManagement";
const { Search } = Input;
const ManageServiceProviders = () => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      Id: "#123654",
      Name: "John Brown",
      Email: "John@gmail.com",
      Number: "7895645678",
      Role: "Role",
      action: "",
    },
    {
      key: "2",
      Id: "#123655",
      Name: "Jim Green",
      Email: "Jim@gmail.com",
      Number: "7458963278",
      Role: "Role",
      status: "Inactive",
      action: "",
    },
    {
      key: "3",
      Id: "#123656",
      Name: "Joe Black",
      Email: "Joe@gmail.com",
      Number: "4587126978",
      Role: "Role",
      status: "Pending",
      action: "",
    },
    {
      key: "4",
      Id: "#123657",
      Name: "Joe Black",
      Email: "Joe@gmail.com",
      Number: "7584692578",
      Role: "Role",
      status: "Pending",
      action: "",
    },
    {
      key: "5",
      Id: "#123658",
      Name: "Joe Black",
      Email: "Joe@gmail.com",
      Number: "9825874159",
      Role: "Role",
      status: "Pending",
      action: "",
    },
  ]);
  const filterByStatus = [
    {
      value: "Active",
      label: "Active",
    },
    {
      value: "Inactive",
      label: " Inactive",
    },
    {
      value: "Invitation pending",
      label: "Invitation pending",
    },
  ];
  const handleSort = (order) => {
    setSortOrder(order);
    const sortedData = [...dataSource].sort((a, b) => {
      if (order === "asc") {
        return a.yourSortField > b.yourSortField ? 1 : -1;
      } else {
        return a.yourSortField < b.yourSortField ? 1 : -1;
      }
    });
    setDataSource(sortedData);
  };
  const handleDeleteOk = () => {
    setIsDeleteModalOpen(false);
  };
  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };
  const showFilterDrawer = () => {
    setFilterDrawerOpen(true);
  };
  const handleFilterDrawerClose = () => {
    setFilterDrawerOpen(false);
  };
  return (
    <>
      <Card>
        <div className="flex items-center justify-between relative mb-4">
          <Typography className="text-xl font-semibold mb-0" align={"left"}>
            Service Providers
          </Typography>
          <div className="flex justify-end gap-3">
            <FunnelPlotOutlined />
            <Select
              placeholder="Filter by status"
              options={filterByStatus}
              style={{
                width: 150,
              }}
            />
            <Search
              placeholder="Search by service provider name, email address"
              style={{
                width: 350,
              }}
              className="mx-1.5 cursor-pointer"
            />
            <Button type="primary">Clear filter</Button>
            <Button
              type="primary"
              onClick={() => navigate("/create-service-providers?")}
              icon={<PlusOutlined />}
            >
              Add service provider
            </Button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table
            dataSource={dataSource}
            className="w-full text-sm text-left text-gray-500"
          >
            <thead className="text-xs text-gray-700 bg-gray-100">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  ID <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Company name <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Contact person name <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Email address <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Industry <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Registered date <SortingArrow onSort={handleSort} />
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
                  onClick={() => navigate("/view-service-providers")}
                >
                  1234
                </th>
                <td className="px-3 py-4 vertical-top">Vantage iHub</td>
                <td className="px-3 py-4 vertical-top">Noah Jane</td>
                <td className="px-3 py-4 vertical-top">Noah432@gmail.com</td>
                <td className="px-3 py-4 vertical-top">Taxation </td>
                <td className="px-3 py-4 vertical-top">01/04/2024</td>
                <td className="px-3 py-4 vertical-top">
                  <span class="py-2 px-3 bg-slate-100 text-black text-sm rounded-lg">
                    Active
                  </span>
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top gap-2 flex justify-center ">
                  <Switch size="small" />
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => navigate("/create-service-providers?edit")}
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
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
                  onClick={() => navigate("/view-service-providers")}
                >
                  1234
                </th>
                <td className="px-3 py-4 vertical-top">Vantage iHub</td>
                <td className="px-3 py-4 vertical-top">Noah Jane</td>
                <td className="px-3 py-4 vertical-top">Noah432@gmail.com</td>
                <td className="px-3 py-4 vertical-top">Taxation </td>
                <td className="px-3 py-4 vertical-top">01/04/2024</td>
                <td className="px-3 py-4 vertical-top">
                  <span class="py-2 px-3 bg-slate-100 text-black text-sm rounded-lg">
                    Inactive
                  </span>
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top gap-2 flex justify-center ">
                  <Switch size="small" />
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => navigate("/create-service-providers?edit")}
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
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
                  onClick={() =>
                    navigate("/view-service-providers?pending-service-view")
                  }
                >
                  1234
                </th>
                <td className="px-3 py-4 vertical-top">Vantage iHub</td>
                <td className="px-3 py-4 vertical-top">Noah Jane</td>
                <td className="px-3 py-4 vertical-top">Noah432@gmail.com</td>
                <td className="px-3 py-4 vertical-top">Taxation </td>
                <td className="px-3 py-4 vertical-top">01/04/2024</td>
                <td className="px-3 py-4 vertical-top">
                  <span class="py-2 px-3 bg-slate-100 text-black text-sm rounded-lg">
                    Invitation pending
                  </span>
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top gap-2 flex justify-center ">
                  <Button onClick={() => navigate("")}>
                    Resend password link
                  </Button>
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() =>
                        navigate(
                          "/create-service-providers?invitation-pending-edit"
                        )
                      }
                      className="mx-1.5 cursor-pointer"
                    />
                  </Tooltip>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-base font-semibold">
            Total service provider- 100
          </div>
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
      <FilterServiceProviders
        isOpen={filterDrawerOpen}
        onClose={handleFilterDrawerClose}
      />
    </>
  );
};
export default ManageServiceProviders;