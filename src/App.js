import Landing from "./components/Landing";
import HomePage from "./pages/HomePage";
import Login from "./pages/login/Login";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import Logout from "./pages/logout/Logout";
import Signup from "./pages/signup/Signup";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PersistLogin from "./pages/PersistLogin";
import DeleteUser from "./pages/DeleteUser";

export default function App() {
  const authVariants = {
    hidden: { x: "-100%" },
    visibale: {
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.5 },
    },
  };
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<Landing />} />
          <Route
            path="logout"
            element={
              <motion.div
                variants={authVariants}
                initial="hidden"
                animate="visibale"
                exit="exit"
              >
                <Logout />
              </motion.div>
            }
          />
          <Route
            path="delete"
            element={
              <motion.div
                variants={authVariants}
                initial="hidden"
                animate="visibale"
                exit="exit"
              >
                <DeleteUser />
              </motion.div>
            }
          />
          <Route
            path="verifyemail"
            element={
              <motion.div
                variants={authVariants}
                initial="hidden"
                animate="visibale"
                exit="exit"
              >
                <VerifyEmail />
              </motion.div>
            }
          />
          <Route
            path="signup"
            element={
              <motion.div
                variants={authVariants}
                initial="hidden"
                animate="visibale"
                exit="exit"
              >
                <Signup />
              </motion.div>
            }
          />
          <Route
            path="login"
            element={
              <motion.div
                variants={authVariants}
                initial="hidden"
                animate="visibale"
                exit="exit"
              >
                <Login />
              </motion.div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
