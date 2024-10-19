import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PasswordReset from "./pages/PasswordReset";
import SignUpActivation from "./pages/SignUpActivation";
// import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/auth/authProvider";
import Notification from "./components/Notification";
import Logout from "./pages/Logout";
import SignUpActivationSuccess from "./pages/SignUpActivationSuccess";
import PasswordRestConfirm from "./pages/PasswordRestConfirm";
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
    path: "/signup-activation",
    element: <SignUpActivation />,
  },
  {
    path: "/account/activate/:uid/:token",
    element: <SignUpActivationSuccess />,
  },
  {
    path: "/PasswordReset",
    element: <PasswordReset />,
  },
  {
    path: "account/reset/confirm/:uid/:token",
    element: <PasswordRestConfirm />,
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
