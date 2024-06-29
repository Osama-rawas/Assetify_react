import { useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import { User } from "../Context/Context";
import { useContext, useEffect } from "react";
import axios from "axios";

export default function PersistLogin() {
  const user = useContext(User);
  const cookie = new Cookies();
  //   const token = cookie.set("Bearer", user.auth.token);
  const getToken = cookie.get("Bearer");

  console.log(user);
  useEffect(() => {
    async function refrech() {
      try {
        let resp = await axios
          .get(
            "https://task5-toleen-falion.trainees-mad-s.com/api/auth/refreshToken",
            {
              headers: {
                Accept: "application/json",
                Authorization: "Bearer " + getToken,
              },
            }
          )
          .then((data) => {
            cookie.set("Bearer", data.data.token);
            user.setAuth((prev) => {
              return { token: data.data.token };
            });
          });
        console.log(resp);
      } catch (err) {}
    }
    if (!user.auth.token) {
      refrech();
    }
    const interval = setInterval(refrech, 180000);
    return () => clearInterval(interval);
  }, [user]);
  return "";
}
