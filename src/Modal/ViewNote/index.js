import { Button, Modal } from "antd";
import { FunnelPlotOutlined } from "@ant-design/icons";
import { useState } from "react";
import ViewNoteFilter from "./ViewNoteFilter";
const ViewNote = ({ isOpen }) => {
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const showFilterDrawer = () => {
    setFilterDrawerOpen(true);
  };
  const handleFilterDrawerClose = () => {
    setFilterDrawerOpen(false);
  };
  return (
    <>
      <Modal
        title="View Note"
        centered
        open={isOpen}
        footer={null}
        width={1000}
      >
        <Button onClick={showFilterDrawer}>
          <span>
            <FunnelPlotOutlined /> Filter
          </span>
        </Button>
        <div className="relative overflow-x-auto mt-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-100">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Notes
                </th>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Added date
                </th>
                <th scope="col" className="px-3 py-3">
                  Status
                </th>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Method used
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  lorem ipsum dolor sit amet consectetur
                </th>
                <td className="px-3 py-4 vertical-top">10-06-2024</td>
                <td className="px-3 py-4 vertical-top">Followed up</td>
                <td className="px-3 py-4 vertical-top">SMS</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  lorem ipsum dolor sit amet consectetur
                </th>
                <td className="px-3 py-4 vertical-top">10-06-2024</td>
                <td className="px-3 py-4 vertical-top">Followed up</td>
                <td className="px-3 py-4 vertical-top">SMS</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  lorem ipsum dolor sit amet consectetur
                </th>
                <td className="px-3 py-4 vertical-top">10-06-2024</td>
                <td className="px-3 py-4 vertical-top">Followed up</td>
                <td className="px-3 py-4 vertical-top">SMS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
      <ViewNoteFilter
        isOpen={filterDrawerOpen}
        onClose={handleFilterDrawerClose}
      />
    </>
  );
};
export default ViewNote;