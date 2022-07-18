import ForgotPassword from "../screens/forgotPassword/ForgotPassword";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";

const RoutePath = {
  home: {
    title: "Home",
    component: <Home />,
    path: "/",
  },
  login: {
    title: "Login",
    component: <Login />,
    path: "/login",
  },
  register: {
    title: "Register",
    component: <Register />,
    path: "/register",
  },
  forgotPassword: {
    title: "Forgot Password",
    component: <ForgotPassword />,
    path: "/forgotPassword",
  },
};

export default RoutePath;
