import { Route, Routes } from "react-router-dom";
import React from "react";

import UserSignUpAndSignIn from "./pages/UserSignUpAndSignIn";
import Home from "./pages/Home";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup-signin" element={<UserSignUpAndSignIn />} />
    </Routes>
  );
}

export default AppRouter;
