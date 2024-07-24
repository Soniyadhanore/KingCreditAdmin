import { Button, Input } from "antd";
import SortingArrow from "../../../Common/SortingArrow";
const { Search } = Input;
const Opportunity = () => {
  return (
    <>
      <div className="flex justify-end gap-3  mb-4">
        <Search
          placeholder="Search by opportunity name"
          style={{
            width: 250,
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
                ID <SortingArrow />
              </th>
              <th scope="col" className="px-3 py-3">
                Opportunity Name <SortingArrow />
              </th>
              <th scope="col" className="px-3 py-3">
                Service provider <SortingArrow />
              </th>
              <th scope="col" className="px-3 py-3">
                Enrolled Date <SortingArrow />
              </th>
              <th scope="col" className="px-3 py-3">
                Leads Generated <SortingArrow />
              </th>
              <th scope="col" className="px-3 py-3">
                Deals closed
              </th>
              <th scope="col" className="px-3 py-3">
                Commission %
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
              <td className="px-3 py-4 vertical-top">Wellness</td>
              <td className="px-3 py-4 vertical-top">IHub</td>
              <td className="px-3 py-4 vertical-top">17-06-2024</td>
              <td className="px-3 py-4 vertical-top">15</td>
              <td className="px-3 py-4 vertical-top">3</td>
              <td className="px-3 py-4 vertical-top">20%</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
              >
                1234
              </th>
              <td className="px-3 py-4 vertical-top">Wellness</td>
              <td className="px-3 py-4 vertical-top">IHub</td>
              <td className="px-3 py-4 vertical-top">17-06-2024</td>
              <td className="px-3 py-4 vertical-top">15</td>
              <td className="px-3 py-4 vertical-top">3</td>
              <td className="px-3 py-4 vertical-top">20%</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
              >
                1234
              </th>
              <td className="px-3 py-4 vertical-top">Wellness</td>
              <td className="px-3 py-4 vertical-top">IHub</td>
              <td className="px-3 py-4 vertical-top">17-06-2024</td>
              <td className="px-3 py-4 vertical-top">15</td>
              <td className="px-3 py-4 vertical-top">3</td>
              <td className="px-3 py-4 vertical-top">20%</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
              >
                1234
              </th>
              <td className="px-3 py-4 vertical-top">Wellness</td>
              <td className="px-3 py-4 vertical-top">IHub</td>
              <td className="px-3 py-4 vertical-top">17-06-2024</td>
              <td className="px-3 py-4 vertical-top">15</td>
              <td className="px-3 py-4 vertical-top">3</td>
              <td className="px-3 py-4 vertical-top">20%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Opportunity;