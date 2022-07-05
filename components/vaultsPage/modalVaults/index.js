import ReactDOM from "react-dom";
import styles from "./ModalVaults.module.scss";
import className from "classnames/bind";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

const cx = className.bind(styles);

function ModalVaults({ isShowing, hide }) {
  const [active, setActive] = useState("tab-1");
  const [select, setSelect] = useState("sl-1");
  const [balance, setBalance] = useState("1000");

  const handleStop = (e) => {
    e.stopPropagation();
  };

  const handleModal = (e) => {
    hide();
  };

  const setTab1 = () => {
    setActive("tab-1");
  };

  const setTab2 = () => {
    setActive("tab-2");
  };

  const handleSelected1 = () => {
    setSelect("sl-1");
    setBalance(balance * 2);
  };

  const handleSelected2 = () => {
    setSelect("sl-2");
    setBalance(balance * 4);
  };

  const handleSelected3 = () => {
    setSelect("sl-3");
    setBalance(balance * 6);
  };

  const handleSelected4 = () => {
    setSelect("sl-4");
    setBalance(balance * 10);
  };

  return isShowing
    ? ReactDOM.createPortal(
        <div onClick={handleModal} className={cx("wrapper")}>
          <div onClick={(e) => handleStop(e)} className={cx("inner")}>
            <div className={cx("header-modal")}>
              <div className={cx("action-header")}>
                <img src="USDC Icon.png" alt="USDC" />
                <p className={cx("token-name")}>USDC Vault</p>
                <button
                  onClick={setTab1}
                  className={
                    active === "tab-1"
                      ? cx("btn-action", "active")
                      : cx("btn-action")
                  }
                >
                  Deposit
                </button>
                <button
                  onClick={setTab2}
                  className={
                    active === "tab-2"
                      ? cx("btn-action", "active")
                      : cx("btn-action")
                  }
                >
                  Redeem
                </button>
              </div>
              <AiOutlineCloseCircle
                onClick={hide}
                className={cx("icon-header")}
              />
            </div>
            <div
              className={
                active === "tab-1"
                  ? cx("content-modal", "active")
                  : cx("content-modal")
              }
            >
              <div className={cx("balance")}>
                <span>$</span>
                <p className={cx("balance-num")}>
                  {new Intl.NumberFormat().format(balance)}
                </p>
                <p className={cx("balance-max")}>Max</p>
              </div>
              <div className={cx("selection")}>
                <div className={cx("input-group")}>
                  <label htmlFor="checkbox">Loop</label>
                  <input type="checkbox" id="checkbox" />
                </div>
                <ul className={cx("select-group")}>
                  <li
                    onClick={handleSelected1}
                    className={
                      select === "sl-1"
                        ? cx("select-item", "active")
                        : cx("select-item")
                    }
                  >
                    <span className={cx("select-inner")}>2x</span>
                  </li>
                  <li
                    onClick={handleSelected2}
                    className={
                      select === "sl-2"
                        ? cx("select-item", "active")
                        : cx("select-item")
                    }
                  >
                    <span className={cx("select-inner")}>4x</span>
                  </li>
                  <li
                    onClick={handleSelected3}
                    className={
                      select === "sl-3"
                        ? cx("select-item", "active")
                        : cx("select-item")
                    }
                  >
                    <span className={cx("select-inner")}>6x</span>
                  </li>
                  <li
                    onClick={handleSelected4}
                    className={
                      select === "sl-4"
                        ? cx("select-item", "active")
                        : cx("select-item")
                    }
                  >
                    <span className={cx("select-inner")}>10x</span>
                  </li>
                </ul>
                <div className={cx("count")}>
                  <span className={cx("count-balance")}>Balance</span>
                  <span className={cx("count-num")}>
                    {new Intl.NumberFormat().format(balance)} USDC
                  </span>
                </div>
              </div>
              <button className={cx("btn-content")}>Deposit Funds</button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
}

export default ModalVaults;
