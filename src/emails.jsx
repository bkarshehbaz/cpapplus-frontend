// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, Redirect } from "react-router-dom";
// // import "./Navbar.css";
// import { FaGithub } from "react-icons/fa";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "./redux/actions/authActions";

// import logo from "./assets/images/logo.png";
// import dashboard from "./assets/images/dashboard.png";
// import calendar from "./assets/images/calendar.png";
// import routes from "./assets/images/routes.png";
// import placeholder from "./assets/images/placeholder.png";
// import notification from "./assets/images/notification.png";
// import fast from "./assets/images/fast.png";
// import email from "./assets/images/email.png";
// import user from "./assets/images/user.png";
// import logout from "./assets/images/logout.png";

// import checkMark from "./assets/images/check-mark.png";

// import distance from "./assets/images/distance.png";

// import location from "./assets/images/location.png";

// import alert from "./assets/images/alert.png";

// import clock from "./assets/images/clock.png";
// import speedometer from "./assets/images/speedometer.png";
// import search from "./assets/images/search.png";

// import tank from "./assets/images/oil-tank_b.png";
// import cpu from "./assets/images/cpu.png";
// export const Emails = (props) => {
//   const [sidebar, SetSideBar] = useState(false);
//   const [sensors, SetSensors] = useState([]);
//   const [inputSensor, SetInputSensor] = useState("");
//   const [sensorName, SetSensorName] = useState("");
//   const [sensorLat, SetSensorLat] = useState("");
//   const [sensorLan, SetSensorLan] = useState("");
//   const [sensorRadius, SetSensorRadius] = useState("");
//   const ToggleSidebar = () => {
//     if (sidebar) {
//       document.getElementById("sidebar").style.margin = "0px 0px 0px  -250px";
//       document.getElementById("sidebarCollapse").style.margin = "0% 0% 0% 0%";
//     } else {
//       document.getElementById("sidebar").style.margin = "0px";
//       document.getElementById("sidebarCollapse").style.margin = "0% 0% 0% 22%";
//     }
//     SetSideBar(!sidebar);
//   };
//   const onLogoutClick = (e) => {
//     // console.log("click called");
//     e.preventDefault();
//     // console.log("props", props);
//     props.logoutUser();
//   };

//   useEffect(() => {
//     axios
//       .post("http://localhost:5000/api/emails/all", {
//         email: props.auth.user.email,
//       })
//       .then((response) => {
//         console.log("all response", response.data.sensors);
//         try {
//           SetSensors(response.data);
//         } catch (e) {}
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const AddSensor = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:5000/api/emails/add", {
//         email: props.auth.user.email,
//         receiver: inputSensor,
//       })
//       .then((response) => {
//         try {
//           SetSensors(response.data.receivers);
//         } catch (e) {}
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const DeleteSensor = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:5000/api/emails/delete", {
//         email: props.auth.user.email,
//         receiver: e.target.value,
//       })
//       .then((response) => {
//         try {
//           SetSensors(response.data.receivers);
//         } catch (e) {}
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   // console.log("sensors", sensors);
//   return (
//     <div className="wrapper d-flex align-items-stretch">
//       <nav id="sidebar">
//         <button
//           type="button"
//           id="sidebarCollapse"
//           onClick={ToggleSidebar}
//           className="btn btn-primary"
//         >
//           <i className="fa fa-bars" />
//           <span className="sr-only">Toggle Menu</span>
//         </button>
//         <div className="p-4 pt-5">
//           <img src={logo} />
//           <h5 className="nav-head">Navigations</h5>
//           <ul className="list-unstyled components mb-5">
//             <li className="active">
//               <a
//                 onClick={() => {
//                   history.push("/dashboard");
//                 }}
//                 data-toggle="collapse"
//                 aria-expanded="false"
//               >
//                 <img className="link-icon icon" src={dashboard} />
//                 Dashboard
//               </a>
//             </li>

//             <li>
//               <a
//                 onClick={() => {
//                   history.push("/sensors");
//                 }}
//               >
//                 {" "}
//                 <img className="link-icon icon" src={cpu} />
//                 Devices
//               </a>
//             </li>
//           </ul>
//           <div className="footer">
//             <p></p>
//           </div>
//         </div>
//       </nav>
//       {/* Page Content  */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           {/* <button
//           type="button"
//           id="sidebarCollapse"
//           onclick={onclick}
//           className="btn btn-primary"
//         >
//           <i className="fa fa-bars" />
//           <span className="sr-only">Toggle Menu</span>
//         </button> */}
//           <button
//             className="btn btn-dark d-inline-block d-lg-none ml-auto"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <i className="fa fa-bars" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="nav navbar-nav ml-auto">
//               <li className="nav-item active">
//                 <a className="nav-link" href="#">
//                   <img className="link-icon icon" src={email} />
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link">
//                   <img className="link-icon icon" src={user} />
//                 </a>
//               </li>
//               <li onClick={onLogoutClick} className="nav-item">
//                 <a onClick={onLogoutClick} className="nav-link" href="">
//                   <img className="link-icon icon" src={logout} />
//                 </a>
//               </li>
//               {/* <li>
//                 <button >Logout</button>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div id="content" className="p-4 p-md-6">
//         <h2 className="mb-4">Receivers</h2>
//         {/* <h6>Add/Delete Your Sensors Here !</h6> */}
//         <div className="row">
//           <form>
//             <div class="form-group">
//               <label for="exampleInputEmail1">Email</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 aria-describedby="emailHelp"
//                 placeholder="Reciever's Email"
//                 onChange={(e) => {
//                   SetInputSensor(e.target.value);
//                 }}
//               />
//               <br />
//             </div>

//             <button onClick={AddSensor} type="submit" class="btn btn-primary">
//               Add Receiver
//             </button>
//           </form>
//         </div>
//         <br />
//         {sensors
//           ? sensors.map((item) => (
//               <div className="sensors-wrapper d-flex">
//                 <p>
//                   <span>Receiver :</span> {item.email}
//                 </p>
//                 <br />

//                 <button
//                   value={item.email}
//                   onClick={DeleteSensor}
//                   className="btn btn-primary"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))
//           : null}
//       </div>
//     </div>
//   );
// };
// Emails.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { logoutUser })(Emails);
