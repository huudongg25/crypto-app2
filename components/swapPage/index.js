import classNames from "classnames/bind";
import styles from "./SwapPage.module.scss";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineArrowDown } from "react-icons/ai";
import Modal from "./modal";
import useModal from "../../customHooks";
import { useState } from "react";

const cx = classNames.bind(styles);

function SwapPage() {
  const { isShowing, toggle } = useModal();
  const [tabs, setTabs] = useState("tab-1");
  const [open, setOpen] = useState(false);

  const handleSetTab2 = () => {
    setTabs("tab-2");
  };

  const handleSetTab1 = () => {
    setTabs("tab-1");
  };

  const handleOpenChange = () => {
    setOpen((open = !open));
  };

  return (
    <div className={cx("wrapper")}>
      <Modal isShowing={isShowing} hide={toggle} />
      <div className={cx("container")}>
        <div className={cx("tabs-group")}>
          <button
            onClick={handleSetTab1}
            className={
              tabs === "tab-1" ? cx("tab-btn", "active") : cx("tab-btn")
            }
          >
            Same Chain
          </button>
          <button
            onClick={handleSetTab2}
            className={
              tabs === "tab-2" ? cx("tab-btn", "active") : cx("tab-btn")
            }
          >
            Cross Chain
          </button>
        </div>
        <div
          className={
            tabs === "tab-1" ? cx("swap-group", "active") : cx("swap-group")
          }
        >
          <div className={cx("swap-header")}>
            <h3 className={cx("swap-page")}>Swap</h3>
            <FiSettings className={cx("swap-settings")} />
          </div>
          <div className={cx("token")}>
            <div
              className={open ? cx("token-open", "active") : cx("token-open")}
            >
              <div className={cx("token-from")}>
                <span className={cx("from")}>From</span>
                <img src="AVAX Icon.png" alt="logo" />
                <p className={cx("from-name")}>Binance</p>
              </div>
              <IoIosArrowDown className={cx("token-change-select")} />
            </div>
            <div
              className={
                open ? cx("token-values", "active") : cx("token-values")
              }
            >
              <AiOutlineArrowDown
                onClick={handleOpenChange}
                className={cx("token-button")}
              />
              <div className={cx("token-group")}>
                <span className={cx("token-number")}>0.00</span>
                <span className={cx("token-max")}>Max</span>
              </div>
              <div onClick={toggle} className={cx("token-change")}>
                <img
                  className={cx("token-change-img")}
                  src="Rectangle 141.png"
                  alt="token img"
                />
                <span className={cx("token-change-name")}>USDC</span>
                <IoIosArrowDown className={cx("token-change-select")} />
              </div>
            </div>
            <div
              className={open ? cx("token-open", "active") : cx("token-open")}
            >
              <div className={cx("token-from")}>
                <span className={cx("from")}>To</span>
                <img src="AVAX Icon.png" alt="logo" />
                <p className={cx("from-name")}>Avalanche</p>
              </div>
              <IoIosArrowDown className={cx("token-change-select")} />
            </div>
            <div className={cx("token-values")}>
              <div className={cx("token-group")}>
                <span className={cx("token-number")}>0.00</span>
              </div>
              <div onClick={toggle} className={cx("token-change")}>
                <img
                  className={cx("token-change-img")}
                  src="Rectangle 237.png"
                  alt="token img"
                />
                <span className={cx("token-change-name")}>USDC</span>
                <IoIosArrowDown className={cx("token-change-select")} />
              </div>
            </div>
            <button className={cx("token-begin-swap")}>Begin Swap</button>
          </div>
        </div>
        <div
          className={tabs === "tab-1" ? cx("percent", "active") : cx("percent")}
        >
          <div className={cx("finality")}>
            <p className={cx("finality-sec")}> {`< 20 sec`}</p>
            <span className={cx("finality-desc")}>Finality</span>
          </div>
          <div className={cx("fee")}>
            <p className={cx("fee-sec")}> {`0.50%`}</p>
            <span className={cx("fee-desc")}>Fee</span>
          </div>
        </div>
        <div
          className={
            tabs === "tab-2" ? cx("swap-group", "active") : cx("swap-group")
          }
        >
          <div className={cx("swap-header")}>
            <h3 className={cx("swap-page")}>Swap</h3>
            <FiSettings className={cx("swap-settings")} />
          </div>
          <div className={cx("token")}>
            <div
              className={open ? cx("token-open", "active") : cx("token-open")}
            >
              <div className={cx("token-from")}>
                <span className={cx("from")}>From</span>
                <img src="AVAX Icon.png" alt="logo" />
                <p className={cx("from-name")}>Binance</p>
              </div>
              <IoIosArrowDown className={cx("token-change-select")} />
            </div>
            <div
              className={
                open ? cx("token-values", "active") : cx("token-values")
              }
            >
              <AiOutlineArrowDown
                onClick={handleOpenChange}
                className={cx("token-button")}
              />
              <div className={cx("token-group")}>
                <span className={cx("token-number")}>1.00</span>
                <span className={cx("token-max")}>Max</span>
              </div>
              <div onClick={toggle} className={cx("token-change")}>
                <img
                  className={cx("token-change-img")}
                  src="Rectangle 141.png"
                  alt="token img"
                />
                <span className={cx("token-change-name")}>USDC</span>
                <IoIosArrowDown className={cx("token-change-select")} />
              </div>
            </div>
            <div
              className={open ? cx("token-open", "active") : cx("token-open")}
            >
              <div className={cx("token-from")}>
                <span className={cx("from")}>To</span>
                <img src="AVAX Icon.png" alt="logo" />
                <p className={cx("from-name")}>Avalanche</p>
              </div>
              <IoIosArrowDown className={cx("token-change-select")} />
            </div>
            <div className={cx("token-values")}>
              <div className={cx("token-group")}>
                <span className={cx("token-number")}>1.00</span>
              </div>
              <div onClick={toggle} className={cx("token-change")}>
                <img
                  className={cx("token-change-img")}
                  src="Rectangle 237.png"
                  alt="token img"
                />
                <span className={cx("token-change-name")}>USDC</span>
                <IoIosArrowDown className={cx("token-change-select")} />
              </div>
            </div>
            <button className={cx("token-begin-swap")}>Begin Swap</button>
          </div>
        </div>
        <div
          className={tabs === "tab-2" ? cx("percent", "active") : cx("percent")}
        >
          <div className={cx("finality")}>
            <p className={cx("finality-sec")}> {`< 45 sec`}</p>
            <span className={cx("finality-desc")}>Finality</span>
          </div>
          <div className={cx("fee")}>
            <p className={cx("fee-sec")}> {`0.50%`}</p>
            <span className={cx("fee-desc")}>Fee</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwapPage;
