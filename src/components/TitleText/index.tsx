import classNames from "classnames/bind";
import styles from "./TitleText.module.css";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface TitleTextProps {
    children?: string | ReactNode,
    content?: string,
}
function TitleText({children, content}: TitleTextProps) {
    return (
        <p className={cx('title-text')}>{children || content}</p>
    )
}

export default TitleText;