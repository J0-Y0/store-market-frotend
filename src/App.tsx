import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PasswordReset from "./pages/PasswordReset";
import SignUpSuccess from "./pages/SignUpSuccess";
// import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./context/UserAuth";
import Notification from "./components/Notification";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <SignIn />,
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
