import { Modal, Row, Col } from "antd";
const RejectRequestDetail = ({ isOpen, onOk, onCancel, ReasonText }) => {
  return (
    <>
      <Modal
        title={ReasonText}
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        width={600}
        okText="Approve Profile"
        cancelButtonProps={{ style: { display: 'none' } }}
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
          <Col span={6}>Reason of rejection</Col>
          <Col span={18}>Cannot approve due to past records</Col>
          <Col span={6}>Rejected date</Col>
          <Col span={18}>23-06-2024</Col>
          <Col span={6}>Status</Col>
          <Col span={18}>
            <span class="py-2 px-3 bg-slate-100 text-[red] text-xs rounded-lg ">
              Rejected
            </span>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default RejectRequestDetail;