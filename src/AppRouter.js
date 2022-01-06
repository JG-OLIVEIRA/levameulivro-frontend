import { Route, Routes } from "react-router-dom";
import React from "react";

import UserSignUpAndSignIn from "./pages/UserSignUpAndSignIn";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import BookDetails from "./pages/BookDetails";
import MyBooks from "./pages/MyBooks";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup-signin" element={<UserSignUpAndSignIn />} />
      <Route path="/my-profile" element={<UserProfile />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/my-books" element={<MyBooks />} />
    </Routes>
  );
}

export default AppRouter;
