import styles from "./ModalHome.module.scss";
import classNames from "classnames/bind";
import ReactDOM from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlineContentCopy } from "react-icons/md";
import { useRef } from "react";

const cx = classNames.bind(styles);

function ModalHome({ isShowing, hide }) {
  const idRef = useRef();

  const handleCloseModal = () => {
    hide();
  };

  const handleStopCloseModal = (e) => {
    e.stopPropagation();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(idRef.current.innerText);
    alert("Copied !");
  };

  return isShowing
    ? ReactDOM.createPortal(
        <div onClick={handleCloseModal} className={cx("wrapper")}>
          <div onClick={(e) => handleStopCloseModal(e)} className={cx("inner")}>
            <div className={cx("modal-header")}>
              <h3 className={cx("title")}>Funding Source</h3>
              <AiOutlineCloseCircle
                onClick={hide}
                className={cx("close-btn")}
              />
            </div>
            <div className={cx("modal-content")}>
              <ul>
                <li className={cx("modal-item")}>
                  <div className={cx("item-info")}>
                    <h3 className={cx("item-name")}>Bank account</h3>
                    <span className={cx("item-desc")}>Connect new</span>
                  </div>
                  <button className={cx("btn-item")}>Current</button>
                </li>
                <li className={cx("modal-item")}>
                  <div className={cx("item-info")}>
                    <h3 className={cx("item-name")}>Debit / Credit</h3>
                    <span className={cx("item-desc")}>Add card</span>
                  </div>
                </li>
                <li className={cx("modal-item")}>
                  <div className={cx("item-info")}>
                    <h3 className={cx("item-name")}>Wire transfer</h3>
                    <span className={cx("item-desc")}>More info</span>
                  </div>
                </li>
                <li className={cx("modal-item")}>
                  <div className={cx("item-info")}>
                    <h3 className={cx("item-name")}>Crypto</h3>
                    <span ref={idRef} className={cx("item-desc")}>
                      0x23..4935
                    </span>
                    <MdOutlineContentCopy
                      className={cx("copy-btn")}
                      onClick={handleCopy}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
}

export default ModalHome;
