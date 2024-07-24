import {
  Col,
  Row,
  Typography,
  Button,
  Input,
  Form,
  Layout,
  Card,
  Flex,
} from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const Login = () => {
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
                  Admin Login
                </Title>
                <Form
                  name="login"
                  layout="vertical"
                  style={{
                    maxWidth: 400,
                    minWidth: 400,
                    marginTop: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Email Address"
                    name="email address"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email address!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your password!",
                      },
                    ]}
                  >
                    <Input.Password size="large" />
                  </Form.Item>
                  <div className="text-right">
                    <Link to="/forgot-password">
                      <Button className="p-0 font-semibold" type="link">
                        Forgot Password?
                      </Button>
                    </Link>
                  </div>
                  <Button
                    className="w-full mt-4"
                    size="large"
                    type="primary"
                    htmlType="submit"
                  >
                    Login
                  </Button>
                </Form>
              </Card>
            </Flex>
          </Col>
        </Row>
      </Layout>
    </>
  );
};
export default Login;