import { Modal, Row, Col } from "antd";
const PendingRequestDetails = ({ isOpen, onOk, onCancel, ReasonText }) => {
  return (
    <>
      <Modal
        title={ReasonText}
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        width={600}
        okText="Approve"
        cancelText="Reject"
      >
        <Row gutter={[20, 20]} className="pt-5">
          <Col span={6}>Affiliate name</Col>
          <Col span={18}>Alexandar Davis</Col>
          <Col span={6}>ID</Col>
          <Col span={18}>#2345</Col>
          <Col span={6}>Email address</Col>
          <Col span={18}>Alex43@gmail.com</Col>
          <Col span={6}>Comment</Col>
          <Col span={18}>
            Lorem ipsum dolor sit amet, consecteUt enim ad minim consecteUt enim
            ad minim
          </Col>
          <Col span={6}>Document</Col>
          <Col span={18}>
            <span class="cursor-pointer underline link">doc1.pdf</span>
          </Col>
          <Col span={6}>Status</Col>
          <Col span={18}>
            <span class="py-2 px-3 bg-slate-100 text-[orange] text-xs rounded-lg">
              Pending
            </span>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default PendingRequestDetails;