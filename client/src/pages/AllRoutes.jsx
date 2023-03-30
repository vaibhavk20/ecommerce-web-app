import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Routes/Private";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Policy from "./Policy";
import Register from "./Register";
import Dashboard from "./user/Dashboard.js";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/policy" element={<Policy />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default AllRoutes;
