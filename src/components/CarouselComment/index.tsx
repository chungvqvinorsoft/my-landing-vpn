import { Button, Carousel, Flex, Grid } from "antd";
import { Comment } from "../../types/help";
import React, { useRef } from "react";
import CardComment from "../CardComment/inde";
import styles from "./CarouselComment.module.css";
import classNames from "classnames/bind";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons";
import { CarouselRef } from "antd/es/carousel";

const cx = classNames.bind(styles);
interface CarouselCommentProps {
  comment: Array<Comment>;
}
const contentStyle: React.CSSProperties = {};
function CarouselComment({ comment }: CarouselCommentProps) {
  const refCarousel = useRef<CarouselRef>(null);
  const { useBreakpoint } = Grid;
  const isMobile = useBreakpoint();
  let paging = isMobile?.xs ? 1 : isMobile?.sm && !isMobile?.md ? 2 : 3;
  const chunkArray = (array: Array<Comment>, size: number) =>
    Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  const slides = chunkArray(comment, paging);
  const handlePre = () => {
    if (refCarousel) {
      refCarousel?.current?.prev();
    }
  };

  const handleNext = () => {
    if (refCarousel) {
      refCarousel?.current?.next();
    }
  };
  return (
    <>
      <Carousel
        dots={{ className: cx("dot") }}
        className={cx("carousel")}
        ref={refCarousel}
        draggable
      >
        {slides?.map((group, index) => {
          return (
            <div>
              <div key={index} style={contentStyle}>
                <Flex gap={80}>
                  {group?.map((item) => (
                    <CardComment info={item} />
                  ))}
                </Flex>
              </div>
            </div>
          );
        })}
      </Carousel>
      {(isMobile?.xs || isMobile?.sm) && !isMobile?.md ? (
        <> </>
      ) : (
        <Flex justify="flex-end" gap={16}>
          <Button
            className={cx("button")}
            color="danger"
            variant="outlined"
            onClick={() => handlePre()}
          >
            <ArrowLeftIcon />
          </Button>
          <Button
            className={cx("button")}
            color="danger"
            variant="outlined"
            onClick={() => handleNext()}
          >
            <ArrowRightIcon />
          </Button>
        </Flex>
      )}
    </>
  );
}

export default CarouselComment;
