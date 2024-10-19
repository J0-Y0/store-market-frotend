import React from 'react';
import { useAuth } from '../authProvider';
import apiClient from '../../../services/api-client';
  export interface ResetData {
    uid : string|undefined;
    token: string|undefined;
      new_password: string;
}

const useReset = () => {
 
    const { setMessage, setLoading } = useAuth();

    const resetPassword = async (email: string) => {
        setLoading(true);
        setMessage(null);

        try {
            const response = await apiClient.post("/auth/users/reset_password/", { email });

            if (response.status === 204) {
                setMessage({
                    content: "A password reset link has been sent to your email address.",
                    severity: "info",
                });
            } else if (response.status === 400) {
                setMessage({
                    content: response.data,
                    severity: "error",
                });
            } else {
                setMessage({
                    content: "An unexpected error occurred. Please try again later.",
                    severity: "error",
                });
            }
        } catch (error: any) {
            setMessage({
                content: `${error.message} Please try again later.`,
                severity: "error",
            });
        } finally {
            setLoading(false);
        }
    };
    const PasswordResetConfirm = async (data: ResetData) => {
        setLoading(true);
        setMessage(null);

        try {
            const response = await apiClient.post("/auth/users/reset_password_confirm/", { ...data });

            if (response.status === 204) {
                setMessage({
                    content: "A password your password has been reset ",
                    severity: "success",
                });
            }
        } catch (error: any) {


 else if (response.status === 400) {
                setMessage({
                    content: response.data?.message,
                    severity: "error",
                });
            } else {
                setMessage({
                    content: "An unexpected error occurred. Please try again later.",
                    severity: "error",
                });
            }

            setMessage({
                content: `${error.response.status} Please try again later====.`,
                severity: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return { resetPassword, PasswordResetConfirm };
};

export default useReset;

          