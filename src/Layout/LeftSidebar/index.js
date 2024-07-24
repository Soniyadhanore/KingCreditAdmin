import { useState } from "react";
import { Layout, Menu } from "antd";
import { MdManageHistory, MdOutlineManageAccounts } from "react-icons/md";
import { TbAffiliate } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const LeftSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sider
      width={240}
      className="customLeftSidebar "
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
    >
      <div
        className={`logo flex justify-center h-[56px] my-4 transition-opacity duration-500`}
      >
        {collapsed ? (
          // <img src="/logo-single.svg" alt="logo" className="" />
          <span style={{ color: "rgba(255, 255, 255, 0.65)" }}>Logo</span>
        ) : (
          // <img src="/logo.svg" alt="logo" className="" />
          <span
            style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "32px" }}
          >
            Logo
          </span>
        )}
      </div>
      <Menu theme="dark" defaultSelectedKeys={"auto"} mode="inline">
        <Menu.Item key="1" icon={<MdManageHistory size={18} />}>
          <Link to="/manage-opportunity">Manage Opportunity </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<TbAffiliate size={18} />}>
          <Link to="/manage-affiliates">Manage Affiliates </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<MdOutlineManageAccounts size={18} />}>
          <Link to="/manage-service-providers">Manage Service Providers </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<RiUserSettingsLine size={18} />}>
          <Link to="/account-setting">Account settings </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default LeftSidebar;