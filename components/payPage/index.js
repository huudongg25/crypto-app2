import classNames from "classnames/bind";
import styles from "./PayPage.module.scss";
import { RiExchangeFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Modal from "../swapPage/modal";
import useModal from "../../customHooks";

const cx = classNames.bind(styles);

function PayPage() {
  const [tabs, setTabs] = useState("tabs-1");
  const { isShowing, toggle } = useModal();

  const setTab1 = () => {
    setTabs("tabs-1");
  };

  const setTab2 = () => {
    setTabs("tabs-2");
  };

  return (
    <div className={cx("wrapper")}>
      <Modal isShowing={isShowing} hide={toggle} />
      <div className={cx("pay-container")}>
        <div className={cx("pay-header")}>
          <button
            onClick={setTab1}
            className={
              tabs === "tabs-1" ? cx("pay-btn", "active") : cx("pay-btn")
            }
          >
            Send
          </button>
          <button
            onClick={setTab2}
            className={
              tabs === "tabs-2" ? cx("pay-btn", "active") : cx("pay-btn")
            }
          >
            Receive
          </button>
        </div>
        <div
          className={tabs === "tabs-1" ? cx("count", "active") : cx("count")}
        >
          <span className={cx("count-currency")}>$</span>
          <span className={cx("count-num")}>0</span>
          <div className={cx("currency-change")}>
            <RiExchangeFill className={cx("currency-icon")} />
            <span className={cx("nickname")}>USDC</span>
          </div>
        </div>
        <div
          className={
            tabs === "tabs-1" ? cx("form-pay", "active") : cx("form-pay")
          }
        >
          <ul className={cx("form-group")}>
            <li className={cx("form-item")}>
              <h3 className={cx("title")}>Pay with</h3>
              <div onClick={toggle} className={cx("currency-group")}>
                <img src="USDC Icon.png" alt="USDC" />
                <span>USDC</span>
                <IoIosArrowDown className={cx("group-icon")} />
              </div>
            </li>
            <li className={cx("form-item")}>
              <h3 className={cx("input-lable")}>To</h3>
              <input
                className={cx("input-item")}
                type="text"
                placeholder="@username"
              />
            </li>
            <li className={cx("form-item")}>
              <h3 className={cx("input-lable")}>Note</h3>
              <input
                className={cx("input-item")}
                type="text"
                placeholder="leave a message"
              />
            </li>
          </ul>
        </div>
        <div
          className={
            tabs === "tabs-2" ? cx("qr-code", "active") : cx("qr-code")
          }
        >
          <img src="qr-code-removebg-preview 1.png" alt="" />
          <span className={cx("scan")}>Scan</span>
        </div>
        <div
          className={tabs === "tabs-2" ? cx("asset", "active") : cx("asset")}
        >
          <div className={cx("asset-group")}>
            <h3 className={cx("title")}>Asset</h3>
            <div onClick={toggle} className={cx("currency-group")}>
              <img src="USDC Icon.png" alt="USDC" />
              <span>USDC</span>
              <IoIosArrowDown className={cx("group-icon")} />
            </div>
          </div>
        </div>
        <div className={cx("form-general")}>
          <button className={cx("form-btn")}>Continue</button>
          <div className={cx("form-footer")}>
            <span className={cx("form-balance")}>USDC Balance</span>
            <span className={cx("form-balance")}>1,918 USDT = $1,918</span>
          </div>
        </div>
      </div>
      <div className={cx("recent-container")}>
        <h3 className={cx("header-recent")}>Recent Activity</h3>
        <ul className={cx("recent-list")}>
          <li className={cx("recent-item")}>
            <span className={cx("recent-transfer")}>Outgoing transfer</span>
            <p className={cx("recent-nofi")}>You sent $25 USDC to @subway</p>
            <span className={cx("recent-time")}>May 11</span>
          </li>
          <li className={cx("recent-item")}>
            <span className={cx("recent-transfer")}>Outgoing transfer</span>
            <p className={cx("recent-nofi")}>You sent $150 USDC to @pacsun</p>
            <span className={cx("recent-time")}>May 11</span>
          </li>
          <li className={cx("recent-item")}>
            <span className={cx("recent-transfer")}>Incoming transfer</span>
            <p className={cx("recent-nofi")}>
              You received 0.95 ETH from @james
            </p>
            <span className={cx("recent-time")}>May 11</span>
          </li>
          <li className={cx("recent-item")}>
            <span className={cx("recent-transfer")}>Outgoing transfer</span>
            <p className={cx("recent-nofi")}>
              You sent 0.045 BTC to @christian
            </p>
            <span className={cx("recent-time")}>May 11</span>
          </li>
          <li className={cx("recent-item")}>
            <span className={cx("recent-transfer")}>Incoming transfer</span>
            <p className={cx("recent-nofi")}>
              You received $20 USDC from @grace
            </p>
            <span className={cx("recent-time")}>May 11</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PayPage;
