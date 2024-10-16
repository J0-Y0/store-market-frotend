import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PasswordReset from "./pages/PasswordReset";
import SignUpSuccess from "./pages/SignUpSuccess";
// import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/auth/authProvider";
import Notification from "./components/Notification";
import Logout from "./pages/Logout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signup-success",
    element: <SignUpSuccess />,
  },
  {
    path: "/PasswordReset",
    element: <PasswordReset />,
  },
]);
function App() {
  return (
    <AuthProvider>
      <Navbar />
      <RouterProvider router={router} />
      <Notification />
    </AuthProvider>
  );
}

export default App;
