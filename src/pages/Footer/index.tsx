import { Button, Col, Flex, List, Modal, Row, Space } from "antd";
import HeaderText from "../../components/HeaderText";
import TitleText from "../../components/TitleText";
import styles from "./Footer.module.css";
import classNames from "classnames/bind";
import logo from "../../access/icons/logo.svg";
import { details, social, userContact } from "./footer";
import FormInfo from "../../components/FormInfo";
import { useState } from "react";
import { FormInstance, useForm } from "antd/es/form/Form";
import { UserContactType } from "../../types/footer";

const cx = classNames.bind(styles);

const modalStyles = {
  body: {
    minHeight: 320,
  },
};
function Footer() {
  const [isOpenModalContact, setIsModalContact] = useState<boolean>();
  const [formContact] = useForm<FormInstance<UserContactType>>();
  const handleOk = async () => {
    try {
      formContact.submit();
      await formContact.validateFields();
      const user = formContact.getFieldsValue();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={cx("footer")}>
      <Row gutter={[24, 24]} justify="space-between" className={cx("register")}>
        <Col xs={24} sm={24} md={12}>
          <Space direction="vertical">
            <HeaderText>Subscribe Now for Get Special Features!</HeaderText>
            <TitleText>Let's subscribe with us and find the fun.</TitleText>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Flex
            align="center"
            justify="flex-end"
            className={cx("wraper-button")}
          >
            <Button
              className={cx("button")}
              type="primary"
              onClick={() => setIsModalContact(!isOpenModalContact)}
            >
              Subscribe Now
            </Button>
          </Flex>
        </Col>
      </Row>
      <Row gutter={[24, 24]} className={cx("footer-content")}>
        <Col xs={24} sm={24} md={12}>
          <div className={cx("logo")}>
            <img src={logo} />
            <p className={cx("name")}>LaslesVPN</p>
          </div>
          <div className={cx("lead")}>
            <TitleText>
              LaslesVPN is a private virtual network that has unique features
              and has high security.
            </TitleText>
          </div>
          <Flex className={cx("social")}>
            {social?.map((item) => (
              <img key={item?.key} src={item?.icon} />
            ))}
          </Flex>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Row justify={"space-between"}>
            {details?.map((item) => {
              return (
                <List
                  header={<p className={cx("list-header")}>{item?.label}</p>}
                  dataSource={item?.child}
                  renderItem={(child) => (
                    <List.Item className={cx("list-item")}>{child}</List.Item>
                  )}
                  className={cx("list")}
                />
              );
            })}
          </Row>
        </Col>
      </Row>
      <Modal
        open={isOpenModalContact}
        onCancel={() => setIsModalContact(!isOpenModalContact)}
        centered
        footer={[
          <Button
            key="back"
            onClick={() => setIsModalContact(!isOpenModalContact)}
          >
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Contact
          </Button>,
        ]}
        styles={modalStyles}
        destroyOnClose
        title={"Subscribe Now"}
      >
        <FormInfo form={formContact} listItem={userContact} />
      </Modal>
    </div>
  );
}

export default Footer;
