import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";
import SpinnerCom from "../components/SpinnerCom";

const AdminRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/v1/auth/admin-auth`
      );

      // by default header-authorization provided from context api
      //   else pass => headers:{Authorization:auth?.token}
      //   console.log(res.data.ok)
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : <SpinnerCom path="" />;
};

export default AdminRoute;
