import classNames from "classnames/bind";
import styles from "./Authentication.module.css";
import { Button, Modal, Tabs, TabsProps } from "antd";
import { useEffect, useState } from "react";
import { tabs } from "./authentication";
import { FormInstance, useForm } from "antd/es/form/Form";
import { UserInfo, UserInfoRegister } from "../../types/login";
import FormInfo from "../../components/FormInfo";

const cx = classNames.bind(styles);

interface AuthenticationProps {
  open: boolean;
  onClose: (value: string) => void;
  tabInit: string;
}

function Authentication({ open, onClose, tabInit }: AuthenticationProps) {
  const [tabActive, setTabActive] = useState<string>("");
  const [formLogin] = useForm<FormInstance<UserInfo>>();
  const [formRegister] = useForm<FormInstance<UserInfoRegister>>();
  useEffect(() => {
    setTabActive(tabInit);
  }, [tabInit]);

  const items: TabsProps["items"] = tabs.map((tab) => {
    if (tab.key === "#si") {
      return {
        key: tab?.key,
        label: tab?.label,
        children: <FormInfo form={formLogin} listItem={tab?.children} />,
      };
    } else if (tab.key === "#su") {
      return {
        key: tab?.key,
        label: tab?.label,
        children: <FormInfo form={formRegister} listItem={tab?.children} />,
      };
    } else {
      return {
        key: tab?.key,
        label: tab?.label,
        children: "",
      };
    }
  });

  const handleCancel = () => {
    setTabActive("#si");
    onClose("#si");
  };

  const modalStyles = {
    body: {
      minHeight: 320,
    },
  };

  const handleSubmitLogin = async () => {
    try {
      await formLogin.validateFields();
      const user = formLogin.getFieldsValue();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitRegister = async () => {
    try {
      await formRegister.validateFields();
      const user = formRegister.getFieldsValue();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOk = () => {
    if (tabActive === "#si") {
      handleSubmitLogin();
    } else {
      handleSubmitRegister();
    }
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      centered
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          {tabActive === "#si" ? "Sign in" : "Sign up"}
        </Button>,
      ]}
      styles={modalStyles}
      destroyOnClose
    >
      <Tabs
        defaultActiveKey={tabInit}
        items={items}
        onChange={(key: string) => setTabActive(key)}
        size="large"
        activeKey={tabActive}
        className={cx("tab")}
      />
    </Modal>
  );
}

export default Authentication;
