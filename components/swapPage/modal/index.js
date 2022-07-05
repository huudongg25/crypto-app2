import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Modal.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactDOM from "react-dom";

const cx = classNames.bind(styles);

const data = [
  {
    name: "USD Coin",
    sign: "USDC",
    url: "USDC Icon.png",
  },
  {
    name: "Binance USD",
    sign: "BUSD",
    url: "BUSD Icon.png",
  },
  {
    name: "Tether ",
    sign: "USDT",
    url: "USDT Icon.png",
  },
  {
    name: "Bitcoin ",
    sign: "BTC",
    url: "BTC Icon.png",
  },
  {
    name: "Ethereum",
    sign: "ETH",
    url: "ETH Icon.png",
  },
  {
    name: "Binance Coin ",
    sign: "BNB",
    url: "AVAX Icon.png",
  },
  {
    name: "Binance Coin ",
    sign: "BNB",
    url: "AVAX Icon.png",
  },
];

function Modal({ isShowing, hide }) {
  const [token, setToken] = useState(data);
  console.log(data);

  const handleStop = (e) => {
    e.stopPropagation();
  };

  const handleModal = (e) => {
    hide();
  };
  return isShowing
    ? ReactDOM.createPortal(
        <div onClick={(e) => handleModal(e)} className={cx("wrapper")}>
          <div onClick={(e) => handleStop(e)} className={cx("modal-inner")}>
            <div className={cx("modal-header")}>
              <h3 className={cx("header-title")}>Select Token</h3>
              <AiOutlineCloseCircle
                className={cx("header-close")}
                onClick={hide}
              />
            </div>
            <ul className={cx("list-item")}>
              {token.map((item, index) => {
                return (
                  <li key={index} className={cx("item-group")}>
                    <div className={cx("item-info")}>
                      <img src={item.url} className={cx("item-img")} />
                      <h3 className={cx("item-name")}>{item.name}</h3>
                    </div>
                    <span className={cx("item-sign")}>{item.sign}</span>
                  </li>
                );
              })}
            </ul>
            <span className={cx("modal-desc")}>Scroll to load more</span>
          </div>
        </div>,
        document.body
      )
    : null;
}

export default Modal;
