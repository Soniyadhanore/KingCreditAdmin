import { Button, Result, Layout, Card, Flex } from "antd";
const UpdatedPassword = () => {
  return (
    <>
      <Layout>
        <Flex
          gap="middle"
          align="center"
          justify="center"
          vertical
          style={{ minHeight: "100vh" }}
        >
          <Card className="relative p-0">
            <img
              width={150}
              src="logo.svg"
              alt=""
              className="mx-auto absolute top-[-90px] left-0 right-0"
            />
            <Result
              className="p-4"
              status="success"
              title="Your password has been updated successfully!"
              //subTitle=""
              extra={[
                <Button
                  type="primary"
                  className="ant-btn-primary ant-btn-lg mt-4"
                >
                  Login
                </Button>,
              ]}
            />
          </Card>
        </Flex>
      </Layout>
    </>
  );
};
export default UpdatedPassword;