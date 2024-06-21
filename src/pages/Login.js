import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  function sumbit(e) {
    e.preventDefault();
  }

  return (
    <div className="container d-flex align-items-center justify-content-center log-in ">
      <div class="background-image"></div>
      <div className="form-elements login-box bg-white z-3  pe-4 ps-4  mt-2">
        <h2 className="text-center blue-color mt-4 ">تسجيل الدخول</h2>
        <form onSubmit={sumbit}>
          <div>
            <div className="d-flex justify-content-end login-label">
              <label
                htmlFor="formGroupExampleInput"
                className="form-label bg-white"
              >
                الايميل او رقم الهاتف
              </label>
            </div>
            <input
              type="text"
              className="form-control  border-black"
              id="formGroupExampleInput"
              required
            />
          </div>
          <div>
            <div className="d-flex justify-content-end login-label">
              <label
                htmlFor="formGroupExampleInput"
                className="form-label bg-white"
              >
                كلمة المرور
              </label>
            </div>
            <input
              type="password"
              className="form-control  border-black"
              id="formGroupExampleInput"
              required
            />
          </div>
          <button className="btn login-btn text-dark col-12 mt-4" type="submit">
            تسجيل الدخول
          </button>
        </form>
        <div
          dir="rtl"
          className="login-helper d-flex justify-content-around mt-4"
        >
          <p>
            ليس لديك حساب؟<Link to={"/signup"}> إنشاء حساب</Link>
          </p>
          <a href="#" style={{ color: "var(--color-3)" }}>
            نسيت كلمة المرور
          </a>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <hr className="line" />
          <span>أو</span>
          <hr className="line" />
        </div>
        <div className=" d-flex justify-content-between mb-5 mt-3 login-social">
          <div>
            <button className="d-flex justify-content-center align-items-center btn gap-2 rounded-4 text-black bg-white shadow-lg ps-3 pe-3">
              <img src={require("../ASSETS/icons/Google.png")} alt="" />
              <span className>Google</span>
            </button>
          </div>
          <div>
            <button
              className="d-flex justify-content-center align-items-center btn gap-2 rounded-4 text-white shadow-lg ps-3 pe-3"
              style={{ backgroundColor: "#000" }}
            >
              <img src={require("../ASSETS/icons/Apple.png")} alt="" />
              <span>Apple</span>
            </button>
          </div>
          <div>
            <button
              className="d-flex justify-content-center align-items-center btn gap-2 rounded-4 text-white shadow-lg "
              type="submit"
              style={{ backgroundColor: "#1877f2" }}
            >
              <img src={require("../ASSETS/icons/facebook.png")} alt="" />
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
