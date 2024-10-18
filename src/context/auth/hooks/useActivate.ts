// import { useContext, useEffect } from "react";
 import { useParams } from "react-router-dom";



import { useAuth } from "../authProvider";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import apiClient from "../../../services/api-client";

export const useActivate = () => {
    const { setLoading, setMessage } = useAuth();
    const navigate = useNavigate();
    
  return async (uid:string|undefined,token:string|undefined) => {
    setLoading(true);
    setMessage(null); // Clear previous messages

    try {
      const response = await apiClient.post("/auth/users/activation/", {
        uid,
        token,
      });

        if (response.status===204) {
      

        setMessage({
          content: "well done Account activated , now you can sign in to your account",
          severity: "success",
        });
              navigate("/login");
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

      if (status === 401 || status === 400 || status ===403) {
        content = "Oops!,Invalid Lik ,Token Expired, retry resting your account";
          severity = "warning";
          navigate("/login");
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
