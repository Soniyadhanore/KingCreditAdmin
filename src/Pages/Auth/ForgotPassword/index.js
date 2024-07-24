import {
  Typography,
  Button,
  Input,
  Form,
  Layout,
  Card,
  Flex,
  Row,
  Col,
} from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const ForgotPassword = () => {
  return (
    <>
      <Layout>
        <Row>
          <Col span={12}>
            <div
              className="relative h-screen bg-cover	w-full bg-no-repeat	bg-bottom	flex justify-end"
              style={{
                backgroundImage: `url("login-banner.jpg")`,
              }}
            >
              <div className=" bg-black/40 shadow-md rounded-md	 flex justify-end items-end	 p-16">
                <p className="text-white text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <Flex
              gap="middle"
              align="center"
              justify="center"
              vertical
              style={{ minHeight: "100vh" }}
            >
              <Card className="relative">
                <Title level={3} align={"center"}>
                  Forgot Password
                </Title>
                <p className="text-center text-md">
                  Enter registered email address to receive reset password link
                </p>
                <Form
                  name="login"
                  layout="vertical"
                  style={{
                    maxWidth: 500,
                    minWidth: 500,
                    marginTop: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
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
                    <Input size="large" />
                  </Form.Item>
                  <Link to="/reset-password">
                    <Button
                      className="w-full mt-3"
                      size="large"
                      type="primary"
                      htmlType="submit"
                    >
                      Send link
                    </Button>
                  </Link>
                  <div className="text-center mt-4">
                    <Link to="/" className="text-center base-text underline">
                      Back to login
                    </Link>
                  </div>
                </Form>
              </Card>
            </Flex>
          </Col>
        </Row>
      </Layout>
    </>
  );
};
export default ForgotPassword;