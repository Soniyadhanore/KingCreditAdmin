import { Button, Divider, Drawer } from "antd";
const FilterServiceProviders = ({ isOpen, onClose }) => {
  return (
    <Drawer
      title="Filters"
      onClose={onClose}
      open={isOpen}
      footer={
        <>
          <div className="flex justify-end py-1 gap-2">
            <Button>Reset</Button>
            <Button type="primary">Apply Filters</Button>
          </div>
        </>
      }
    >
      <div role="presentation" className="w-full overflow-auto">
        <div className="h-[calc(100%-54px)] overflow-auto">
          <div className="flex flex-col my-4 w-full mx-auto">
            <p className="font-semibold text-sm">Status</p>
            <div className="flex mt-[8px] flex-wrap gap-2">
              <button className="cursor-pointer w-[90px] p-2 bg-[#1677ff] text-white text-xs rounded-lg text-center">
                Active
              </button>
              <button className="cursor-pointer w-[90px] p-2 bg-slate-100 text-black text-xs rounded-lg text-center">
                Inactive
              </button>
              <button className="cursor-pointer w-[90px] p-2 bg-slate-100 text-black text-xs rounded-lg text-center">
                Pending
              </button>
            </div>
          </div>
          <Divider className="m-0" />
          <div className="flex flex-col my-4 w-full mx-auto">
            <p className="font-semibold text-sm">Industry</p>
            <div className="flex mt-[8px] flex-wrap gap-2">
              <button className="cursor-pointer w-[90px] p-2 bg-[#1677ff] text-white text-xs rounded-lg text-center">
                Option 1
              </button>
              <button className="cursor-pointer w-[90px] p-2 bg-slate-100 text-black text-xs rounded-lg text-center">
                Option 2
              </button>
            </div>
          </div>
          <Divider className="m-0" />
        </div>
      </div>
    </Drawer>
  );
};
export default FilterServiceProviders;