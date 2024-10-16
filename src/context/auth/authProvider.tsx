// auth/authProvider.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { AuthContextType, Message, User } from "./types";
import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";

const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("access")
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    localStorage.getItem("refresh")
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<Message | null>(null);
  const [user, setUser] = useState<User | null>(
    token ? jwtDecode<User>(token) : null
  );

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
      localStorage.setItem("access", token);
      const decode = jwtDecode<User>(token);

      setUser(decode);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("access");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      loading,
      message,
      setToken,
      setRefreshToken,
      setLoading,
      setMessage,
      user,
      setUser,
    }),
    [token, loading, message]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
