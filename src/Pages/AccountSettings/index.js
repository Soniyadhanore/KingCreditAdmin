import { useState } from "react";
import {
  Button,
  Card,
  Divider,
  Typography,
  Image,
  Upload,
  Input,
  Form,
} from "antd";
import {
  EditOutlined,
  UnlockOutlined,
  UserOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import ChangePassword from "../../Modal/ChangePassword";
import { Link } from "react-router-dom";
const AccountSettings = () => {
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [isCommissionEditable, setIsCommissionEditable] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const handleChange = ({ fileList }) => setFileList(fileList);
  const handlePreview = async (file) => {
    setPreviewImage(file.url || file.thumbUrl);
    setPreviewOpen(true);
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <UserOutlined className="text-[36px]" />
    </button>
  );
  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleChangePasswordOk = () => {
    setIsChangePasswordModalOpen(false);
  };
  const handleChangePasswordCancel = () => {
    setIsChangePasswordModalOpen(false);
  };
  return (
    <>
      <Card>
        <div className="flex justify-between items-center flex-wrap mb-4 gap-3">
          <Typography className="text-xl font-semibold" align={"left"}>
            {isEditable ? "Edit profile" : "Profile"}
          </Typography>
        </div>
        <Divider />
        <div className="min-h-[calc(100vh_-_305px)]">
          <div className="mb-4 h-[102px]">
            <Upload
              action=""
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              beforeUpload={() => false} // Prevent auto-upload
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            {previewImage && (
              <Image
                wrapperStyle={{
                  display: "none",
                }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(""),
                }}
                src={previewImage}
              />
            )}
          </div>
          <Form
            name="Profile"
            layout="vertical"
            style={{
              maxWidth: 600,
              width: "100%",
            }}
            initialValues={{
              remember: true,
              "Admin Name": "Shanti admin",
              "Email Address": "jandanny@gmail.com",
              "Phone number": "650-921-4476",
              "Referral link": "https//wellness.com",
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Admin Name"
              name="Admin Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your Admin Name",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Admin Name"
                readOnly={!isEditable}
              />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="Email Address"
              rules={[
                {
                  required: true,
                  message: "Please enter your Email Address",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Email Address"
                readOnly={!isEditable}
              />
            </Form.Item>
            <Form.Item
              label="Phone number"
              name="Phone number"
              rules={[
                {
                  required: true,
                  message: "Please enter your Phone number",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Phone number"
                readOnly={!isEditable}
              />
            </Form.Item>

            {isEditable ? (
              ""
            ) : (
              <Form.Item label="Referral link" name="Referral link">
                <Link className="link" to="https://wellness.com">
                  https://wellness.com
                </Link>
              </Form.Item>
            )}
          </Form>
        </div>
        <Divider />
        <div className="flex justify-end flex-wrap gap-3">
          {isEditable ? (
            <Button onClick={handleEdit}>Cancel</Button>
          ) : (
            <Button
              type="text"
              icon={<UnlockOutlined />}
              size={14}
              onClick={() => setIsChangePasswordModalOpen(true)}
              className=" cursor-pointer"
            >
              Change Password
            </Button>
          )}

          <Button
            type="primary"
            success
            onClick={handleEdit}
            icon={isEditable ? '' : <EditOutlined />}
          >
            {isEditable ? "Save" : "Edit Profile"}
          </Button>
          {/* <Button type="primary">Save</Button> */}
        </div>
      </Card>
      <ChangePassword
        isOpen={isChangePasswordModalOpen}
        onOk={handleChangePasswordOk}
        onCancel={handleChangePasswordCancel}
      />
    </>
  );
};
export default AccountSettings;