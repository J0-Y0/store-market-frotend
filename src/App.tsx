import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PasswordReset from "./pages/PasswordReset";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <PasswordReset />
      <SignUp />
      <SignIn />
    </>
  );
}

export default App;
