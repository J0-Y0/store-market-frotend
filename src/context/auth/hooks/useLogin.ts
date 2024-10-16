// auth/useLogin.ts
import axios from "axios";
import { useAuth } from "../authProvider";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const useLogin = () => {
  const {setToken, setRefreshToken, setLoading, setMessage } = useAuth();
  const navigate  = useNavigate()
  return async (email: string, password: string) => {
    setLoading(true);
    setMessage(null); // Clear previous messages

    try {
      const response = await axios.post(
        "http://172.20.18.55:8000/auth/jwt/create/",
        { email, password }
      );

      if (response.status === 200) {
        setToken(response.data.access);
        setRefreshToken(response.data.refresh);
        localStorage.setItem("refresh", response.data.refresh);
        localStorage.setItem("access", response.data.access);
           
        setMessage({
          content: "Login successful!",
          severity: "success",
        });
         navigate("/");
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
