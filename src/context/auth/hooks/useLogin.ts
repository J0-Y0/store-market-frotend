// auth/useLogin.ts
import { useAuth } from "../authProvider";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import apiClient from "../../../services/api-client";
import { jwtDecode } from "jwt-decode";
import { User } from "../types";

export const useLogin = () => {
  const {setUser,setToken, setRefreshToken, setLoading, setMessage } = useAuth();
  const navigate  = useNavigate()
  return async (email: string, password: string) => {
    setLoading(true);
    setMessage(null); // Clear previous messages

    try {
      const response = await apiClient.post(
        "/auth/jwt/create/",
        { email, password }
      );

      if (response.status === 200) {
        const data =response.data
        

        setToken(data.access);
        setRefreshToken(data.refresh);
        
        localStorage.setItem("refresh", data.refresh);
        localStorage.setItem("access", data.access);
          

          const decode = jwtDecode<User>(data.access);
          setUser(decode)
          
        }
        setMessage({
          content: "Login successful!",
          severity: "success",
        });
         navigate("/");
      
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
