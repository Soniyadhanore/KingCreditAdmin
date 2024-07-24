import {
  Typography,
  Button,
  Input,
  Form,
  Layout,
  Card,
  Flex,
  Col,
  Row,
} from "antd";
const { Title } = Typography;
const ResetPassword = () => {
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
                  Reset Password
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
                    label="New password"
                    name="newPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please enter  your new  password",
                      },
                    ]}
                  >
                    <Input.Password size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Confirm new password"
                    name="confirm new password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your confirm new password",
                      },
                    ]}
                  >
                    <Input.Password size="large" />
                  </Form.Item>
                  <Button
                    className="w-full mt-3"
                    size="large"
                    type="primary"
                    htmlType="submit"
                  >
                    Change Password
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
export default ResetPassword;