import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Routes/Private";
import About from "./About";
import Contact from "./Contact";
import ForgetPassword from "./ForgetPassword";
import Home from "./Home";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Policy from "./Policy";
import Register from "./Register";
import Dashboard from "./user/Dashboard.js";
import AdminRoute from "../Routes/AdminRoute";
import AdminDashboard from "./admin/AdminDashboard";
import CreateProduct from "./admin/CreateProduct";
import CreateCategory from "./admin/CreateCategory";
import Users from "./admin/Users";
import Profile from "./user/Profile";
import Orders from "./user/Orders";
import Products from "./admin/Products";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="user" element={<Dashboard />} />
        <Route path="user/profile" element={<Profile />} />
        <Route path="user/orders" element={<Orders />} />
      </Route>
      <Route path="/dashboard" element={<AdminRoute />}>
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/create-category" element={<CreateCategory />} />
        <Route path="admin/create-product" element={<CreateProduct />} />
        <Route path="admin/users" element={<Users />} />
        <Route path="admin/products" element={<Products />} />
      </Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/policy" element={<Policy />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/forget-password" element={<ForgetPassword />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default AllRoutes;
