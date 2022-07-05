import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { BsBell } from "react-icons/bs";
import ProfileModal from "./modalProfile";
import useModal from "../../customHooks";

const cx = classNames.bind(styles);
function Header({ namePage }) {
  const { isShowing, toggle } = useModal();

  return (
    <header className={cx("header")}>
      <ProfileModal isShowing={isShowing} hide={toggle} />
      <div className={cx("header-container")}>
        <h3 className={cx("header-page")}>{namePage}</h3>
        <div className={cx("header-action")}>
          <div className={cx("header-logo")}>
            <img
              src="Rectangle 287.png"
              className={cx("header-logo-item")}
            ></img>
            <span className={cx("header-logo-name")}>Ethereum</span>
          </div>
          <div className={cx("header-notification")}>
            <BsBell className={cx("header-notification-bell")} />
            <div className={cx("header-notification-dots")}></div>
          </div>
          <div onClick={toggle} className={cx("header-user")}>
            <img src="Profile Pic.png" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
