import classNames from "classnames/bind";
import styles from "./Pricing.module.css";
import HeaderText from "../../components/HeaderText";
import TitleText from "../../components/TitleText";
import { Col,  Row } from "antd";
import { prices } from "./pricing";
import CardPrice from "../../components/CardPrice";

const cx = classNames.bind(styles);

function Pricing() {
  return (
    <section id="pricing" className={cx('pricing')}>
      <div className={cx("header")}>
        <HeaderText>Choose Your Plan</HeaderText>
        <TitleText>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </TitleText>
      </div>
      <Row gutter={[16, 16]}>
        {prices?.map((item) => {
          return (
            <Col key={item?.key} xs={24} sm={24} md={24 / prices.length}>
              <CardPrice info={item} />
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default Pricing;
