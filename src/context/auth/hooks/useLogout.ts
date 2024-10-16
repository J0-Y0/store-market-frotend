// auth/useLogout.ts
import { useAuth } from "../authProvider.tsx";

export const useLogout = () => {
  const { setToken, setRefreshToken, setMessage } = useAuth();

  return () => {
    setToken(null);
    setRefreshToken(null);
    localStorage.removeItem("refreshToken");
    setMessage({
      content: "Logged out successfully.",
      severity: "success",
    });
  };
};
