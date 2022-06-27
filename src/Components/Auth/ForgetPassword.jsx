import React, { Component } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import classnames from "classnames";

const ForgetPassword = () => {
  const { email, password, errors } = this.state;
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-6">
              <div className="login-left">
                <h4 className="text-capitalize">
                  Login with your credentials to enjoy the Application services
                </h4>
              </div>
            </div> */}
          <div className="col-lg-12">
            <div className="login-right">
              <form className="AuthForm" noValidate onSubmit={this.loginSubmit}>
                <img className="form-logo" src="./logo.PNG" alt="" />
                <h1>Login</h1>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label htmlFor="Email">Email</label> <br />
                    <input
                      type="email"
                      className="input-control"
                      placeholder="Enter your email"
                      id="email"
                      value={email}
                      onChange={this.onChangeLogin}
                      error={errors.email}
                      className={classnames("", {
                        invalid: errors.email || errors.emailNotFound,
                      })}
                    />{" "}
                    <br />
                    <span className="text-danger">
                      {errors.email}
                      {errors.emailNotFound}
                    </span>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label htmlFor="Password">Password</label> <br />
                    <input
                      type="password"
                      className="input-control"
                      placeholder="Enter your password"
                      id="password"
                      value={password}
                      onChange={this.onChangeLogin}
                      error={errors.password}
                      className={classnames("", {
                        invalid: errors.password || errors.passwordIncorrect,
                      })}
                    />{" "}
                    <br />
                    <span className="text-danger">
                      {errors.password}
                      {errors.passwordIncorrect}
                    </span>
                  </div>
                </div>
                <div class="form-row">
             
                <div style={{ marginTop: "30px" }} className="form-btns">
                  <button
              
                    className="bottom-btn left"
                  >
                    Login
                  </button>
                  <p className="form-bottom-text">
                    Don't have an account? click{" "}
                    <span
                      onClick={() => {
                        this.props.history.push("/register");
                      }}
                    >
                      here
                    </span>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ForgetPassword.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(ForgetPassword);
