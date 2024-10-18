// auth/useLogin.ts
import { useAuth } from "../authProvider";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import apiClient from "../../../services/api-client";
import { jwtDecode } from "jwt-decode";
import { string } from "zod";

interface NewUser{
    first_name፡string;
    last_name፡string;
    email፡string
    password፡string
    re_password፡string

}


export const useSignUp = () => {
  const { setUser, setToken, setRefreshToken, setLoading, setMessage } =
    useAuth();
  const navigate = useNavigate();
  return async (data:NewUser) => {
    setLoading(true);
    setMessage(null); // Clear previous messages

    try {
      const response = await apiClient.post("/auth/users/", {
        data,
      });

      if (response.status === 200) {
        const data = response.data;

        setToken(data.access);
        setRefreshToken(data.refresh);

        localStorage.setItem("refresh", data.refresh);
        localStorage.setItem("access", data.access);

        const decode = jwtDecode<User>(data.access);
        setUser(decode);
      }
      setMessage({
        content: "Login successful!",
        severity: "success",
      });
      navigate("/");
    } catch (error: any) {
      const status = error.response?.status;

      let content = "Unexpected error. Please try again." + error;
      let severity: "error" | "warning" = "error";

      if (status === 401 || status === 400) {
        content = "Oops! Invalid credentials. Try again?";
        severity = "warning";
      }
      if (status === 500) content = "Server error.";

      setMessage({
        content,
        severity,
      });
    } finally {
      setLoading(false);
    }
  };
};
