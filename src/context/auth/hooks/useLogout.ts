// auth/useLogout.ts
import { useAuth } from "../authProvider.tsx";

export const useLogout = () => {
  const { setUser,setToken, setRefreshToken, setMessage } = useAuth();

  return () => {
    setUser(null)
    setToken(null);
    setRefreshToken(null);
    localStorage.removeItem("refresh");
    localStorage.removeItem("access");
    setMessage({
      content: "Logged out successfully.",
      severity: "success",
    });
  };
};
