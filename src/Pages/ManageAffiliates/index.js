import { Card, Typography, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import AllAffiliates from "./ManageAffiliatesTabs/AllAffiliates";
import DeleteRequests from "./ManageAffiliatesTabs/DeleteRequests";
const ManageAffiliates = () => {
  return (
    <>
      <Card>
        <div className="flex items-center justify-between relative mb-4">
          <Typography className="text-xl font-semibold mb-0" align={"left"}>
            Affiliates
          </Typography>
        </div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="All Affiliates" key="1">
            <AllAffiliates />
          </TabPane>
          <TabPane tab="Delete Requests " key="2">
            <DeleteRequests />
          </TabPane>
        </Tabs>
      </Card>
    </>
  );
};
export default ManageAffiliates;