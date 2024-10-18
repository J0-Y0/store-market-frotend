// auth/useLogin.ts
import { useAuth } from "../authProvider";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import apiClient from "../../../services/api-client";

interface NewUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
}

export const useSignUp = () => {
  const { setLoading, setMessage } = useAuth();
  const navigate = useNavigate();
  return async (data: NewUser) => {
    setLoading(true);
    setMessage(null); // Clear previous messages

    try {
      const response = await apiClient.post("/auth/users/", {
        ...data,
      });

      if (response.status === 201) {
        setMessage({
          content: "Account Created,Activation required !",
          severity: "info",
        });
        navigate("/signup-activation");
      } else {
        setMessage({
          content: response.data,
          severity: "error",
        });
      }
    } catch (error: any) {
      const status = error.response?.status;

      let content = "Unexpected error. Please try again." + error.message;
      let severity: "error" | "warning" = "error";

      if (status === 401 || status === 400) {
        content = "Oops! Invalid Data." + JSON.stringify(error.response.data).slice(1, -1);
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
