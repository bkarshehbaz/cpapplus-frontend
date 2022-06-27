import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { GoogleApiWrapper } from "google-maps-react";
// import "./Navbar.css";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, updatePassword } from "../../redux/actions/authActions";

import dashboard from "../../assets/images/dashboard.png";

import user from "../../assets/images/user.png";
import logout from "../../assets/images/logout.png";

// import { loginUser } from "../../redux/actions/authActions";

const ChangePassword = ({ auth, updatePassword, errors, logoutUser }) => {
  let send = useNavigate();
  const [oldPassword, SetOldPassword] = useState("");
  const [newPassword, SetNewPassword] = useState("");
  const [error, SetErrors] = useState([]);
  const [error2, SetErrors2] = useState(errors.error);
  const [msg, SetMsg] = useState("");
  const ChangePassword = (e) => {
    e.preventDefault();
    updatePassword({
      email: auth.user.email,
      currentPassword: oldPassword,
      newPassword: newPassword,
    });
  };
  useEffect(() => {
    SetErrors(errors.errors);
  });
  // console.log("error", errors.error);

  const [sidebar, SetSidebar] = useState(true);
  const ToggleSidebar = () => {
    if (sidebar === true) {
      document.getElementById("sidebar").style.marginLeft = "0px";
    } else {
      document.getElementById("sidebar").style.marginLeft = "-250px";
    }
    SetSidebar(!sidebar);
  };

  return (
    <div className="wrapper d-flex align-items-stretch">
      <nav id="sidebar">
        <button
          type="button"
          id="sidebarCollapse"
          onClick={ToggleSidebar}
          className="btn btn-primary"
        >
          <i className="fa fa-bars" />
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="p-4 pt-5">
          {/* <img src={logo} /> */}
          <h1
            onClick={() => {
              send("/dashboard");
            }}
            style={{ color: "white", cursor: "pointer" }}
          >
            Cpapplus
          </h1>
          <h5 className="nav-head">Navigations</h5>
          <ul className="list-unstyled components mb-5">
            <li
              onClick={() => {
                send("/dashboard");
              }}
              className="active"
            >
              <a data-toggle="collapse" aria-expanded="false">
                <img className="link-icon icon" src={dashboard} />
                Dashboard
              </a>
            </li>

            <li>
              <a>
                <img className="link-icon icon" src={dashboard} />
                Menu 2
              </a>
            </li>
            <li>
              <a>
                <img className="link-icon icon" src={dashboard} />
                Menu 3
              </a>
            </li>
          </ul>
          <div className="footer">
            <p></p>
          </div>
        </div>
      </nav>
      {/* Page Content  */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li
                onClick={() => {
                  this.props.history.push("/profile");
                }}
                className="nav-item"
              >
                <a className="nav-link">
                  <img className="link-icon icon" src={user} />
                </a>
              </li>
              <li
                onClick={() => {
                  logoutUser();
                }}
                className="nav-item"
              >
                <a href="" className="nav-link">
                  <img className="link-icon icon" src={logout} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="content" className="p-4 p-md-5">
        <h2 className="mb-4">Profile</h2>
        <h6>Here you can see the section's data.</h6>

        <form className="AuthForm changePassword col-lg-6 col-md-12 col-12">
          <br />

          <div class="form-row">
            <div class="form-group col-md-12">
              <label htmlFor="Password">Current Password</label> <br />
              <input
                type="password"
                className="input-control"
                placeholder="Enter your old password"
                id="currentpassword"
                onChange={(e) => {
                  SetOldPassword(e.target.value);
                }}
              />{" "}
              <br />
              <span className="text-danger">
                {error && error.length > 0
                  ? error.map((item) =>
                      item.param === "currentPassword" ? item.msg : null
                    )
                  : null}
              </span>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label htmlFor="Password">New Password</label> <br />
              <input
                type="password"
                className="input-control"
                placeholder="Enter your new password"
                id="newpassword"
                onChange={(e) => {
                  SetNewPassword(e.target.value);
                }}
              />{" "}
              <br />
              <span className="text-danger">
                {error && error.length > 0
                  ? error.map((item) =>
                      item.param === "newPassword" ? item.msg : null
                    )
                  : null}

                {errors && errors.error ? "Passwords are not matching" : null}
              </span>
              <span className="text-success">
                {auth && auth.successMessage ? auth.successMessage : null}
              </span>
              {/* {errors.passwordIncorrect} */}
            </div>
          </div>

          <div style={{ marginTop: "30px" }} className="form-btns">
            <button
              onClick={(e) => ChangePassword(e)}
              type="submit"
              className="bottom-btn left bottom-small"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ChangePassword.propTypes = {
  auth: PropTypes.object.isRequired,

  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { updatePassword, logoutUser })(
  ChangePassword
);
