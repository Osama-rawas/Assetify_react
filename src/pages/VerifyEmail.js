import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function VerifyEmail() {
  const [submitBtn, setSubmitBtn] = useState(false);
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0].focus();
  }, []);

  const handleInputChange = (e, index) => {
    if (e.target.value.length === 1 && index < inputsRef.current.length) {
      if (e.target.value >= 0 && e.target.value <= 9) {
        e.target.style.backgroundColor = "#ACACAC";
        if (index < inputsRef.current.length - 1)
          inputsRef.current[index + 1].focus();
        submit();
      } else {
        e.target.value = "";
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0) {
      if (e.target.value.length === 0) {
        submit();
        inputsRef.current[index - 1].focus();
        e.target.style.backgroundColor = "#fff";
      } else {
        e.target.value = "";
      }
    }
  };
  function submit() {
    setSubmitBtn(false);
    let check = false;
    for (let i = 0; i < 6; i++) {
      if (inputsRef.current[i].value !== "") {
        check = true;
      } else {
        check = false;
        setSubmitBtn(false);
      }
    }
    if (check) setSubmitBtn(true);
    //
  }
  return (
    <div className="d-flex justify-content-center verify-email align-items-end">
      <div class="background-image"></div>
      <div className="bg-white col-5  verify-box  ">
        <div>
          <h2 dir="rtl" className="mt-2  text-center fw-bold mt-5">
            مرحبا بك <span style={{ color: " #6b48ff" }}>RED</span>
          </h2>
          <p dir="rtl" className="text-center mt-4">
            لقد تم ارسال رمز التأكيد الى:{" "}
            <span style={{ color: " #6b48ff" }}>(red1234@gmail.com)</span>
          </p>

          <div className="d-flex justify-content-center align-items-center mt-4 flex-wrap">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                ref={(el) => (inputsRef.current[i] = el)}
                className="form-control me-2 verify-input"
                type="text"
                placeholder="_"
                maxLength="1"
                onChange={(e) => handleInputChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            ))}
          </div>

          <Link to={submitBtn ? "/" : ""} style={{ color: "var(--color-4)" }}>
            <button
              className="btn login-btn text-dark col-10 "
              type="submit"
              style={{ margin: " 30px 45px" }}
              onClick={submit}
            >
              تسجيل الدخول
            </button>
          </Link>

          <p className="text-center">
            اذا لم يصلك الرمز يمكنك اعادة المحاولة بعد
            <span style={{ color: " #6b48ff" }}> 4:20د</span>
          </p>
          <button type="button" className="btn recend-code-btn col-10 mb-5">
            <Link to={"/login"}> اعادة الارسال</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
