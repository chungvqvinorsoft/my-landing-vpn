import { FormItemProps } from "antd"

export interface FormItem extends FormItemProps {
    placeholder?: string,
    inputType: "INPUT" | "SELECT" | string,
    options?: Array<any>,
}