import { Route, Routes } from "react-router-dom";
import React from "react";

import UserSignUpAndSignIn from "./pages/UserSignUpAndSignIn";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup-signin" element={<UserSignUpAndSignIn />} />
      <Route path="/my-profile" element={<UserProfile />} />
    </Routes>
  );
}

export default AppRouter;
