import classNames from "classnames/bind";
import { useState } from "react";
import useModal from "../../customHooks";
import styles from "./Vaults.module.scss";
import ModalVaults from "./modalVaults";

const cx = classNames.bind(styles);

function Vaults() {
  const [active, setActive] = useState("tab-1");
  const { isShowing, toggle } = useModal();

  const handleSetActive1 = () => {
    setActive("tab-1");
  };

  const handleSetActive2 = () => {
    setActive("tab-2");
  };

  return (
    <div className={cx("wrapper")}>
      <ModalVaults isShowing={isShowing} hide={toggle} />
      <div className={cx("container")}>
        <div className={cx("header")}>
          <div className={cx("title-group")}>
            <h3 className={cx("title-name")}>Stable</h3>
            <span className={cx("title-desc")}>Sort by APY</span>
          </div>
          <div className={cx("tabs")}>
            <button
              onClick={handleSetActive1}
              className={
                active === "tab-1" ? cx("tab-item", "active") : cx("tab-item")
              }
            >
              Lend
            </button>
            <button
              onClick={handleSetActive2}
              className={
                active === "tab-2" ? cx("tab-item", "active") : cx("tab-item")
              }
            >
              Borrow
            </button>
          </div>
        </div>
        <div
          className={active === "tab-1" ? cx("token", "active") : cx("token")}
        >
          <div className={cx("token-group")}>
            <img
              onClick={toggle}
              src="USDC Icon (2).png"
              alt="USDC icon"
              className={cx("token-img")}
            />
            <img
              src="Dynamic Icon.png"
              alt="Dynamic Icon"
              className={cx("token-img-sub")}
            />
            <div className={cx("percent-token")}>
              <div className={cx("vaults")}>
                <span className={cx("vaults-title")}>Vault</span>
                <p className={cx("vaults-name")}>USDC</p>
              </div>
              <div className={cx("apy")}>
                <span className={cx("apy-title")}>APY</span>
                <p className={cx("apy-name")}>7.42%</p>
              </div>
            </div>
            <div className={cx("blance")}>
              <div className={cx("blance-group")}>
                <span className={cx("blance-title")}>Balance</span>
                <p className={cx("blance-count")}>-</p>
              </div>
              <div className={cx("earnings-group")}>
                <span className={cx("earnings-title")}>Earnings</span>
                <p className={cx("earnings-count")}>-</p>
              </div>
            </div>
          </div>
          <div className={cx("token-group")}>
            <img
              onClick={toggle}
              src="USDT Icon.png"
              alt="USDC icon"
              className={cx("token-img")}
            />
            <img
              src="Dynamic Icon.png"
              alt="Dynamic Icon"
              className={cx("token-img-sub")}
            />
            <div className={cx("percent-token")}>
              <div className={cx("vaults")}>
                <span className={cx("vaults-title")}>Vault</span>
                <p className={cx("vaults-name")}>USDT</p>
              </div>
              <div className={cx("apy")}>
                <span className={cx("apy-title")}>APY</span>
                <p className={cx("apy-name")}>9.58%</p>
              </div>
            </div>
            <div className={cx("blance")}>
              <div className={cx("blance-group")}>
                <span className={cx("blance-title")}>Balance</span>
                <p className={cx("blance-count")}>-</p>
              </div>
              <div className={cx("earnings-group")}>
                <span className={cx("earnings-title")}>Earnings</span>
                <p className={cx("earnings-count")}>-</p>
              </div>
            </div>
          </div>
          <div className={cx("token-group")}>
            <img
              onClick={toggle}
              src="BUSD Icon.png"
              alt="USDC icon"
              className={cx("token-img")}
            />
            <img
              src="Dynamic Icon.png"
              alt="Dynamic Icon"
              className={cx("token-img-sub")}
            />
            <div className={cx("percent-token")}>
              <div className={cx("vaults")}>
                <span className={cx("vaults-title")}>Vault</span>
                <p className={cx("vaults-name")}>BUSD</p>
              </div>
              <div className={cx("apy")}>
                <span className={cx("apy-title")}>APY</span>
                <p className={cx("apy-name")}>3.77%</p>
              </div>
            </div>
            <div className={cx("blance")}>
              <div className={cx("blance-group")}>
                <span className={cx("blance-title")}>Balance</span>
                <p className={cx("blance-count")}>-</p>
              </div>
              <div className={cx("earnings-group")}>
                <span className={cx("earnings-title")}>Earnings</span>
                <p className={cx("earnings-count")}>-</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("header")}>
          <div className={cx("title-group")}>
            <h3 className={cx("title-name")}>Native</h3>
            <span className={cx("title-desc")}>Sort by APY</span>
          </div>
        </div>
        <div
          className={active === "tab-1" ? cx("token", "active") : cx("token")}
        >
          <div className={cx("token-group")}>
            <img
              onClick={toggle}
              src="BTC Icon.png"
              alt="USDC icon"
              className={cx("token-img")}
            />
            <img
              src="Dynamic Icon.png"
              alt="Dynamic Icon"
              className={cx("token-img-sub")}
            />
            <div className={cx("percent-token")}>
              <div className={cx("vaults")}>
                <span className={cx("vaults-title")}>Vault</span>
                <p className={cx("vaults-name")}>BTC</p>
              </div>
              <div className={cx("apy")}>
                <span className={cx("apy-title")}>APY</span>
                <p className={cx("apy-name")}>3.64%</p>
              </div>
            </div>
            <div className={cx("blance")}>
              <div className={cx("blance-group")}>
                <span className={cx("blance-title")}>Balance</span>
                <p className={cx("blance-count")}>-</p>
              </div>
              <div className={cx("earnings-group")}>
                <span className={cx("earnings-title")}>Earnings</span>
                <p className={cx("earnings-count")}>-</p>
              </div>
            </div>
          </div>
          <div className={cx("token-group")}>
            <img
              onClick={toggle}
              src="ETH Icon.png"
              alt="USDC icon"
              className={cx("token-img")}
            />
            <img
              src="Dynamic Icon.png"
              alt="Dynamic Icon"
              className={cx("token-img-sub")}
            />
            <div className={cx("percent-token")}>
              <div className={cx("vaults")}>
                <span className={cx("vaults-title")}>Vault</span>
                <p className={cx("vaults-name")}>ETH</p>
              </div>
              <div className={cx("apy")}>
                <span className={cx("apy-title")}>APY</span>
                <p className={cx("apy-name")}>4.82%</p>
              </div>
            </div>
            <div className={cx("blance")}>
              <div className={cx("blance-group")}>
                <span className={cx("blance-title")}>Balance</span>
                <p className={cx("blance-count")}>-</p>
              </div>
              <div className={cx("earnings-group")}>
                <span className={cx("earnings-title")}>Earnings</span>
                <p className={cx("earnings-count")}>-</p>
              </div>
            </div>
          </div>
          <div className={cx("token-group")}>
            <img
              onClick={toggle}
              src="BNB Icon.png"
              alt="USDC icon"
              className={cx("token-img")}
            />
            <img
              src="Dynamic Icon.png"
              alt="Dynamic Icon"
              className={cx("token-img-sub")}
            />
            <div className={cx("percent-token")}>
              <div className={cx("vaults")}>
                <span className={cx("vaults-title")}>Vault</span>
                <p className={cx("vaults-name")}>BNB</p>
              </div>
              <div className={cx("apy")}>
                <span className={cx("apy-title")}>APY</span>
                <p className={cx("apy-name")}>5.19%</p>
              </div>
            </div>
            <div className={cx("blance")}>
              <div className={cx("blance-group")}>
                <span className={cx("blance-title")}>Balance</span>
                <p className={cx("blance-count")}>-</p>
              </div>
              <div className={cx("earnings-group")}>
                <span className={cx("earnings-title")}>Earnings</span>
                <p className={cx("earnings-count")}>-</p>
              </div>
            </div>
          </div>
          <div className={cx("token-group")}>
            <img
              onClick={toggle}
              src="MATIC Icon.png"
              alt="USDC icon"
              className={cx("token-img")}
            />
            <img
              src="Dynamic Icon.png"
              alt="Dynamic Icon"
              className={cx("token-img-sub")}
            />
            <div className={cx("percent-token")}>
              <div className={cx("vaults")}>
                <span className={cx("vaults-title")}>Vault</span>
                <p className={cx("vaults-name")}>XRP</p>
              </div>
              <div className={cx("apy")}>
                <span className={cx("apy-title")}>APY</span>
                <p className={cx("apy-name")}>4.12%</p>
              </div>
            </div>
            <div className={cx("blance")}>
              <div className={cx("blance-group")}>
                <span className={cx("blance-title")}>Balance</span>
                <p className={cx("blance-count")}>-</p>
              </div>
              <div className={cx("earnings-group")}>
                <span className={cx("earnings-title")}>Earnings</span>
                <p className={cx("earnings-count")}>-</p>
              </div>
            </div>
          </div>
          <div className={cx("token-group")}>
            <img
              onClick={toggle}
              src="DOT Icon .png"
              alt="USDC icon"
              className={cx("token-img")}
            />
            <img
              src="Dynamic Icon.png"
              alt="Dynamic Icon"
              className={cx("token-img-sub")}
            />
            <div className={cx("percent-token")}>
              <div className={cx("vaults")}>
                <span className={cx("vaults-title")}>Vault</span>
                <p className={cx("vaults-name")}>DOT</p>
              </div>
              <div className={cx("apy")}>
                <span className={cx("apy-title")}>APY</span>
                <p className={cx("apy-name")}>3.98%</p>
              </div>
            </div>
            <div className={cx("blance")}>
              <div className={cx("blance-group")}>
                <span className={cx("blance-title")}>Balance</span>
                <p className={cx("blance-count")}>-</p>
              </div>
              <div className={cx("earnings-group")}>
                <span className={cx("earnings-title")}>Earnings</span>
                <p className={cx("earnings-count")}>-</p>
              </div>
            </div>
          </div>
          <div className={cx("token-group")}>
            <img
              onClick={toggle}
              src="XRP Icon.png"
              alt="USDC icon"
              className={cx("token-img")}
            />
            <img
              src="Dynamic Icon.png"
              alt="Dynamic Icon"
              className={cx("token-img-sub")}
            />
            <div className={cx("percent-token")}>
              <div className={cx("vaults")}>
                <span className={cx("vaults-title")}>Vault</span>
                <p className={cx("vaults-name")}>MATIC</p>
              </div>
              <div className={cx("apy")}>
                <span className={cx("apy-title")}>APY</span>
                <p className={cx("apy-name")}>2.63%</p>
              </div>
            </div>
            <div className={cx("blance")}>
              <div className={cx("blance-group")}>
                <span className={cx("blance-title")}>Balance</span>
                <p className={cx("blance-count")}>-</p>
              </div>
              <div className={cx("earnings-group")}>
                <span className={cx("earnings-title")}>Earnings</span>
                <p className={`${cx("earnings-count")} col`}>-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vaults;
