import classNames from "classnames/bind";
import styles from "./ProfileModal.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactDOM from "react-dom";
import Link from "next/link";

const cx = classNames.bind(styles);

function ProfileModal({ isShowing, hide }) {
  const handleStop = (e) => {
    e.stopPropagation();
  };

  const handleModal = (e) => {
    hide();
  };
  return isShowing
    ? ReactDOM.createPortal(
        <div onClick={(e) => handleModal(e)} className={cx("wrapper")}>
          <div onClick={(e) => handleStop(e)} className={cx("container")}>
            <AiOutlineCloseCircle onClick={hide} className={cx("close-btn")} />
            <div className={cx("info")}>
              <img src="Profile Pic.png" alt="Profile" />
              <p className={cx("nickname")}>@cameron</p>
              <span className={cx("email")}>cameron@email.com</span>
              <button className={cx("btn-setting")}>Settings</button>
            </div>
            <ul className={cx("list-btn")}>
              <li className={cx("item-btn")}>Docs</li>
              <li className={cx("item-btn")}>Referrals</li>
              <li className={cx("item-btn")}>Help Center</li>
              <li className={cx("item-btn")}>Notifications</li>
              <Link href="/">
                <li className={cx("item-btn")}>Sign out</li>
              </Link>
            </ul>
          </div>
        </div>,
        document.body
      )
    : null;
}

export default ProfileModal;
