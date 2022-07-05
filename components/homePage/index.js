import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { dataHome, dataTable } from "./data";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import ModalHome from "./modalHome";
import useModal from "../../customHooks";

const cx = classNames.bind(styles);

function Home() {
  const [count, setCount] = useState("342,543.93");
  const [bonus, setBonus] = useState("12,693.60");
  const [active, setActive] = useState("tab-1");
  const { isShowing, toggle } = useModal();

  const handleSetActive1 = () => {
    setActive("tab-1");
  };

  const handleSetActive2 = () => {
    setActive("tab-2");
  };

  const handleSetActive3 = () => {
    setActive("tab-3");
  };

  const handleSetActive4 = () => {
    setActive("tab-4");
  };

  const handleSetActive5 = () => {
    setActive("tab-5");
  };

  return (
    <div className={cx("wrapper")}>
      <ModalHome isShowing={isShowing} hide={toggle} />
      <div className={cx("header")}>
        {dataHome.map((item, index) => {
          return (
            <div className={cx("header-item")} key={index}>
              <span className={cx("item-id")}>#{item.id}</span>
              <img src={item.logo} alt="logo" />
              <span className={cx("item-apy")}>{item.apy}</span>
            </div>
          );
        })}
      </div>
      <div className={cx("content-group")}>
        <div className={cx("info")}>
          <div className={cx("header-info")}>
            <div className={cx("header-count")}>
              <span className={cx("portfolio")}>Portfolio</span>
              <div className={cx("current-count")}>${count}</div>
              <div className={cx("bonus")}>
                <div className={cx("bonus-count")}>+${bonus}</div>
                <span className={cx("bonus-desc")}>Last 30 days</span>
              </div>
            </div>
            <div className={cx("header-time")}>
              <ul className={cx("time-list")}>
                <li
                  onClick={handleSetActive1}
                  className={
                    active === "tab-1"
                      ? cx("time-item", "active")
                      : cx("time-item")
                  }
                >
                  1H
                </li>
                <li
                  onClick={handleSetActive2}
                  className={
                    active === "tab-2"
                      ? cx("time-item", "active")
                      : cx("time-item")
                  }
                >
                  1D
                </li>
                <li
                  onClick={handleSetActive3}
                  className={
                    active === "tab-3"
                      ? cx("time-item", "active")
                      : cx("time-item")
                  }
                >
                  1M
                </li>
                <li
                  onClick={handleSetActive4}
                  className={
                    active === "tab-4"
                      ? cx("time-item", "active")
                      : cx("time-item")
                  }
                >
                  1Y
                </li>
                <li
                  onClick={handleSetActive5}
                  className={
                    active === "tab-5"
                      ? cx("time-item", "active")
                      : cx("time-item")
                  }
                >
                  ALL
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("chart")}>
            <img src="Vector.png" alt="chart" />
          </div>
          <div className={cx("footer")}>
            <ul className={cx("calendar")}>
              <li className={cx("day")}>MAY 30</li>
              <li className={cx("day")}>JUN 5</li>
              <li className={cx("day")}>JUN 10</li>
              <li className={cx("day")}>JUN 15</li>
              <li className={cx("day")}>JUN 20</li>
              <li className={cx("day")}>JUN 26</li>
            </ul>
          </div>
        </div>
        <div className={cx("control")}>
          <div className={cx("header-control")}>
            <h3 className={cx("title")}>Funding</h3>
          </div>
          <div className={cx("dashboard")}>
            <div className={cx("dashboard-header")}>
              <div className={cx("dashboard-info")}>
                <img src="Chase Bank Icon.png" alt="dashboard-img" />
                <div className={cx("bank")}>
                  <h4>Chase Bank 0245</h4>
                  <span>Checking account</span>
                </div>
              </div>
              <button className={cx("dashboard-btn")}>Change</button>
            </div>
            <div className={cx("value")}>
              <span className={cx("value-num")}>0.00</span>
              <div className={cx("value-control")}>
                <span>$200</span>
                <span>$500</span>
                <span>$1.000</span>
              </div>
              <BsFillArrowDownCircleFill className={cx("btn-open")} />
            </div>
            <div className={cx("value")}>
              <span className={cx("value-num")}>0.00</span>
              <div className={cx("change-token")}>
                <img src="USDC Icon.png" alt="USDC" />
                <span className={cx("token-name")}>USDC</span>
                <IoIosArrowDown className={cx("token-icon")} />
              </div>
            </div>
            <button onClick={toggle} className={cx("btn-fund")}>
              Fund Account
            </button>
            <button className={cx("btn-withdraw")}>Withdraw Funds</button>
          </div>
        </div>
      </div>

      <div className={cx("content-group")}>
        <div className={cx("table")}>
          <div className={cx("table-header")}>
            <h3 className={cx("table-title")}>Assets</h3>
            <span className={cx("table-location")}>in vaults</span>
            <span className={cx("table-desc")}>outside vaults</span>
          </div>
          <div className={cx("table-heading")}>
            <h4 className={cx("table-heading-item")}>Name</h4>
            <h4 className={cx("table-heading-item")}>Balance</h4>
            <h4 className={cx("table-heading-item")}>Interest</h4>
            <h4 className={cx("table-heading-item")}>Allocation</h4>
          </div>
          <div className={cx("table-body")}>
            <ul>
              {dataTable.map((item, index) => {
                return (
                  <li key={index} className={cx("table-content")}>
                    <div className={cx("table-token-name")}>
                      <img src={item.url} alt="token" />
                      <div>
                        <h3>{item.name}</h3>
                        <span>{item.sign}</span>
                      </div>
                    </div>
                    <div className={cx("table-token-balance")}>
                      <h3>{item.balance}</h3>
                      <span>{item.signBalance}</span>
                    </div>
                    <div className={cx("table-token-interest")}>
                      <h3>{item.interest}</h3>
                      <div className={cx("table-token-interest-child")}>
                        <span>{item.bonus}</span>
                        <span>Last 24 hours</span>
                      </div>
                    </div>
                    <h2 className={cx("table-token-percent")}>
                      {item.percent}%
                    </h2>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={cx("control")}>
          <div className={cx("header-control")}>
            <h3 className={cx("title")}>Notifications</h3>
          </div>
          <ul className={cx("activity")}>
            <li className={cx("activity-item")}>
              <span className={cx("activity-title")}>Account activity</span>
              <p className={cx("activity-notifications")}>
                You added 3,000 USDC
              </p>
              <span className={cx("activity-time")}>May 11</span>
            </li>
            <li className={cx("activity-item")}>
              <span className={cx("activity-title")}>Account activity</span>
              <p className={cx("activity-notifications")}>
                Deposited 67.29 AVAX in the vault
              </p>
              <span className={cx("activity-time")}>May 11</span>
            </li>
            <li className={cx("activity-item")}>
              <span className={cx("activity-title")}>Account activity</span>
              <p className={cx("activity-notifications")}>
                Traded 2,000 USDC for 67.29 AVAX
              </p>
              <span className={cx("activity-time")}>May 11</span>
            </li>
            <li className={cx("activity-item")}>
              <span className={cx("activity-title")}>Account activity</span>
              <p className={cx("activity-notifications")}>
                You added 5,000 USDC
              </p>
              <span className={cx("activity-time")}>May 11</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
