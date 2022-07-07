import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GoogleApiWrapper } from "google-maps-react";
// import "./Navbar.css";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./redux/actions/authActions";
import FourBlocks from "./Components/DashboardBlocks/fourBlocks";
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

import ContactProfile from "./Components/Profile/contactPofile";

export const Dialogue = ({ auth, logoutUser }) => {
  let send = useNavigate();
  const [sidebar, SetSidebar] = useState(true);

  const [machineImage, SetMachineImage] = useState("");
  const [maskImage, SetMaskImage] = useState("");
  const ToggleSidebar = () => {
    if (sidebar === true) {
      document.getElementById("sidebar").style.marginLeft = "0px";
    } else {
      document.getElementById("sidebar").style.marginLeft = "-250px";
    }
    SetSidebar(!sidebar);
  };

  const mahcineSelected = (data) => {
    console.log("machine", data);
    SetMachineImage(data);
  };

  const maskSelected = (data) => {
    console.log("mask", data);
    SetMaskImage(data);
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
      <nav className="navbar navbar-expand-lg ">
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

          <div
            className="cursor-pointer"
            onClick={() => {
              send("/dashboard");
            }}
          >
            <img src="logoWhite.png" className="logo-navbar" alt="" />
          </div>
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

        <h2 className="mb-4">
          Hello, {auth && auth.user && auth.user.name ? auth.user.name : null}
        </h2>

        <div className="row blocks-row">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 next-event-heading">
                      Next Event:
                    </div>
                    <ul>
                      <li>
                        July 17th, 2022, 02:00 PM - Appointment with Dr. Bkar at
                        45 Street, New York, NY
                      </li>
                      <li>July 21st, 2022, Filter resupply shipment</li>
                      <li>August 05th, Mask resupply shipment</li>
                    </ul>
                  </div>
                  <div class="col-auto">
                    {/* <i class="fas fa-calendar fa-2x text-gray-300"></i> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-12">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 next-event-heading">
                  Selected Machine :
                </div>
                <div class="row no-gutters align-items-center images-container">
                  <img
                    src={machineImage + ".jpg"}
                    className="top-block-images machine"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-12">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 next-event-heading">
                  Selected Mask:
                </div>
                <div class="row no-gutters align-items-center images-container">
                  <img
                    src={maskImage + ".jpg"}
                    className="top-block-images machine"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Below blocks starts here  */}
        <div className="row form-blocks-flex">
          <ContactProfile
            mahcineSelected={mahcineSelected}
            maskSelected={maskSelected}
          />
          <FourBlocks />
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
