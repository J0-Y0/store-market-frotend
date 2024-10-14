import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PasswordReset from "./pages/PasswordReset";
import SignUpSuccess from "./pages/SignUpSuccess";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <SignUpSuccess />
      <PasswordReset />
      <SignUp />
      <SignIn />
    </>
  );
}

export default App;
