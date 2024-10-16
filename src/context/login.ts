//  // Login function
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
