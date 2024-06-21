import { Outlet, useLocation } from "react-router-dom";
import { motion, spring } from "framer-motion";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const location = useLocation();
  const isHomePage = location.pathname === "http://localhost:3001/";
  return (
    <div>
      <Navbar />
      <div className=" hero cointainer-fluid">
        <div
          className={
            window.location.href.endsWith("/") ||
            window.location.href.endsWith("#") ||
            window.location.href.endsWith("Assetify_react")
              ? ""
              : "overlay"
          }
        >
          <Outlet />
        </div>
      </div>
      {/* {window.location.href.endsWith("/signup") ? (
        ""
      ) : ( */}
      <div className="about d-flex align-items-center flex-column text-center">
        <p dir="rtl" className="text-white fs-3 mt-3">
          قم بالإرتقاء تلقائياً إلى فئة Assetify +
        </p>
        <p dir="rtl" className="light-blue-color mb-5">
          تمثل عضوية Assetify + فئة مستثمرين قيميين وتأتي مع مجموعة من المزايا
          الاستثنائية والخدمات المخصصة
        </p>
      </div>
      {/* )} */}
    </div>
  );
}
