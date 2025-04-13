import classNames from "classnames/bind";
import styles from "./ContentText.module.css";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface ContentTextProps {
    children?: string | ReactNode,
    content?: string,
}

function ContentText({children, content} : ContentTextProps) {
    return (
        <p className={cx('content-text')}>{children || content}</p>
    )
}
export default ContentText;