import classNames from "classnames/bind";
import styles from "./FormItem.module.css";
import { Flex, Form, Input, Space } from "antd";
import { FormItem as FormItemType } from "../../types/formItem";

const cx = classNames.bind(styles);

interface FormItemProps {
  info: FormItemType;
}

function FormItem({ info }: FormItemProps) {
  const renderItem = (item: FormItemType) => {
    switch (item.inputType) {
      case "INPUT":
        return (
          <Input placeholder={item?.placeholder} className={cx("input")} />
        );
      default:
        return <></>;
    }
  };
  return (
    <Form.Item
      label={info?.label}
      name={info?.name}
      rules={info?.rules || []}
      layout={info?.layout}
      className={cx("form-item")}
    >
      {renderItem(info)}
    </Form.Item>
  );
}

export default FormItem;
