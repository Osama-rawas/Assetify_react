import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../Context/Context";
import Cookies from "universal-cookie";
import "./VerifyEmail.css";
export default function VerifyEmail() {
  const inputsRef = useRef([]);
  const [code, setCode] = useState([]);
  const [codeError, setCodeError] = useState(false);
  const [reqError, setReqError] = useState(false);
  const [time, setTime] = useState(300);
  const navigte = useNavigate();
  let codeStr = code.join("");
  const user = useContext(User);
  const cookie = new Cookies();

  useEffect(() => {
    inputsRef.current[0].focus();
    if (cookie.get("Bearer")) {
      cookie.remove("Bearer");
      console.log("done");
    }
  }, []);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return ` ${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}د`;
  };
  const recendCode = () => {
    try {
      axios
        .get(
          "https://task5-toleen-falion.trainees-mad-s.com/api/auth/re_sentVerifyEemail"
        )
        .then((r) => {
          console.log(r);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 429) {
            setReqError(true);
          }
        });
    } catch (err) {}
    setTime(300);
  };
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (e.target.value.length === 1 && index < inputsRef.current.length) {
      e.target.style.backgroundColor = "#ACACAC";
      setCode((prevItems) => {
        const newCode = [...prevItems];
        newCode[index] = value;
        return newCode;
      });
      if (index < inputsRef.current.length - 1)
        inputsRef.current[index + 1].focus();
    } else if (value.length === 6) {
      distributeCode(value);
    }
  };
  const handleKeyDown = (e, index) => {
    setCodeError(false);
    if (e.key === "Backspace" && index > 0) {
      setCode((prevItems) => prevItems.slice(0, -1));
      if (e.target.value.length === 0) {
        inputsRef.current[index - 1].focus();
        e.target.style.backgroundColor = "#fff";
      } else {
        e.target.value = "";
      }
      setCode((prevItems) => {
        const newCode = [...prevItems];
        newCode[index] = "";
        return newCode;
      });
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text");
    if (pasteData.length === 6) {
      distributeCode(pasteData);
    }
  };

  const distributeCode = (code) => {
    const newCodeArray = code.split("");
    setCode(newCodeArray);
    newCodeArray.forEach((char, index) => {
      if (inputsRef.current[index]) {
        inputsRef.current[index].value = char;
        inputsRef.current[index].style.backgroundColor = "#ACACAC";
      }
    });
    if (inputsRef.current[5]) {
      inputsRef.current[5].focus();
    }
  };
  async function submit() {
    let check = false;
    for (let i = 0; i < 6; i++) {
      if (inputsRef.current[i].value !== "") {
        check = true;
      } else {
        check = false;
      }
    }
    if (check) {
      try {
        let resp = await axios.post(
          "https://task5-toleen-falion.trainees-mad-s.com/api/auth/verifyEemail",
          {
            code: codeStr,
          }
        );
        cookie.set("Bearer", resp.data.token);
        user.setAuth(() => {
          return { token: resp.data.token };
        });

        if (resp.status === 200) {
          navigte("/");
        }
        console.log(resp);
      } catch (err) {
        console.log(err);
        if (err.response.status === 404) {
          setCodeError(true);
        }
      }
    }
  }
  console.log(codeStr);
  return (
    <div className="d-flex justify-content-center verify-email align-items-end">
      <div
        className={
          reqError ? "background-image background-full" : "background-image"
        }
      ></div>
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
                onPaste={handlePaste}
              />
            ))}
          </div>
          {codeError && (
            <p className="error-text">
              الرمز غير صحيح الرجاء اعد ارساله ومن ثم اعد المحاولة
            </p>
          )}
          {reqError && (
            <p className="error-text">
              بسبب العديد من الطلبات الرجاء المحاولة لاحقا
            </p>
          )}

          <button
            className="btn login-btn text-dark col-10 "
            type="submit"
            style={{ margin: " 30px 45px" }}
            onClick={submit}
          >
            تسجيل الدخول
          </button>

          <p className="text-center">
            اذا لم يصلك الرمز يمكنك اعادة المحاولة بعد
            <span style={{ color: " #6b48ff" }}>{formatTime(time)}</span>
          </p>
          <button
            type="button"
            className="btn recend-code-btn col-10 mb-5"
            onClick={recendCode}
          >
            اعادة الارسال
          </button>
        </div>
      </div>
    </div>
  );
}
