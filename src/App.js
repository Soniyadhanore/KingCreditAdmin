import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import HeaderComponent from "./Layout/HeaderComponent";
import LeftSidebar from "./Layout/LeftSidebar";
import Login from "./Pages/Auth/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import ManageServiceProviders from "./Pages/ManageServiceProviders";
import CreateServiceProvider from "./Pages/ManageServiceProviders/CreateServiceProvider";
import ViewServiceProvider from "./Pages/ManageServiceProviders/ViewServiceProvider";
import AccountSettings from "./Pages/AccountSettings";
import ManageOpportunity from "./Pages/ManageOpportunity";
import CreateOpportunity from "./Pages/ManageOpportunity/CreateOpportunity";
import OpportunityDetail from "./Pages/ManageOpportunity/OpportunityDetail";
import EditOpportunity from "./Pages/ManageOpportunity/EditOpportunity";
import ManageAffiliates from "./Pages/ManageAffiliates";
import AffiliateDetail from "./Pages/ManageAffiliates/AffiliateDetail";
import EditAffiliate from "./Pages/ManageAffiliates/EditAffiliate";
const { Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = (collapsedState) => {
    setCollapsed(collapsedState);
  };
  return (
    <Router>
      <Routes>
        {/* auth Route */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* Layout with Sidebar and Header */}
        <Route
          path="/*"
          element={
            <Layout style={{ minHeight: "100vh" }}>
              <LeftSidebar
                collapsed={collapsed}
                toggleCollapsed={toggleSidebar}
              />
              <Layout>
                <HeaderComponent toggleCollapsed={toggleSidebar} />
                <Content style={{ margin: "16px 16px" }}>
                  <Routes>
                    {/* Dashboard Route */}
                    <Route
                      path="/manage-affiliates"
                      element={<ManageAffiliates />}
                    />
                    <Route
                      path="/view-affiliates"
                      element={<AffiliateDetail />}
                    />
                    <Route
                      path="/edit-affiliates"
                      element={<EditAffiliate />}
                    />
                    <Route
                      path="/manage-service-providers"
                      element={<ManageServiceProviders />}
                    />
                    <Route
                      path="/create-service-providers"
                      element={<CreateServiceProvider />}
                    />
                    <Route
                      path="/view-service-providers"
                      element={<ViewServiceProvider />}
                    />
                    <Route
                      path="/account-setting"
                      element={<AccountSettings />}
                    />
                    <Route
                      path="/manage-opportunity"
                      element={<ManageOpportunity />}
                    />
                    <Route
                      path="/create-opportunity"
                      element={<CreateOpportunity />}
                    />
                    <Route
                      path="/opportunity-details"
                      element={<OpportunityDetail />}
                    />
                    <Route
                      path="/edit-opportunity"
                      element={<EditOpportunity />}
                    />
                  </Routes>
                </Content>
              </Layout>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};
export default App;