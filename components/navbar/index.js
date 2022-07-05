import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { FaHome } from "react-icons/fa";
import { BsThreeDotsVertical, BsLink } from "react-icons/bs";
import { VscArrowSwap } from "react-icons/vsc";
import { IoIosArrowUp } from "react-icons/io";
import { HiOutlineChartPie } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

const cx = classNames.bind(styles);
let newTab = "tab-1";
let sub = "";
function Navbar() {
  const [active, setActive] = useState(newTab);
  const [open, setOpen] = useState(false);
  const [subNav, setSubNav] = useState(sub);

  const setTabs1 = () => {
    setActive("tab-1");
    newTab = "tab-1";
  };
  const setTabs2 = () => {
    setActive("tab-2");
    newTab = "tab-2";
  };
  const setTabs3 = () => {
    setActive("tab-3");
    newTab = "tab-3";
  };
  const setTabs4 = () => {
    setActive("tab-4");
    newTab = "tab-4";
  };

  const handleSetOpenSubNav = () => {
    setOpen(!open);
  };

  const handleSetSubNav1 = (e) => {
    e.stopPropagation();
    setSubNav("tab-1");
  };

  const handleSetSubNav2 = (e) => {
    e.stopPropagation();
    setSubNav("tab-2");
  };

  const handleSetSubNav3 = (e) => {
    e.stopPropagation();
    setSubNav("tab-3");
  };

  const handleSetSubNav4 = (e) => {
    e.stopPropagation();
    setSubNav("tab-4");
  };

  const handleSetSubNav5 = (e) => {
    e.stopPropagation();
    setSubNav("tab-5");
  };

  return (
    <div className={cx("wrapper")}>
      <header className={cx("nav-header")}>
        <img className={cx("header-logo")} src="logo.png" alt="logo" />
        <div className={cx("sponsor-wrapper")}>
          <h3 className={cx("sponsor-name")}>Dynamic</h3>
          <span className={cx("sponsor-desc")}>Put your funds to work</span>
        </div>
      </header>
      <div className={cx("nav")}>
        <ul className={cx("nav-list")}>
          <li
            onClick={setTabs1}
            className={
              active === "tab-1" ? cx("nav-item", "active") : cx("nav-item")
            }
          >
            <Link href="/home">
              <div>
                <FaHome className={cx("nav-icon")} />
                <a className={cx("nav-name")} href="">
                  Home
                </a>
              </div>
            </Link>
          </li>
          <li
            onClick={setTabs2}
            className={
              active === "tab-2" ? cx("nav-item", "active") : cx("nav-item")
            }
          >
            <Link href="/vaults">
              <div>
                <HiOutlineChartPie className={cx("nav-icon")} />
                <a className={cx("nav-name")} href="">
                  Vaults
                </a>
              </div>
            </Link>
          </li>
          <li
            onClick={setTabs3}
            className={
              active === "tab-3" ? cx("nav-item", "active") : cx("nav-item")
            }
          >
            <Link href="/swap">
              <div>
                <VscArrowSwap className={cx("nav-icon")} />
                <a className={cx("nav-name")} href="">
                  Swap
                </a>
              </div>
            </Link>
          </li>
          <li
            onClick={setTabs4}
            className={
              active === "tab-4" ? cx("nav-item", "active") : cx("nav-item")
            }
          >
            <Link href="/pay">
              <div>
                <BsLink className={cx("nav-icon")} />
                <a className={cx("nav-name")} href="">
                  Pay
                </a>
              </div>
            </Link>
          </li>
          <li onClick={handleSetOpenSubNav} className={cx("nav-item")}>
            <div className={cx("nav-name")}>
              <BsThreeDotsVertical className={cx("nav-icon")} />
              More
              <IoIosArrowUp
                className={
                  open ? cx("arrow-sub-nav", "active") : cx("arrow-sub-nav")
                }
              />
            </div>
            <ul className={open ? cx("sub-nav", "active") : cx("sub-nav")}>
              <li
                onClick={handleSetSubNav1}
                className={
                  subNav === "tab-1"
                    ? cx("sub-nav-item", "active")
                    : cx("sub-nav-item")
                }
              >
                Docs
              </li>
              <li
                onClick={handleSetSubNav2}
                className={
                  subNav === "tab-2"
                    ? cx("sub-nav-item", "active")
                    : cx("sub-nav-item")
                }
              >
                Referrals
              </li>
              <li
                onClick={handleSetSubNav3}
                className={
                  subNav === "tab-3"
                    ? cx("sub-nav-item", "active")
                    : cx("sub-nav-item")
                }
              >
                Settings
              </li>
              <li
                onClick={handleSetSubNav4}
                className={
                  subNav === "tab-4"
                    ? cx("sub-nav-item", "active")
                    : cx("sub-nav-item")
                }
              >
                Help Center
              </li>
              <li
                onClick={handleSetSubNav5}
                className={
                  subNav === "tab-5"
                    ? cx("sub-nav-item", "active")
                    : cx("sub-nav-item")
                }
              >
                Notifications
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
