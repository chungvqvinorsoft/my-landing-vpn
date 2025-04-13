import classNames from "classnames/bind";
import styles from "./Testimonials.module.css";
import HeaderText from "../../components/HeaderText";
import TitleText from "../../components/TitleText";
import mapImage from "../../access/images/testimonials.png";
import brandImage from "../../access/images/brand.png";

const cx = classNames.bind(styles);

function Testimonials() {
  return (
    <section id="testimonials">
      <div className={cx("header")}>
        <HeaderText>Huge Global Network of Fast VPN</HeaderText>
      </div>
      <div className={cx("title")}>
        <TitleText>
          See LaslesVPN everywhere to make it easier for you when you move
          locations.
        </TitleText>
      </div>
      <img className={cx('image')} src={mapImage} />
      <img className={cx('image')}  src={brandImage} />
    </section>
  );
}

export default Testimonials;
