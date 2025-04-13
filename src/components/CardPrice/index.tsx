import { Button, Card, Flex, List } from "antd";
import ContentText from "../ContentText";
import giftImage from "../../access/icons/gift.svg";
import checkSolidImage from "../../access/icons/check-solit.svg";
import { Price } from "../../types/price";
import classNames from "classnames/bind";
import styles from "./CardPrice.module.css";
import { useState } from "react";

const cx = classNames.bind(styles);

interface CardProps {
  info: Price;
}

function CardPrice({ info }: CardProps) {
  const { name, features, price } = info;
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleOnMouseEnter = () => {
    setIsHover(!isHover);
  };

  const handleOnMouseLeave = () => {
    setIsHover(!isHover);
  };
  return (
    <Card
      className={cx("card")}
      actions={[
        <>
          <p className={cx("price")}>{price || ""}</p>
          <Button
            color="danger"
            variant={isHover ? "solid" : 'outlined'}
            type={isHover ? "primary" : 'text'}
            className={cx("button", isHover && "shadow")}
          >
            Select
          </Button>
        </>,
      ]}
      onMouseEnter={() => handleOnMouseEnter()}
      onMouseLeave={() => handleOnMouseLeave()}
    >
      <img src={giftImage} className={cx("image")} />
      <p className={cx("name")}>{name || ""}</p>
      <List
        size="small"
        dataSource={features || []}
        renderItem={(item) => {
          return (
            <List.Item className={cx("list-item")}>
              <img src={checkSolidImage} />
              <ContentText>{item}</ContentText>
            </List.Item>
          );
        }}
      />
    </Card>
  );
}

export default CardPrice;
