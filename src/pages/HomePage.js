import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";

import PersistLogin from "./PersistLogin";

export default function HomePage() {
  return (
    <>
      <PersistLogin />
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

        <div className="about d-flex align-items-center flex-column text-center">
          <p dir="rtl" className="text-white fs-3 mt-3">
            قم بالإرتقاء تلقائياً إلى فئة Assetify +
          </p>
          <p dir="rtl" className="light-blue-color mb-5">
            تمثل عضوية Assetify + فئة مستثمرين قيميين وتأتي مع مجموعة من المزايا
            الاستثنائية والخدمات المخصصة
          </p>
        </div>
      </div>
    </>
  );
}
