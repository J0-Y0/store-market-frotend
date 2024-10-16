import React from "react";
import { useLogout } from "../context/auth/hooks/useLogout";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const logout = useLogout();
  const navigate = useNavigate();

  logout();
  navigate("/login");
  return <div></div>;
};

export default Logout;
