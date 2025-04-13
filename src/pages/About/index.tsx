import { Button, Col, Divider, Flex, Row } from "antd";
import classNames from "classnames/bind";
import styles from "./About.module.css";
import aboutImg from "../../access/icons/about.svg";
import HeaderText from "../../components/HeaderText";
import TitleText from "../../components/TitleText";
import { info } from "./about";

const cx = classNames.bind(styles);

function About() {
  return (
    <section id="about">
      <Row gutter={[32, 0]} align={"bottom"} className={cx("row")}>
        <Col xs={24} sm={24} md={12}>
          <HeaderText>Want anything to be easy with LaslesVPN.</HeaderText>
          <TitleText>
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </TitleText>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <img src={aboutImg} className={cx("image")} />
        </Col>
      </Row>
      <Row gutter={[24, 24]} className={cx("info")}>
        {info?.map((item, index) => {
          return (
            <>
              <Col key={item?.key} xs={24} sm={24} md={24 / info?.length - 1}>
                <Flex className={cx("info-item")} gap={24}>
                  <img src={item?.icon} />
                  <span>
                    <p className={cx('count')}>{item?.info}</p>
                    <p className={cx('label')}>{item?.label}</p>
                  </span>
                </Flex>
              </Col>
              {index !== info.length - 1 && (
                <Divider
                  orientation="end"
                  type="vertical"
                  className={cx("divider")}
                />
              )}
            </>
          );
        })}
      </Row>
    </section>
  );
}

export default About;
