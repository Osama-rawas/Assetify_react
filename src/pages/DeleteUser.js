import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function DeleteUser() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailTypeError, setEmailTypeError] = useState(false);
  const cookie = new Cookies();
  const token = cookie.get("Bearer");

  const navigate = useNavigate();
  function handleExit() {
    navigate("/");
  }
  async function handleLogout() {
    try {
      let resp = await axios.post(
        "https://task5-toleen-falion.trainees-mad-s.com/api/auth/DeleteUserAccount",
        { email: email }
      );

      if (resp.status === 200) {
        window.location.pathname = "/Assetify_react/";
        cookie.remove("Bearer");
        window.localStorage.removeItem("email");
      }
    } catch (err) {
      if (err.response.status === 404) {
        setEmailError(true);
      }
      if (err.response.status === 422) {
        setEmailTypeError(true);
      }
    }
  }
  return (
    <div className="logout-container">
      <div className="background-image"></div>
      <div className="confirmation-box">
        <form>
          <div className="d-flex justify-content-end login-label">
            <label
              htmlFor="formGroupExampleInput"
              className="form-label bg-white"
            >
              الايميل
            </label>
          </div>
          <input
            type="email"
            className="form-control border-black"
            id="formGroupExampleInput"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </form>
        {emailError && (
          <p className="error-text" dir="rtl">
            الحساب غير موجود
          </p>
        )}
        {emailTypeError && (
          <p className="error-text" dir="rtl">
            الرجاء كتابة الايميل بشكل صحيح
          </p>
        )}
        <p>
          هل انت متأكد من <span style={{ color: "#6b48ff" }}>حذف حسابك</span> ؟
        </p>

        <button onClick={handleLogout} className="btn btn-primary">
          تأكيد
        </button>
        <button onClick={handleExit} className="btn btn-secondary">
          تراجع
        </button>
      </div>
    </div>
  );
}
