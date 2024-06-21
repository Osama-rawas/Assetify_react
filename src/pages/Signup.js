import { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [Rpassword, setRpassword] = useState("");

  function sumbit(e) {
    e.preventDefault();
  }
  return (
    <div className="container-fluid d-flex align-items-end justify-content-center signup ">
      <div class="background-image"></div>
      <div className="form-elements signup-box bg-white z-2 ">
        <h2 className="text-center blue-color  ">إنشاء حساب</h2>
        <form
          onSubmit={sumbit}
          className="d-flex  justify-content-around gap-3 me-2 ms-2 signup-box-inptus"
        >
          <div
            className="d-flex  flex-column gap-4"
            style={{ marginTop: "50px" }}
          >
            <div className="d-flex  flex-column align-items-end signup-media-box p-2 ">
              <p className="signup-media-titel ">الصورة الشخصية</p>
              <div className="d-flex align-items-center justify-content-around gap-2">
                <img src={require("../ASSETS/icons/upload.png")} />
                <p className="">
                  اسحب و افلت الصورة هنا او قم برفعها من الملفات
                </p>
              </div>
              <p dir="rtl" style={{ color: "#777" }}>
                الحجم الاقصى: 2MB
              </p>
            </div>
            <div className="d-flex flex-column align-items-end signup-media-box p-2 ">
              <p className="signup-media-titel ">اثبات شخصية</p>
              <div className="d-flex align-items-center justify-content-around gap-2">
                <img src={require("../ASSETS/icons/upload.png")} />
                <p className="">
                  اسحب و افلت الصورة هنا او قم برفعها من الملفات
                </p>
              </div>
              <p dir="rtl" style={{ color: "#777" }}>
                الحجم الاقصى: 1MB
              </p>
            </div>

            <button
              className="btn signup-btn  col-12 text-center"
              type="submit"
            >
              إنشاء حساب
            </button>

            <p dir="rtl" className="">
              لديك حساب؟{" "}
              <Link to={"/login"} style={{ color: "var(--color-2)" }}>
                {" "}
                تسجيل الدخول
              </Link>
            </p>
          </div>
          <div className="d-flex flex-column signup-inputs  ">
            <div>
              <div
                className="signup-label label-email"
                style={{ left: "420px" }}
              >
                <label
                  htmlFor="formGroupExampleInput"
                  className="form-label bg-white "
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
            </div>
            <div>
              <div
                className="signup-label  label-username"
                style={{ left: "350px" }}
              >
                <label
                  htmlFor="formGroupExampleInput"
                  className="form-label bg-white "
                >
                  اسم المستخدم
                </label>
              </div>
              <input
                type="text"
                className="form-control  border-black "
                id="formGroupExampleInput"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <div className="signup-label ">
                <label
                  htmlFor="formGroupExampleInput"
                  className="form-label bg-white "
                >
                  رقم الهاتف
                </label>
              </div>
              <input
                type="text"
                className="form-control  border-black"
                id="formGroupExampleInput"
                required
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>
            <div>
              <div className="signup-label ">
                <label
                  htmlFor="formGroupExampleInput"
                  className="form-label bg-white  "
                >
                  كلمة المرور
                </label>
              </div>
              <input
                type="password"
                className="form-control  border-black"
                id="formGroupExampleInput"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <div className="signup-label ">
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
                value={Rpassword}
                onChange={(e) => {
                  setRpassword(e.target.value);
                }}
              />
            </div>
          </div>
        </form>
        <div className="d-flex justify-content-center bg-white z-1 w-100 gap-3">
          <hr className="line" />
          <span style={{ color: "#777" }}>أو</span>
          <hr className="line" />
        </div>
        <div className="">
          <div className=" d-flex justify-content-center mt-4 gap-5 mb-4  signup-social">
            <div>
              <button className="d-flex justify-content-center align-items-center btn gap-2 rounded-4 text-black bg-white shadow-lg ps-3 pe-3">
                <img src={require("../ASSETS/icons/Google.png")} />
                <span className>Google</span>
              </button>
            </div>
            <div>
              <button
                className="d-flex justify-content-center align-items-center btn gap-2 rounded-4 text-white shadow-lg ps-3 pe-3"
                style={{ backgroundColor: "#000" }}
              >
                <img src={require("../ASSETS/icons/Apple.png")} />
                <span>Apple</span>
              </button>
            </div>
            <div>
              <button
                className="d-flex justify-content-center align-items-center btn gap-2 rounded-4 text-white shadow-lg"
                style={{ backgroundColor: "#1877f2" }}
              >
                <img src={require("../ASSETS/icons/facebook.png")} />
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
