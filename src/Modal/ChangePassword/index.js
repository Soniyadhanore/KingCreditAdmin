import { Form, Input, Modal } from "antd";
const ChangePassword = ({ isOpen, onOk, onCancel }) => {
  return (
    <>
      <Modal
        title="Change Password"
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        okText="Save"
        cancelText="Cancel"
      >
        <Form
          name="change password"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          style={{ marginTop: 24 }}
          autoComplete="off"
        >
          <Form.Item
            label="Old Password"
            name="Old Password"
            rules={[
              {
                required: true,
                message:
                  "Min 10 characters, Max 25 characters, Minimum one letter, Minimum one number",
              },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>
          <Form.Item
            label="New Password"
            name="New Password"
            rules={[
              {
                required: true,
                message: "Please enter your New password!",
              },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>
          <Form.Item
            label="Confirm New Password"
            name="Confirm New Password"
            rules={[
              {
                required: true,
                message: "Please enter your confirm new password!",
              },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ChangePassword;