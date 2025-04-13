import classNames from "classnames/bind";
import styles from "./Help.module.css";
import HeaderText from "../../components/HeaderText";
import TitleText from "../../components/TitleText";
import { comment } from "./help";
import CarouselComment from "../../components/CarouselComment";
import { Button, Col, Flex, Row, Space } from "antd";
const cx = classNames.bind(styles);

function Help() {
  return (
    <section id="help" className={cx("help")}>
      <div className={cx("header")}>
        <HeaderText>Trusted by Thousands of Happy Customer</HeaderText>
      </div>
      <div className={cx("title")}>
        <TitleText>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </TitleText>
      </div>
      <CarouselComment comment={comment} />
    </section>
  );
}

export default Help;
