import { Button, Input, Select } from "antd";
import { FunnelPlotOutlined } from "@ant-design/icons";
import EmptyComponent from "../../../Component/Empty";
const { Search } = Input;
const Commission = () => {
  const filterByCommissionStatus = [
    {
      value: "Paid",
      label: "Paid",
    },
    {
      value: "unpaid",
      label: " unpaid",
    },
  ];
  return (
    <>
      <div className="flex justify-end gap-3  mb-4">
        <FunnelPlotOutlined />
        <Select
          placeholder="Filter by commission status"
          options={filterByCommissionStatus}
          style={{
            width: 220,
          }}
        />
        <Search
          placeholder="search by service provider, opportunity name"
          style={{
            width: 450,
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
                Opportunity Name
              </th>
              <th scope="col" className="px-3 py-3 whitespace-nowrap">
                Service Provider name
              </th>
              <th scope="col" className="px-3 py-3">
                Lead Generation Date
              </th>
              <th scope="col" className="px-3 py-3">
                Deal Closure Date
              </th>
              <th scope="col" className="px-3 py-3">
                Commission percentage
              </th>
              <th scope="col" className="px-3 py-3">
                Commission Amount
              </th>
              <th scope="col" className="px-3 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={8} className="text-center">
                <EmptyComponent />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Commission;