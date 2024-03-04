import React from "react";
import { useAuth } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function AuthGuard({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  const publicPaths = ["/", "/login", "/signup"];
  const isProtected = !publicPaths.includes(location.pathname);

  if (!user && isProtected) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default AuthGuard;
