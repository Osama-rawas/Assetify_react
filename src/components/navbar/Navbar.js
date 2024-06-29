import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle";
import { useContext } from "react";
import { User } from "../../Context/Context";
import "./navbar.css";
export default function Navbar() {
  const user = useContext(User);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex gap-2 align-items-center col-xl-4 col-md-5  regesters">
              {user.auth.token ? (
                <>
                  <Link to={"/logout"}>
                    <button
                      type="button"
                      className="btn login-nav-btn blue-color"
                    >
                      تسجيل الخروج
                    </button>
                  </Link>
                  <Link to={"/delete"}>
                    <button
                      type="button"
                      className="btn signup-nav-btn"
                      style={{ width: "150px" }}
                    >
                      حذف حسابك
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/signup"}>
                    <button type="button" className="btn signup-nav-btn">
                      ابدأ
                    </button>
                  </Link>
                  <Link to={"/login"}>
                    <button
                      type="button"
                      className="btn login-nav-btn blue-color"
                    >
                      تسجيل الدخول
                    </button>
                  </Link>
                </>
              )}
            </div>
            <div>
              <ul className="navbar-nav nav-links text-center d-flex align-items-center">
                <li className="nav-item">
                  <a className="nav-link blue-color " href="#">
                    المزيد
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link blue-color " href="#">
                    البيع
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link blue-color "
                    href="#"
                    style={{ padding: "0" }}
                  >
                    برامج الجنيسة لدى اسيستفاتي
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link blue-color " href="#">
                    حول
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link blue-color " href="#">
                    العقارات
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center logo">
            <Link to={""}>
              <img src={require("../../ASSETS/imgs/logo.png")} alt="" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
