import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GoogleApiWrapper } from "google-maps-react";
// import "./Navbar.css";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./redux/actions/authActions";

import TopBlock from "./Components/SensorBlocks/TopBlock";
import logo from "./assets/images/logo.png";
import dashboard from "./assets/images/dashboard.png";
import calendar from "./assets/images/calendar.png";
import routes from "./assets/images/routes.png";
import placeholder from "./assets/images/placeholder.png";
import notification from "./assets/images/notification.png";
import fast from "./assets/images/fast.png";
import email from "./assets/images/email.png";
import user from "./assets/images/user.png";
import logout from "./assets/images/logout.png";

import checkMark from "./assets/images/check-mark.png";

import distance from "./assets/images/distance.png";

import location from "./assets/images/location.png";

import alert from "./assets/images/alert.png";
import OilTank from "./assets/images/oil-tank_b.png";
import clock from "./assets/images/clock.png";
import speedometer from "./assets/images/speedometer.png";
import search from "./assets/images/search.png";
import cpu from "./assets/images/cpu.png";
import tank from "./assets/images/oil-tank_b.png";

import DialogueBox from "./Components/SensorBlocks/DialogueBox";

import BlockWrapper from "./Components/SensorBlocks/BlockWrapper";

export const Dialogue = ({ auth, logoutUser }) => {
  let send = useNavigate();
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
            <li className="active">
              <a
                onClick={() => {
                  send("/dashboard");
                }}
                data-toggle="collapse"
                aria-expanded="false"
              >
                <img className="link-icon icon" src={dashboard} />
                Dashboard
              </a>
            </li>

            <li>
              <a
              // onClick={() => {
              //   history.push("/sensors");
              // }}
              >
                {" "}
                <img className="link-icon icon" src={dashboard} />
                Menu 2
              </a>
            </li>
            <li>
              <a
              // onClick={() => {
              //   history.push("/sensors");
              // }}
              >
                {" "}
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
          {/* <button
          type="button"
          id="sidebarCollapse"
          onclick={onclick}
          className="btn btn-primary"
        >
          <i className="fa fa-bars" />
          <span className="sr-only">Toggle Menu</span>
        </button> */}
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
                  send("/profile");
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
                <a className="nav-link" href="">
                  <img className="link-icon icon" src={logout} />
                </a>
              </li>
              {/* <li>
                <button >Logout</button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div id="content" className="p-4 p-md-5">
        {/* {open ? (
          <DialogeBoxComponent key="adsf" sensorData={sensorData} />
        ) : null} */}

        <h2 className="mb-4">Dashboard</h2>

        <div className="row blocks-row">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Important Title
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      34,5646
                    </div>
                  </div>
                  <div class="col-auto">
                    {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Important Title
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      34,5646
                    </div>
                  </div>
                  <div class="col-auto">
                    {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Important Title
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      34,5646
                    </div>
                  </div>
                  <div class="col-auto">
                    {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Important Title
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      34,5646
                    </div>
                  </div>
                  <div class="col-auto">
                    {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row blocks-row ">
          <div className="table-responsive-lg">
            <table class="table ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-blue">
                  <td class="pt-2">
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      class="rounded-circle"
                      alt=""
                    />
                    <div class="pl-lg-5 pl-md-3 pl-1 name">Emilia Kollette</div>
                  </td>
                  <td class="pt-3 mt-1">25 Sep 2020</td>
                  <td class="pt-3">11:00 AM</td>
                  <td class="pt-3">
                    <span class="fa fa-check pl-3"></span>
                  </td>
                </tr>
                <tr className="spacing-row">
                  <td></td>
                </tr>
                <tr class="bg-blue">
                  <td class="pt-2">
                    <img
                      src="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      class="rounded-circle"
                      alt=""
                    />
                    <div class="pl-lg-5 pl-md-3 pl-1 name">Anny Adams</div>
                  </td>
                  <td class="pt-3">26 Sep 2020</td>
                  <td class="pt-3">11:00 AM</td>
                  <td class="pt-3">
                    <span class="fa fa-check pl-3"></span>
                  </td>
                </tr>
                <tr className="spacing-row">
                  <td></td>
                </tr>
                <tr class="bg-blue">
                  <td class="pt-2">
                    <img
                      src="https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      class="rounded-circle"
                      alt=""
                    />
                    <div class="pl-lg-5 pl-md-3 pl-1 name">Arnold Linn</div>
                  </td>
                  <td class="pt-3">26 Sep 2020</td>
                  <td class="pt-3">02:00 PM</td>
                  <td class="pt-3">
                    <span class="fa fa-check pl-3"></span>
                  </td>
                </tr>
                <tr className="spacing-row">
                  <td></td>
                </tr>
                <tr class="bg-blue">
                  <td class="pt-2">
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      class="rounded-circle"
                      alt=""
                    />
                    <div class="pl-lg-5 pl-md-3 pl-1 name">Josh Limosel</div>
                  </td>
                  <td class="pt-3">26 Sep 2020</td>
                  <td class="pt-3">04:00 PM</td>
                  <td class="pt-3">
                    <span class="fa fa-minus pl-3"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
Dialogue.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dialogue);
