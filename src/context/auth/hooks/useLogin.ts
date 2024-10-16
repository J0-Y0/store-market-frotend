// auth/useLogin.ts
import axios from "axios";
import { useAuth } from "../authProvider";

export const useLogin = () => {
  const { setToken, setRefreshToken, setLoading, setMessage } = useAuth();

  return async (email: string, password: string) => {
    setLoading(true);
    setMessage(null); // Clear previous messages

    try {
      const response = await axios.post(
        "http://172.20.18.55:8000/auth/jwt/create/",
        { email, password }
      );

      if (response.status === 200) {
        setToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        setMessage({
          content: "Login successful!",
          severity: "success",
        });
      }
    } catch (error: any) {
      const status = error.response?.status;

      let content = "Unexpected error. Please try again.";
      if (status === 400 || status === 401 ) content = "Invalid credentials.";
     
      if (status === 500) content = "Server error.";

      setMessage({
        content,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };
};
