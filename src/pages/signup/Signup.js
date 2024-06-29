import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../Context/Context";
import "./signup.css";
import Social from "../../components/Social";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCon, setPasswordCon] = useState("");
  const [accept, setAccept] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState();
  const [certificate, setCertificate] = useState();
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const profilePhotoUpload = useRef("");
  const certificateUpload = useRef("");
  const [profilePhotoUrl, setProfilePhotoUrl] = useState("");
  const [certificateUrl, setCertificateUrl] = useState("");
  const userNow = useContext(User);
  const navigate = useNavigate();
  function handleProfilePhoto(e) {
    let image = e.target.files[0];
    setProfilePhoto(image);
    setProfilePhotoUrl(URL.createObjectURL(image));
  }

  function handleCertificate(e) {
    let image = e.target.files[0];
    setCertificate(image);
    setCertificateUrl(URL.createObjectURL(image));
  }

  function handleProfileUpload() {
    profilePhotoUpload.current.click();
  }
  function handleCertificateUpload() {
    certificateUpload.current.click();
  }
  async function sumbit(e) {
    const formData = new FormData();
    formData.append("profile_photo", profilePhoto);
    formData.append("certificate", certificate);
    let flag = false;
    e.preventDefault();
    setAccept(true);
    if (
      name.length === " " ||
      password.length < 8 ||
      phoneNumber.length < 10 ||
      password !== passwordCon ||
      !profilePhoto ||
      !certificate
    )
      flag = false;
    else flag = true;
    try {
      if (flag) {
        let res = await axios.post(
          "https://task5-toleen-falion.trainees-mad-s.com/api/auth/Signup",
          {
            formData,
            name: name,
            email: email,
            phone: phoneNumber,
            password: password,
            password_confirmation: passwordCon,
          }
        );

        const formDataStr = JSON.parse(res.config.data);
        window.localStorage.setItem("email", formDataStr.email);

        if (res.status === 201 || res.status === 200) {
          navigate("/verifyemail");
        }
      }
    } catch (err) {
      err.response.data.errors.map((index) => {
        if (index.includes("phone")) {
          setPhoneError(true);
        }
        if (index.includes("email")) {
          setEmailError(true);
        }
      });
      // setEmailError(err.response.status);
    }
  }

  return (
    <div className="container-fluid d-flex align-items-end justify-content-center signup ">
      <div className="background-image"></div>
      <div className="form-elements signup-box bg-white z-2 ">
        <h2 className="text-center blue-color mt-3 ">إنشاء حساب</h2>
        <form
          onSubmit={sumbit}
          className="d-flex  justify-content-around gap-3 me-2 ms-2 signup-box-inptus"
        >
          <div
            className="d-flex  flex-column gap-4"
            style={{ marginTop: "50px" }}
          >
            <div
              className="d-flex  flex-column align-items-end signup-media-box p-2 "
              onClick={handleProfileUpload}
              style={{ cursor: "pointer" }}
            >
              <Form.Control
                type="file"
                hidden
                ref={profilePhotoUpload}
                onChange={handleProfilePhoto}
              />
              <p className="signup-media-titel ">الصورة الشخصية</p>
              <div className="d-flex align-items-center justify-content-around gap-2">
                <img
                  src={
                    profilePhotoUrl
                      ? profilePhotoUrl
                      : require("../../ASSETS/icons/upload.png")
                  }
                  alt=""
                  width="60px"
                  height={"60px"}
                />
                <p className="">
                  اسحب و افلت الصورة هنا او قم برفعها من الملفات
                </p>
              </div>
              <p dir="rtl" style={{ color: "#777" }}>
                الحجم الاقصى: 2MB
              </p>
            </div>
            <div
              className="d-flex flex-column align-items-end signup-media-box p-2 "
              onClick={handleCertificateUpload}
              style={{ cursor: "pointer" }}
            >
              <Form.Control
                type="file"
                hidden
                ref={certificateUpload}
                onChange={handleCertificate}
              />
              <p className="signup-media-titel ">اثبات شخصية</p>

              <div className="d-flex align-items-center justify-content-around gap-2">
                <img
                  src={
                    certificateUrl
                      ? certificateUrl
                      : require("../../ASSETS/icons/upload.png")
                  }
                  alt=""
                  width="60px"
                  height={"60px"}
                />
                <p className="">
                  اسحب و افلت الصورة هنا او قم برفعها من الملفات
                </p>
              </div>
              <p dir="rtl" style={{ color: "#777" }}>
                الحجم الاقصى: 1MB
              </p>
            </div>
            {(!profilePhoto || !certificate) && accept && (
              <p className="error-text text-center" dir="rtl">
                الرجاء رفع الصور
              </p>
            )}
            <button
              className="btn signup-btn  col-12 text-center"
              type="submit"
            >
              إنشاء حساب
            </button>
            <div className="ask-signup">
              <p dir="rtl">
                لديك حساب؟
                <Link
                  to={"/login"}
                  style={{ color: "var(--color-2)", marginRight: "6px" }}
                >
                  تسجيل الدخول
                </Link>
              </p>
            </div>
          </div>
          <div className="d-flex flex-column signup-inputs  ">
            <div className="input-box">
              <div
                className="signup-label label-email "
                style={{ left: "420px" }}
              >
                <label htmlFor="email" className="form-label bg-white ">
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
              {emailError && accept && (
                <p className="error-text">البريد الإلكتروني مستخدم بالفعل.</p>
              )}
            </div>
            <div className="input-box">
              <div
                className="signup-label  label-username"
                style={{ left: "350px" }}
              >
                <label htmlFor="username" className="form-label bg-white ">
                  اسم المستخدم
                </label>
              </div>
              <input
                type="text"
                className="form-control  border-black "
                id="usename"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {name.length === " " && accept && (
                <p className="error-text">اسم المستخدم مطلوب.</p>
              )}
            </div>
            <div className="input-box">
              <div className="signup-label ">
                <label htmlFor="phone" className="form-label bg-white ">
                  رقم الهاتف
                </label>
              </div>
              <input
                type="text"
                className="form-control  border-black"
                id="phone"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
              {phoneError && accept && (
                <p className="error-text">رقم الهاتف مستخدم بالفعل.</p>
              )}
            </div>
            <div className="input-box">
              <div className="signup-label ">
                <label htmlFor="password" className="form-label bg-white  ">
                  كلمة المرور
                </label>
              </div>
              <input
                type="password"
                className="form-control  border-black"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {password.length < 8 && accept && (
                <p className="error-text">
                  يجب أن تكون كلمة المرور أكثر من 8 أحرف.
                </p>
              )}
            </div>
            <div className="input-box">
              <div className="signup-label ">
                <label htmlFor="passwordcon" className="form-label bg-white">
                  كلمة المرور
                </label>
              </div>
              <input
                type="password"
                className="form-control  border-black"
                id="passwordcon"
                value={passwordCon}
                onChange={(e) => {
                  setPasswordCon(e.target.value);
                }}
              />
              {password !== passwordCon && accept && (
                <p className="error-text">كلمة المرور غير متطابقة.</p>
              )}
            </div>
          </div>
        </form>
        <div className="d-flex justify-content-center bg-white z-1 w-100 gap-3">
          <hr className="line" />
          <span style={{ color: "#777" }}>أو</span>
          <hr className="line" />
        </div>

        <div className=" d-flex justify-content-center mt-4 gap-5 mb-4  signup-social">
          <Social />
        </div>
      </div>
    </div>
  );
}
