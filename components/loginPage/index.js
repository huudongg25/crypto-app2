import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

const cx = classNames.bind(styles);

function ItemLogin({ color, url, title, borderColor }) {
  return (
    <div
      className={cx("item-group")}
      style={{ backgroundColor: color, borderColor: borderColor }}
    >
      <span className={cx("item-name")}>{title}</span>
      <img src={url} alt="imageItem" />
    </div>
  );
}

function Login() {
  const [hidePass, setHidePass] = useState(false);
  const [tabs, setTabs] = useState("tab-1");

  const handleHidePass = () => {
    setHidePass(!hidePass);
  };

  const handleTab1 = () => {
    setTabs("tab-1");
  };

  const handleTab2 = () => {
    setTabs("tab-2");
  };

  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <div className={cx("logo-group")}>
          <img src="logo.png" alt="logo" />
          <div className={cx("logo-name")}>
            <h3 className={cx("logo-sponsor")}>Dynamic</h3>
            <span className={cx("logo-title")}>Put your funds to work</span>
          </div>
        </div>
        <div className={cx("contact")}>
          <img src="Rectangle 118.png" alt="instagram" />
          <span className={cx("contact-name")}>@dynamic</span>
        </div>
      </header>
      <div className={cx("content")}>
        <div className={cx("container")}>
          <div className={cx("tabs")}>
            <button
              onClick={handleTab1}
              className={
                tabs === "tab-1" ? cx("tab-btn", "active") : cx("tab-btn")
              }
            >
              Login
            </button>
            <button
              onClick={handleTab2}
              className={
                tabs === "tab-2" ? cx("tab-btn", "active") : cx("tab-btn")
              }
            >
              Register
            </button>
          </div>
          <div
            className={tabs === "tab-1" ? cx("group", "active") : cx("group")}
          >
            <div className={cx("category")}>
              <div className={cx("item")}>
                <ItemLogin
                  color={"rgba(255, 105, 85, 0.6)"}
                  url="Rectangle 306.png"
                  title="Metamask"
                  borderColor={"#FF6955"}
                />
                <ItemLogin
                  color={"rgba(23, 86, 233, 0.64)"}
                  url="Rectangle 301.png"
                  title="Coinbase"
                  borderColor={"#1756E9"}
                />
                <ItemLogin
                  color={"rgba(211, 160, 255, 0.5)"}
                  url="Rectangle 307.png"
                  title="Ledger"
                  borderColor={"#D3A0FF"}
                />
                <ItemLogin
                  color={" rgba(1, 183, 87, 0.5)"}
                  url="Rectangle 308.png"
                  title="Trezor"
                  borderColor={"#01B757"}
                />
              </div>
              <div className={cx("seperate")}>
                <span className={cx("seperate-name")}>Or</span>
              </div>
              <div className={cx("form")}>
                <div className={cx("form-container")}>
                  <label htmlFor="email" className={cx("form-label")}>
                    Email address
                  </label>
                  <input
                    type="email"
                    className={cx("form-input")}
                    placeholder="Enter your email address"
                    id="email"
                  />
                </div>
                <div className={cx("form-container")}>
                  <label htmlFor="pass" className={cx("form-label")}>
                    Password
                  </label>
                  <input
                    type={hidePass ? "text" : "password"}
                    className={cx("form-input")}
                    placeholder="Enter your password"
                    id="pass"
                  />
                  <AiFillEyeInvisible
                    onClick={handleHidePass}
                    className={
                      hidePass ? cx("icon-eye", "active") : cx("icon-eye")
                    }
                  />
                </div>
                <div className={cx("form-footer")}>
                  <div className={cx("checkbox-container")}>
                    <input id="checkbox" type="checkbox" />
                    <label htmlFor="checkbox">Remember me</label>
                  </div>
                  <span className={cx("forgot-pass")}>Forgot password?</span>
                </div>
                <Link href="/home">
                  <button className={cx("form-btn")}>Login</button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={tabs === "tab-2" ? cx("group", "active") : cx("group")}
          >
            <div className={cx("category")}>
              <div className={cx("item")}>
                <ItemLogin
                  color={"rgba(255, 105, 85, 0.6)"}
                  url="Rectangle 306.png"
                  title="Metamask"
                  borderColor={"#FF6955"}
                />
                <ItemLogin
                  color={"rgba(23, 86, 233, 0.64)"}
                  url="Rectangle 301.png"
                  title="Coinbase"
                  borderColor={"#1756E9"}
                />
                <ItemLogin
                  color={"rgba(211, 160, 255, 0.5)"}
                  url="Rectangle 307.png"
                  title="Ledger"
                  borderColor={"#D3A0FF"}
                />
                <ItemLogin
                  color={" rgba(1, 183, 87, 0.5)"}
                  url="Rectangle 308.png"
                  title="Trezor"
                  borderColor={"#01B757"}
                />
              </div>
              <div className={cx("seperate")}>
                <span className={cx("seperate-name")}>Or</span>
              </div>
              <div className={cx("form")}>
                <div className={cx("form-container")}>
                  <label htmlFor="email" className={cx("form-label")}>
                    Email address
                  </label>
                  <input
                    type="email"
                    className={cx("form-input")}
                    placeholder="Enter your email address"
                    id="email"
                  />
                </div>
                <div className={cx("form-container")}>
                  <label htmlFor="email" className={cx("form-label")}>
                    Username
                  </label>
                  <input
                    type="email"
                    className={cx("form-input")}
                    placeholder="Enter your username"
                    id="email"
                  />
                </div>
                <div className={cx("form-container")}>
                  <label htmlFor="pass" className={cx("form-label")}>
                    Password
                  </label>
                  <input
                    type={hidePass ? "text" : "password"}
                    className={cx("form-input")}
                    placeholder="Enter your password"
                    id="pass"
                  />
                  <AiFillEyeInvisible
                    onClick={handleHidePass}
                    className={
                      hidePass ? cx("icon-eye", "active") : cx("icon-eye")
                    }
                  />
                </div>

                <Link href="/home">
                  <button className={cx("form-btn")}>Register</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
