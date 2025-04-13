import classNames from "classnames/bind";
import styles from "./FormInfo.module.css";
import { Form } from "antd";
import { FormInstance } from "antd/es/form/Form";
import { FormItem as FormItemType} from "../../types/formItem";
import FormItem from "../FormItem";

const cx = classNames.bind(styles);

interface FormInfoProps {
  listItem: Array<FormItemType>,
  form: FormInstance
}

function FormInfo({ listItem, form }: FormInfoProps) {
  return (
    <Form
      initialValues={{ remember: true }}
      autoComplete="off"
      form={form}
    >
      {listItem?.map(item => {
        return (
          <FormItem info={item} key={item?.name}/>
        )
      })}
    </Form>
  );
}

export default FormInfo;
