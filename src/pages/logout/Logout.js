import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./logout.css";
export default function Logout() {
  const cookie = new Cookies();
  const token = cookie.get("Bearer");

  const navigate = useNavigate();
  function handleExit() {
    navigate("/");
  }
  async function handleLogout() {
    try {
      let resp = await axios.get(
        "https://task5-toleen-falion.trainees-mad-s.com/api/auth/logout",
        { headers: { Authorization: "Bearer " + token } }
      );

      if (resp.status === 200) {
        window.location.pathname = "/Assetify_react/";
        cookie.remove("Bearer");
        window.localStorage.removeItem("email");
      }
    } catch (err) {}
  }
  return (
    <div className="logout-container">
      <div className="background-image"></div>
      <div className="confirmation-box">
        <p>هل انت متأكد من تسجيل الخروج؟</p>
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
