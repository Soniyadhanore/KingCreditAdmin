import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Typography,
  Col,
  Row,
  Switch,
  Divider,
  Tabs,
  Table,
  Tooltip,
  Input,
  Select,
  Button,
} from "antd";
import {
  LeftOutlined,
  EyeOutlined,
  CheckSquareOutlined,
  CloseSquareOutlined,
  FilterOutlined,
  EditOutlined,
  DeleteOutlined,
  ExportOutlined,
  DownloadOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import ReasonModal from "../../Modal/ReasonModal";
import PendingRequestDetails from "../../Modal/PendingRequestDetails";
import RejectRequestDetail from "../../Modal/RejectRequestDetail";
const { Search } = Input;
const OpportunityDetail = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [isRejectReasonModalOpen, setIsRejectReasonModalOpen] = useState(false);
  const [isAproveModalOpen, setIsAproveModalOpen] = useState(false);
  const [isRejectRequestModalOpen, setIsRejectRequestModalOpen] =
    useState(false);
  const handleRejectReasonModalOk = () => {
    setIsRejectReasonModalOpen(false);
  };
  const handleRejectReasonModalCancel = () => {
    setIsRejectReasonModalOpen(false);
  };
  const tabChange = (key) => {
    console.log(key);
  };
  const handleAproveModalOk = () => {
    setIsAproveModalOpen(false);
  };
  const handleAproveModalCancel = () => {
    setIsAproveModalOpen(false);
  };
  const handleRejectRequestModalOk = () => {
    setIsRejectRequestModalOpen(false);
  };
  const handleRejectRequestModalCancel = () => {
    setIsRejectRequestModalOpen(false);
  };
  const pendingRequestFilter = [
    {
      value: " Pending",
      label: " Pending",
    },
    {
      value: "Reject",
      label: "Reject",
    },
  ];
  const leadAffiliateFilter = [
    {
      value: " Pending",
      label: " Pending",
    },
    {
      value: "Reject",
      label: "Reject",
    },
  ];
  const affiliatesAssociatedColumns = [
    {
      title: "Affiliate name",
      dataIndex: "affiliateName",
      key: "name",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email address",
      dataIndex: "emailAddress",
      key: "email",
    },
    {
      title: " Enrolled date",
      dataIndex: "enrolledDate",
      key: "date",
    },
  ];
  const affiliatesAssociatedData = [
    {
      key: "1",
      affiliateName: "Alexander Davis",
      id: (
        <Link className="link" to="/view-service-providers">
          #229
        </Link>
      ),
      emailAddress: "alex43@gmail.com",
      enrolledDate: "11-06-2024",
    },
    {
      key: "2",
      affiliateName: "Alexander Davis",
      id: (
        <Link className="link" to="/view-service-providers">
          #230
        </Link>
      ),
      emailAddress: "alex43@gmail.com",
      enrolledDate: "11-06-2024",
    },
    {
      key: "3",
      affiliateName: "Alexander Davis",
      id: (
        <Link className="link" to="/view-service-providers">
          #231
        </Link>
      ),
      emailAddress: "alex43@gmail.com",
      enrolledDate: "11-06-2024",
    },
    {
      key: "4",
      affiliateName: "Alexander Davis",
      id: (
        <Link className="link" to="/view-service-providers">
          #232
        </Link>
      ),
      emailAddress: "alex43@gmail.com",
      enrolledDate: "11-06-2024",
    },
  ];
  const pendingRequestsColumns = [
    {
      title: "Affiliate name",
      dataIndex: "affiliateName",
      key: "name",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email address",
      dataIndex: "emailAddress",
      key: "email",
    },
    {
      title: "Requested  date",
      dataIndex: "requestedDate",
      key: "date",
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "Document",
      dataIndex: "Document",
      key: "document",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "action",
    },
  ];
  const pendingRequestsData = [
    {
      key: "1",
      affiliateName: "Alexander Davis",
      id: (
        <Link className="link" to="/view-service-providers">
          #230
        </Link>
      ),
      emailAddress: "alex43@gmail.com",
      requestedDate: "11-06-2024",
      comment: (
        <Tooltip title="View">
          <EyeOutlined
            onClick={() => navigate("/")}
            className="cursor-pointer"
          />
        </Tooltip>
      ),
      Document: <span className="cursor-pointer underline link">doc1.pdf</span>,
      Status: (
        <span class="py-2 px-3 bg-slate-100 text-black text-xs rounded-lg">
          Pending
        </span>
      ),
      Action: (
        <span>
          <Tooltip title="Approve">
            <CheckSquareOutlined
              onClick={() => setIsAproveModalOpen(true)}
              className="mx-1.5 cursor-pointer"
            />
          </Tooltip>
          <Tooltip title="Reject">
            <CloseSquareOutlined
              onClick={() => setIsRejectReasonModalOpen(true)}
              className="mx-1.5 cursor-pointer"
            />
          </Tooltip>
        </span>
      ),
    },
    {
      key: "2",
      affiliateName: "Alexander Davis",
      id: (
        <Link className="link" to="/view-service-providers">
          #231
        </Link>
      ),
      emailAddress: "alex43@gmail.com",
      requestedDate: "11-06-2024",
      comment: (
        <Tooltip title="View">
          <EyeOutlined
            onClick={() => navigate("/")}
            className="cursor-pointer"
          />
        </Tooltip>
      ),
      Document: <span className="cursor-pointer underline link">doc1.pdf</span>,
      Status: (
        <span class="py-2 px-3 bg-slate-100 text-black text-xs rounded-lg">
          Pending
        </span>
      ),
      Action: (
        <span>
          <Tooltip title="Approve">
            <CheckSquareOutlined
              onClick={() => setIsAproveModalOpen(true)}
              className="mx-1.5 cursor-pointer"
            />
          </Tooltip>
          <Tooltip title="Reject">
            <CloseSquareOutlined
              onClick={() => setIsRejectReasonModalOpen(true)}
              className="mx-1.5 cursor-pointer"
            />
          </Tooltip>
        </span>
      ),
    },
    {
      key: "3",
      affiliateName: "Alexander Davis",
      id: (
        <Link className="link" to="/view-service-providers">
          #232
        </Link>
      ),
      emailAddress: "alex43@gmail.com",
      requestedDate: "11-06-2024",
      comment: "",
      Document: <span className="cursor-pointer underline link">doc1.pdf</span>,
      Status: (
        <span class="py-2 px-3 bg-slate-100 text-black text-xs rounded-lg">
          Rejected
        </span>
      ),
      Action: (
        <span>
          <Tooltip title="Approve">
            <CheckSquareOutlined
              onClick={() => setIsRejectRequestModalOpen(true)}
              className="mx-1.5 cursor-pointer"
            />
          </Tooltip>
        </span>
      ),
    },
    {
      key: "4",
      affiliateName: "Alexander Davis",
      id: (
        <Link className="link" to="/view-service-providers">
          #233
        </Link>
      ),
      emailAddress: "alex43@gmail.com",
      requestedDate: "11-06-2024",
      comment: "",
      Document: <span className="cursor-pointer underline link">doc1.pdf</span>,
      Status: (
        <span class="py-2 px-3 bg-slate-100 text-black text-xs rounded-lg">
          Rejected
        </span>
      ),
      Action: (
        <span>
          <Tooltip title="Approve">
            <CheckSquareOutlined
              onClick={() => setIsRejectRequestModalOpen(true)}
              className="mx-1.5 cursor-pointer"
            />
          </Tooltip>
        </span>
      ),
    },
  ];
  const leadColumns = [
    {
      title: "Affiliate",
      dataIndex: "leadAffiliate",
      key: "name",
    },
    {
      title: "Business name",
      dataIndex: "businessName",
      key: "businessName",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Employees",
      dataIndex: "employees",
      key: "employees",
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
    },
    {
      title: "Status stage",
      dataIndex: "statusStage",
      key: "statusStage",
    },
    {
      title: "Status timeline",
      dataIndex: "statusTimeline",
      key: "statusTimeline",
    },
    {
      title: "Last Updated date time",
      dataIndex: "lastDate",
      key: "lastDate ",
    },
    {
      title: "Potential Commission",
      dataIndex: "potentialCommission",
      key: "potentialCommission",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action ",
    },
  ];
  const leadData = [
    {
      key: "1",
      leadAffiliate: "Alexander Davis",
      businessName: "Wellness",
      contact: "alex43@gmail.com + 19876543214",
      source: "Default",
      position: "",
      employees: "",
      industry: "",
      statusStage: "",
      statusTimeline: "",
      lastDate: "02-06-2024",
      potentialCommission: "",
      action: (
        <Tooltip title="View Note">
          <EyeOutlined
            onClick={() => navigate("/")}
            className="cursor-pointer"
          />
        </Tooltip>
      ),
    },
  ];
  const allDealColumns = [
    {
      title: "Affiliate",
      dataIndex: "leadAffiliate",
      key: "name",
    },
    {
      title: "Business name",
      dataIndex: "businessName",
      key: "businessName",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Employees",
      dataIndex: "employees",
      key: "employees",
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
    },
    {
      title: "Status stage",
      dataIndex: "statusStage",
      key: "statusStage",
    },
    {
      title: "Status timeline",
      dataIndex: "statusTimeline",
      key: "statusTimeline",
    },
    {
      title: "Last Updated date time",
      dataIndex: "lastDate",
      key: "lastDate ",
    },
    {
      title: "Commission",
      dataIndex: "potentialCommission",
      key: "potentialCommission",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action ",
    },
  ];
  const allDealData = [
    {
      key: "1",
      leadAffiliate: "Alexander Davis",
      businessName: "Wellness",
      contact: "alex43@gmail.com + 19876543214",
      source: "Default",
      position: "",
      employees: "",
      industry: "",
      statusStage: "",
      statusTimeline: "",
      lastDate: "02-06-2024",
      potentialCommission: "",
      action: (
        <Tooltip title="View Note">
          <EyeOutlined
            onClick={() => navigate("/")}
            className="cursor-pointer"
          />
        </Tooltip>
      ),
    },
  ];
  const commissionReportColumns = [
    {
      title: "Affiliate",
      dataIndex: "affiliate",
      key: "name",
    },
    {
      title: "Email address",
      dataIndex: "emailAddress ",
      key: "emailAddress",
    },
    {
      title: "Deal ID",
      dataIndex: "dealID",
      key: "dealID",
    },
    {
      title: "Lead date",
      dataIndex: "leadDate",
      key: "leadDate",
    },
    {
      title: "Deal close on ",
      dataIndex: "dealCloseDate",
      key: "dealCloseDate",
    },
    {
      title: "Commission %",
      dataIndex: "commissionPercentage",
      key: "commission",
    },
    {
      title: "Commission Amount",
      dataIndex: "commissionAmount",
      key: "commissionAmount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action ",
    },
  ];
  const commissionReportData = [
    {
      key: "1",
      affiliate: "John Smith",
      emailAddress: "johnsmith@gmail.com",
      dealID: "123",
      leadDate: "02-06-2024",
      dealCloseDate: "20-05-2024",
      commissionPercentage: "10%",
      commissionAmount: "1000",
      status: "Pending",
      action: (
        <Tooltip title="Mark as paid">
          <FileDoneOutlined
            onClick={() => navigate("/")}
            className="cursor-pointer"
          />
        </Tooltip>
      ),
    },
  ];
  const leadAffiliateName = [
    {
      value: "Alexander Davis",
      label: "Alexander Davis",
    },

    {
      value: "jack",
      label: "jack",
    },

    {
      value: "Davis",
      label: "Davis",
    },
    {
      value: "Tom",
      label: "Tom",
    },
  ];
  const opportunityDetailTable = [
    {
      key: "1",
      label: "Affiliates associated",
      children: (
        <div className="">
          <div className="flex justify-end mb-4">
            <Search
              placeholder="Search by affiliate name"
              style={{
                width: 250,
              }}
              className="mx-1.5 cursor-pointer"
            />
            <Button type="primary">Clear filter</Button>
          </div>
          <div className="w-full overflow-x-auto overflow-y-hidden">
            <Table
              className="w-[1400px]"
              columns={affiliatesAssociatedColumns}
              dataSource={affiliatesAssociatedData}
              rowClassName={() => "no-hover"}
            />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Pending Requests",
      children: (
        <div>
          <div className="flex justify-end gap-2 mb-4">
            <FilterOutlined className="mr-2" />
            <Select
              placeholder="Filter by status"
              options={pendingRequestFilter}
              style={{
                width: 150,
              }}
            />
            <Button type="primary">Clear filter</Button>
          </div>
          <div className="w-full overflow-x-auto overflow-y-hidden">
            <Table
              className="w-[1400px]"
              columns={pendingRequestsColumns}
              dataSource={pendingRequestsData}
            />
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "Leads",
      children: (
        <div>
          <div className="flex justify-end mb-4 gap-x-2.5	">
            <FilterOutlined className="" />
            <Select
              showSearch
              placeholder="Filter by affiliate name"
              options={leadAffiliateName}
              style={{
                width: 200,
              }}
            />
            <Select
              placeholder="Filter by status"
              options={leadAffiliateFilter}
              style={{
                width: 150,
              }}
            />
            <Button type="primary">Clear filter</Button>
            <Button type="primary" icon={<ExportOutlined />}>
              Export
            </Button>
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
          </div>
          <div className="w-full overflow-x-auto overflow-y-hidden">
            <Table
              className="w-[1400px] max-w-[1400px]"
              columns={leadColumns}
              dataSource={leadData}
            />
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label: "All deals",
      children: (
        <div>
          <div className="flex justify-end mb-4 gap-x-2.5	">
            <FilterOutlined className="" />
            <Select
              showSearch
              placeholder="Filter by affiliate name"
              options={leadAffiliateName}
              style={{
                width: 200,
              }}
            />
            <Select
              placeholder="Filter by status"
              options={leadAffiliateFilter}
              style={{
                width: 150,
              }}
            />
            <Button type="primary">Clear filter</Button>
            <Button type="primary" icon={<ExportOutlined />}>
              Export
            </Button>
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
          </div>
          <div className="w-full overflow-x-auto overflow-y-hidden">
            <Table
              className="w-[1400px] max-w-[1400px]"
              columns={allDealColumns}
              dataSource={allDealData}
            />
          </div>
        </div>
      ),
    },
    {
      key: "5",
      label: "Commission Report",
      children: (
        <div>
          <div className="flex justify-end mb-4 gap-x-2.5	items-center">
            <FilterOutlined className="" />
            <Select
              size="sm"
              placeholder="Filter by status"
              options={leadAffiliateFilter}
              style={{
                width: 200,
              }}
            />
            <Button type="primary">Clear filter</Button>
            <p class="py-2 px-3 bg-slate-100 text-black text-sm rounded-lg">
              Total Deals Closed - 30
            </p>
            <p class="py-2 px-3 bg-slate-100 text-black text-sm rounded-lg">
              Total Commission Amount - 30000
            </p>
          </div>
          <div className="w-full overflow-x-auto overflow-y-hidden">
            <Table
              className="w-[1400px]"
              columns={commissionReportColumns}
              dataSource={commissionReportData}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <Card className="opportunityDetail">
        <div className="flex items-center justify-between relative mb-4">
          <Typography className="text-xl font-semibold mb-10" align={"left"}>
            <LeftOutlined className="mr-2 " onClick={() => navigate(-1)} />
            Opportunity detail
          </Typography>
          <div className="flex justify-end flex-wrap gap-3 items-center	">
            <span class="py-2 px-3 bg-slate-100 text-black text-sm rounded-lg">
              Active
            </span>
            <Button
              type="primary"
              onClick={() => navigate("/create-opportunity")}
              icon={<EditOutlined />}
            >
              Edit
            </Button>
            <Button type="primary" icon={<DeleteOutlined />}>
              Delete
            </Button>
          </div>
        </div>
        <div>
          <Row gutter={[20, 20]}>
            <Col span={6}>Opportunity ID</Col>
            <Col span={18}>#1234</Col>
            <Col span={6}>Opportunity name</Col>
            <Col span={18}>Executive Bonus</Col>
            <Col span={6}>Description</Col>
            <Col span={18}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Col>
            <Col span={6}>Image</Col>
            <Col span={18}>
              <div className="">
                <img src="template.png" className="w-16 h-16" alt="" />
              </div>
            </Col>
            <Col span={6}>Is profile review required?</Col>
            <Col span={18}>
              <Switch disabled={disabled} defaultChecked />
            </Col>
            <Col span={6}>Agreement of opportunity</Col>
            <Col span={18}>
              <p className="w-[70%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col span={6}>Creator name</Col>
            <Col span={18}>John Smith </Col>
            <Col span={6}>Per deal cost</Col>
            <Col span={18}>$ 20.70</Col>
            <Col span={6}>Affiliate Commission</Col>
            <Col span={18}>10.25%</Col>
          </Row>
          <Divider />
          <h3 className="text-base	font-semibold	mb-4">
            Service Provider details
          </h3>
          <Row gutter={[20, 20]}>
            <Col span={6}>Service Provider ID</Col>
            <Col span={18}>
              <Link className="link" to="/view-service-providers">
                #1234{" "}
              </Link>
            </Col>
            <Col span={6}>Name</Col>
            <Col span={18}>Vantage iHub</Col>
            <Col span={6}>Email address</Col>
            <Col span={18}>vantage124@gmail.com</Col>
          </Row>
          <Divider />
          <h3 className="text-base	font-semibold	mb-4 ">Landing Page</h3>
          <Row gutter={[20, 20]}>
            <Col span={6}>Landing page</Col>
            <Col span={18}>
              <Link className="link" to="/view-service-providers">
                www.wellness.com
              </Link>
            </Col>
          </Row>
          <Divider />
          <div>
            <Tabs
              defaultActiveKey="1"
              items={opportunityDetailTable}
              onChange={tabChange}
            />
          </div>
        </div>
      </Card>
      <ReasonModal
        ReasonText="Specify your reason"
        ReasonPlaceholder="Enter your reason here"
        isOpen={isRejectReasonModalOpen}
        onOk={handleRejectReasonModalOk}
      />
      <PendingRequestDetails
        ReasonText="Request detail"
        isOpen={isAproveModalOpen}
        onOk={handleAproveModalOk}
        onCancel={handleAproveModalCancel}
      />
      <RejectRequestDetail
        ReasonText="Request detail"
        isOpen={isRejectRequestModalOpen}
        onOk={handleRejectRequestModalOk}
        onCancel={handleRejectRequestModalCancel}
      />
    </>
  );
};
export default OpportunityDetail;