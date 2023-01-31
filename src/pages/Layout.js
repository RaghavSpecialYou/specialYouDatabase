import { Outlet, Link } from "react-router-dom";
import style from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className={style.container}>
          <li className={style.list}>
            <Link className={style.link} to="/">
              Description
            </Link>
          </li>
          <li>
            <Link className={style.link} to="/product">
              Product
            </Link>
          </li>
          <li>
            <Link className={style.link} to="/images">
              Images
            </Link>
          </li>
          <li>
            <Link className={style.link} to="/offer">
              Offer
            </Link>
          </li>
          <li>
            <Link className={style.link} to="/moredetails">
              MoreDetails
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
