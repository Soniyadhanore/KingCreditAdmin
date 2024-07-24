import { useState } from "react";
import { Avatar, Layout, Menu } from "antd";
import {
  DownOutlined,
  UserOutlined,
  UnlockOutlined,
  LoginOutlined,
  BellOutlined,
} from "@ant-design/icons";
import ChangePassword from "../../Modal/ChangePassword";
import ConfirmationModal from "../../Modal/ConfirmationModal";
const { Header } = Layout;
const HeaderComponent = () => {
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const showChangePasswordModal = () => {
    setIsChangePasswordModalOpen(true);
  };
  const handleChangePasswordOk = () => {
    setIsChangePasswordModalOpen(false);
  };
  const handleChangePasswordCancel = () => {
    setIsChangePasswordModalOpen(false);
  };
  const showLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };
  const handleLogoutOk = () => {
    setIsLogoutModalOpen(false);
  };
  const handleLogoutCancel = () => {
    setIsLogoutModalOpen(false);
  };
  return (
    <>
      <Header style={{ background: "#fff", padding: "0px 16px" }}>
        <div className="text-right">
          <Menu
            mode="horizontal"
            className="ml-auto flex justify-end items-center"
          >
            <div className="mr-1  items-center flex">
              <BellOutlined style={{ fontSize: "20px" }} />
            </div>
            <Menu.SubMenu
              key="SubMenu"
              title={
                <>
                  <span
                    className="cursor-pointer inline-block"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Avatar size={40} icon={<UserOutlined />} />
                    <span className="mx-2">Admin Name</span>
                    <DownOutlined />
                  </span>
                </>
              }
            >
              <Menu.Item>
                <UserOutlined className="mr-1" /> Profile
              </Menu.Item>
              <Menu.Item onClick={showChangePasswordModal}>
                <UnlockOutlined className="mr-1" /> Change Password
              </Menu.Item>
              <Menu.Item onClick={showLogoutModal}>
                <LoginOutlined className="mr-1" /> Logout
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
      </Header>
      <ChangePassword
        isOpen={isChangePasswordModalOpen}
        onOk={handleChangePasswordOk}
        onCancel={handleChangePasswordCancel}
      />
      <ConfirmationModal
        ConfirmationHeading="Logout"
        ConfirmationParagraph="Are you sure you want to logout?"
        isOpen={isLogoutModalOpen}
        onOk={handleLogoutOk}
        onCancel={handleLogoutCancel}
      />
    </>
  );
};
export default HeaderComponent;