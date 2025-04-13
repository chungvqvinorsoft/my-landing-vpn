import { Avatar, Card, Flex, Space } from "antd";
import TitleText from "../TitleText";
import starIcon from "../../access/icons/star.svg";
import classNames from "classnames/bind";
import styles from "./CardComment.module.css";
import ContentText from "../ContentText";
import { Comment } from "../../types/help";

const cx = classNames.bind(styles);

interface CardCommentProps {
  info: Comment;
}

function CardComment({ info }: CardCommentProps) {
  return (
    <Card className={cx("card")}>
      <Flex justify="space-between">
        <Space>
          <Avatar size={50} src={info?.avatar || ""} />
          <span>
            <p className={cx("name")}>{info?.userName || ""}</p>
            <ContentText>{info?.address || ""}</ContentText>
          </span>
        </Space>
        <Space>
          <TitleText>{info?.star || ""}</TitleText>
          <img src={starIcon} />
        </Space>
      </Flex>
      <TitleText>{info?.comment || ""}</TitleText>
    </Card>
  );
}

export default CardComment;
