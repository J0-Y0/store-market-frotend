// import axios from "axios";
// import {
//   createContext,
//   ReactNode,
//   useContext,
//   useEffect,
//   useState,
//   useMemo,
// } from "react";
// interface Message {
//   content: string;
//   severity: "info" | "warning" | "success" | "error";
// }
// interface AuthContextType {
//   token: string | null;
//   loading: boolean;
//   message: Message;
//   login: (username: string, password: string) => void;
//   logout: () => void;
//   updateToken: () => Promise<void>;
//   setMessage: (message: Message) => void;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// interface Props {
//   children: ReactNode;
// }

// export const AuthProvider = ({ children }: Props) => {
//   const [token, setToken] = useState<string | null>(
//     localStorage.getItem("token")
//   );
//   const [refreshToken, setRefreshToken] = useState<string | null>(
//     localStorage.getItem("refreshToken")
//   );
//   const [loading, setLoading] = useState<boolean>(false);
//   const [message, setMessage] = useState<Message | null>(null);

//   // Sync token with axios headers and localStorage
//   useEffect(() => {
//     if (token) {
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//       localStorage.setItem("token", token);
//     } else {
//       delete axios.defaults.headers.common["Authorization"];
//       localStorage.removeItem("token");
//     }
//   }, [token]);

//   // Login function
//   const login = async (email: string, password: string) => {
//     setLoading(true);
//     setMessage(null); // Clear previous messages
//     try {
//       const response = await axios.post(
//         "http://172.20.18.55:8000/auth/jwt/create/",
//         {
//           email,
//           password,
//         }
//       );

//       if (response.status === 200) {
//         // Store tokens and update state
//         setToken(response.data.accessToken);
//         setRefreshToken(response.data.refreshToken);
//         localStorage.setItem("refreshToken", response.data.refreshToken);

//         setMessage({
//           content: "Login successful!",
//           severity: "success",
//         });
//       }
//     } catch (error: any) {
//       // Handle different status codes
//       if (error.response) {
//         const status = error.response.status;

//         switch (status) {
//           case 400:
//             setMessage({
//               content: "Invalid credentials. Please try again.",
//               severity: "error",
//             });
//             break;
//           case 401:
//             setMessage({
//               content: "Unauthorized. Check your username or password.",
//               severity: "warning",
//             });
//             break;
//           case 500:
//             setMessage({
//               content: "Server error. Please try again later.",
//               severity: "error",
//             });
//             break;
//           default:
//             setMessage({
//               content: `Unexpected error: ${error.response.data.detail || "Try again later."}`,
//               severity: "info",
//             });
//         }
//       } else if (error.request) {
//         setMessage({
//           content: "No response from the server. Please check your connection.",
//           severity: "warning",
//         });
//       } else {
//         setMessage({
//           content: `Error: ${error.message}`,
//           severity: "error",
//         });
//       }
//     } finally {
//       setLoading(false); // Ensure loading stops
//     }
//   };

//   // Logout function
//   const logout = (): void => {
//     setToken(null);
//     setRefreshToken(null);
//     localStorage.removeItem("refreshToken");
//     setMessage({
//       content: "Logged out successfully.",
//       severity: "success",
//     });
//   };

//   // Update token using the refresh token
//   const updateToken = async (): Promise<void> => {
//     if (!refreshToken) {
//       logout();
//       setMessage({
//         content: "No refresh token available. Please log in again.",
//         severity: "warning",
//       });
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await axios.post("/refresh-token", { refreshToken });
//       setToken(response.data.accessToken);
//       setMessage({
//         content: "Token refreshed successfully.",
//         severity: "success",
//       });
//     } catch (error) {
//       console.error("Token refresh failed:", error);

//       logout();
//       setMessage({
//         content: "Session expired. Please log in again.",
//         severity: "warning",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Set a timer to refresh the token every 4 hours (14400000ms)
//   useEffect(() => {
//     if (refreshToken) {
//       const intervalId = setInterval(
//         () => {
//           updateToken();
//         },
//         4 * 60 * 60 * 1000
//       ); // 4 hours in milliseconds

//       return () => clearInterval(intervalId); // Cleanup on unmount
//     }
//   }, [refreshToken]);

//   const contextValue = useMemo(
//     () => ({
//       token,
//       loading,
//       message,
//       login,
//       logout,
//       updateToken,
//       setMessage,
//     }),
//     [token, loading, message]
//   );

//   return (
//     <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
//   );
// };

// // Custom hook to use the AuthContext
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export default AuthProvider;
