import { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./HeaderText.module.css";

const cx = classNames.bind(styles);
interface HeaderTextProps {
    children?: string | ReactNode,
    content?: string,
}

function HeaderText({children, content}: HeaderTextProps) {
    return (
        <p className={cx('header-text')}>{children || content}</p>
    )
}

export default HeaderText;