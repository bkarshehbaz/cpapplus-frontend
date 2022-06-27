import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
// import RegisterFunc from "./Components/Auth/registerFunction";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import { Provider } from "react-redux";
import store from "./redux/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import PrivateRoute from "./Components/private-route/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import Testing from "./Components/SensorBlocks/testing";
import Profile from "./Components/Auth/ChangePassword";
import Emails from "./emails";
import Sensors from "./Sensors";

// Lessions
import DialogeBox from "./dialogeBox";
function App() {
  // Check for token to keep user logged in
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded)); // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser()); // Redirect to login
      window.location.href = "./login";
    }
  }

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <Route exact path="/Lession1" component={Lession1} /> */}
          {/* <Navbar />
        <br />
        <br /> */}

          <Route exact path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <PrivateRoute exact path="/Sensors" component={Sensors} /> */}
          <Route
            exact
            path="/dashboard"
            element={<PrivateRoute component={DialogeBox} />}
          />
          {/* <Route exact path="/dashboard" element={<PrivateRoute component={<DialogeBox/>}}  > */}
          {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
          <Route
            exact
            path="/profile"
            element={<PrivateRoute component={Profile} />}
          />
          {/* <PrivateRoute exact path="/testing" component={Testing} /> */}
          {/* <PrivateRoute exact path="/receivers" component={Emails} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
