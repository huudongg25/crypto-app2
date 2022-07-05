import classNames from "classnames/bind";
import styles from "./Layout.module.scss";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { children } from "react";

const cx = classNames.bind(styles);

function Layout({ children, namePage }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Header namePage={namePage} />
      </div>
      <div className={cx("navbar")}>
        <Navbar />
      </div>
      <div className={cx("contents")}>{children}</div>
    </div>
  );
}

export default Layout;
