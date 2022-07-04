import React, { Component, useState, useEffect } from "react";

import { connect } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const ForgetPassword = (props) => {
  let send = useNavigate();
  return (
    <section className="register">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="signup-right">
              <form className="AuthForm">
                <img className="form-logo" src="./logo.PNG" alt="" />
                <h1>Reset Password</h1>

                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label htmlFor="Email">Password</label> <br />
                    <input
                      type="password"
                      className="input-control"
                      placeholder="Enter your new password"
                      id="password"
                      // value={email}
                      // onChange={(e) => {
                      //   setEmail(e.target.value);
                      // }}
                    />{" "}
                    <br />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label htmlFor="Email">Re-enter Password</label> <br />
                    <input
                      type="password"
                      className="input-control"
                      placeholder="Enter your new password again"
                      id="password"
                      // value={email}
                      // onChange={(e) => {
                      //   setEmail(e.target.value);
                      // }}
                    />{" "}
                    <br />
                  </div>
                </div>

                <div style={{ marginTop: "30px" }} className=" form-btns">
                  <button
                    type="submit"
                    // onClick={LOGINUser}
                    className="bottom-btn right"
                  >
                    Reset
                  </button>
                  <p className="form-bottom-text">
                    Don't have an acccount? click{" "}
                    <span
                      onClick={() => {
                        send("/register");
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
