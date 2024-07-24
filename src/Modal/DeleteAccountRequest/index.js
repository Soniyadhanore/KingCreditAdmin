import { Modal } from "antd";
const DeleteAccountRequest = ({ isOpen, onOk, onCancel }) => {
  return (
    <>
      <Modal
        title="Delete Account Request"
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        width={500}
        okText="Accept"
      >
        <p className="text-sm mb-4">
          If you accept the delete account request for this affiliate user,
          their account will be deleted.
        </p>
      </Modal>
    </>
  );
};
export default DeleteAccountRequest;