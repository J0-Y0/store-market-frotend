// auth/useUpdateToken.ts
import axios from "axios";
import { useAuth } from "../authProvider.tsx";

export const useUpdateToken = () => {
  const { refreshToken, setToken, setLoading, setMessage, logout } = useAuth();

  return async () => {
    if (!refreshToken) {
      logout();
      setMessage({
        content: "No refresh token found. Please log in again.",
        severity: "warning",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("/refresh-token", { refreshToken });

      setToken(response.data.accessToken);
      setMessage({
        content: "Token refreshed successfully.",
        severity: "success",
      });
    } catch (error) {
      logout();
      setMessage({
        content: "Session expired. Please log in again.",
        severity: "warning",
      });
    } finally {
      setLoading(false);
    }
  };
};
