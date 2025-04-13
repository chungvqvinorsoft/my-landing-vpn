import classNames from "classnames/bind";
import styles from "./Features.module.css";
import { Button, Col, List, Row } from "antd";
import HeaderText from "../../components/HeaderText";
import TitleText from "../../components/TitleText";
import featuresImage from "../../access/icons/feature.svg";
import { features } from "./feature";
import checkIcon from "../../access/icons/check.svg";
import ContentText from "../../components/ContentText";

const cx = classNames.bind(styles);

function Features() {
  return (
    <section id="features">
      <Row gutter={[32, 0]} align={"bottom"} className={cx("row")}>
        <Col xs={24} sm={24} md={16}>
          <img src={featuresImage} className={cx("image")} />
        </Col>
        <Col xs={24} sm={24} md={8}>
          <HeaderText>We Provide Many Features You Can Use</HeaderText>
          <TitleText>
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </TitleText>
          <List
            itemLayout="horizontal"
            dataSource={features}
            bordered={false}
            size="small"
            renderItem={(item) => (
              <List.Item className={cx('feature-item')}>
                <img src={checkIcon} />
                <ContentText> {item}</ContentText>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </section>
  );
}

export default Features;
