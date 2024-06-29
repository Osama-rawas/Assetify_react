import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Social from "../../components/Social";
export default function Login() {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  async function sumbit(e) {
    e.preventDefault();
    try {
      let res = await axios.post(
        "https://task5-toleen-falion.trainees-mad-s.com/api/auth/login",
        {
          email: email,
          phone: phone,
          password: password,
        }
      );
      const formDataStr = JSON.parse(res.config.data);
      window.localStorage.setItem("email", formDataStr.email);

      if (res.status === 200) {
        navigate("/verifyemail");
      }
    } catch (error) {
      if (error.response.status === 404) {
        setErrorLogin(true);
      }
    }
  }

  return (
    <div className="container d-flex align-items-center justify-content-center log-in ">
      <div className="background-image"></div>
      <div className="form-elements login-box bg-white z-3  pe-4 ps-4  mt-2">
        <h2 className="text-center blue-color mt-4 ">تسجيل الدخول</h2>
        <form onSubmit={sumbit}>
          <div>
            <div className="d-flex justify-content-end login-label">
              <label htmlFor="email" className="form-label bg-white">
                الايميل
              </label>
            </div>
            <input
              type="email"
              className="form-control border-black"
              id="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <div className="d-flex justify-content-end login-label">
              <label htmlFor="phonenumber" className="form-label bg-white">
                رقم الهاتف
              </label>
            </div>
            <input
              type="text"
              className="form-control  border-black"
              id="phonenumber"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div>
            <div className="d-flex justify-content-end login-label">
              <label htmlFor="password" className="form-label bg-white">
                كلمة المرور
              </label>
            </div>
            <input
              type="password"
              className="form-control  border-black"
              id="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className="btn login-btn text-dark col-12 mt-4" type="submit">
            تسجيل الدخول
          </button>
          {errorLogin && (
            <p className="error-text" dir="rtl">
              البريد الإلكتروني أو كلمة المرور أو رقم الهاتف لا يتطابق مع
              سجلاتنا
            </p>
          )}
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
          <Social />
        </div>
      </div>
    </div>
  );
}
