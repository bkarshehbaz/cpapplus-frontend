import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { UpdateProfile, GetProfile } from "../../redux/actions/profileActions";

const machines = [
  {
    name: "Philips DreamStation 1",
    image: "Philips DreamStation 1.png",
  },
  {
    name: "Philips DreamStation 2",
    image: "Philips DreamStation 2.png",
  },
  {
    name: "ResMed AirSense 10",
    image: "ResMed AirSense 10.jpg",
  },
  {
    name: "ResMed AirSense 11",
    image: "ResMed AirSense 11.jpg",
  },
  {
    name: "ResMed S9",
    image: "ResMed S9.jpg",
  },
];

const masks = [
  {
    name: "Philips DreamWear Full Face",
    image: "Philips DreamWear Full Face.jpg",
  },
  {
    name: "Philips DreamWear Nasal",
    image: "Philips DreamWear Nasal.jpg",
  },
  {
    name: "ResMed AirFit F20",
    image: "ResMed AirFit F20.png",
  },
  {
    name: "ResMed AirFit N20",
    image: "ResMed AirFit N20.jpg",
  },
  {
    name: "ResMed AirFit P10",
    image: "ResMed AirFit P10.jpg",
  },
  {
    name: "Philips DreamWear Nasal Pillow",
    image: "Philips DreamWear Nasal Pillow.jpeg",
  },
];

const ContactPofile = ({
  UpdateProfile,
  auth,
  GetProfile,
  profile,
  maskSelected,
  mahcineSelected,
}) => {
  // const [profile, setProfile] = useState("");
  // Profile Fields
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [mask, setMask] = useState("");
  const [machine, setMachine] = useState("");
  const [pressure, setPressure] = useState("");
  const [ahi, setAhi] = useState("");
  const [leaks, setLeaks] = useState("");
  const [usagetime, setUsageTime] = useState("");
  const [nextlevel, setNextLevel] = useState("");
  const [doctor, setDoctor] = useState("");

  useEffect(() => {
    const user = {
      id: auth.user.id,
    };

    GetProfile(user);
  }, [auth.user]);

  useEffect(() => {
    console.log(profile.profile);
    if (profile && profile.profile) {
      // console.log(profile.profile.dob.slice(1, 3));
      setDob(profile.profile.dob);
      setHeight(profile.profile.height);
      setWeight(profile.profile.weight);
      setMask(profile.profile.mask);

      setMachine(profile.profile.machine);
      setPressure(profile.profile.pressure);
      setAhi(profile.profile.ahi);
      setLeaks(profile.profile.leaks);
      setUsageTime(profile.profile.usagetime);
      setNextLevel(profile.profile.nextlevel);
      setDoctor(profile.profile.doctor);
      // set mask and machine images
      mahcineSelected(profile.profile.machine);
      maskSelected(profile.profile.mask);
    }
  }, [profile]);

  const ProfileSubmit = (e) => {
    e.preventDefault();

    const UpdatedProfile = {
      id: auth.user.id,
      name,
      dob,
      height,
      weight,
      mask,
      machine,
      pressure,
      ahi,
      leaks,
      usagetime,
      nextlevel,
      doctor,
    };
    // console.log(UpdatedProfile);
    UpdateProfile(UpdatedProfile);
  };

  return (
    <>
      <form className="AuthForm profile-form col-12 col-md-6 col-lg-6">
        <h1>Profile</h1>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label htmlFor="Email">Machine</label> <br />
            <select
              class="input-control custom-dropdown"
              aria-label="Default select example"
              id="machine"
              value={machine}
              name="machine"
              onChange={(e) => {
                setMachine(e.target.value);

                mahcineSelected(e.target.value);
              }}
            >
              {machine ? null : (
                <option selected value="null">
                  Please select a option{" "}
                </option>
              )}
              {machines
                ? machines.map((item) => (
                    <option value={item.name} image={item.image}>
                      {item.name}
                    </option>
                  ))
                : null}
            </select>
            {/* <input
            type="text"
            className="input-control"
            placeholder="Enter your machine"
            id="machine"
            value={machine}
            name="machine"
            onChange={(e) => {
              setMachine(e.target.value);
            }}
          />{" "} */}
            <br />
            <span className="text-danger">
              {/* {errors && errors.email ? errors.email : null} */}
            </span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label htmlFor="Email">Mask</label> <br />
            <select
              class="input-control custom-dropdown"
              aria-label="Default select example"
              id="mask"
              name="mask"
              value={mask}
              onChange={(e) => {
                setMask(e.target.value);
                maskSelected(e.target.value);
              }}
            >
              {mask ? null : (
                <option selected value="null">
                  Please select a option{" "}
                </option>
              )}

              {masks
                ? masks.map((item) => (
                    <option value={item.name}>{item.name}</option>
                  ))
                : null}
            </select>
            <br />
            <span className="text-danger">
              {/* {errors && errors.email ? errors.email : null} */}
            </span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12 ">
            <label htmlFor="Email">Date of birth</label> <br />
            <input
              type="date"
              className="input-control"
              placeholder="Enter your date of birth"
              id="dob"
              value={dob ? dob.slice(0, 10) : null}
              name="dob"
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />{" "}
            <br />
            <span className="text-danger">
              {/* {errors && errors.email ? errors.email : null} */}
            </span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label htmlFor="Email">Height</label> <br />
            <input
              type="text"
              className="input-control"
              placeholder="Height in cm"
              id="height"
              name="height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />{" "}
            <br />
            <span className="text-danger">
              {/* {errors && errors.email ? errors.email : null} */}
            </span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label htmlFor="Email">Weight</label> <br />
            <input
              type="text"
              className="input-control"
              placeholder="Enter your weight (pounds)"
              id="weight"
              name="weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />{" "}
            <br />
            <span className="text-danger">
              {/* {errors && errors.email ? errors.email : null} */}
            </span>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-12">
            <label htmlFor="Email">Pressure</label> <br />
            <input
              type="text"
              className="input-control"
              placeholder="Enter your pressure"
              id="pressure"
              value={pressure}
              onChange={(e) => {
                setPressure(e.target.value);
              }}
            />{" "}
            <br />
            <span className="text-danger">
              {/* {errors && errors.email ? errors.email : null} */}
            </span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label htmlFor="Email">AHI</label> <br />
            <input
              type="text"
              className="input-control"
              placeholder="Enter your AHI"
              id="ahi"
              value={ahi}
              name="ahi"
              onChange={(e) => {
                setAhi(e.target.value);
              }}
            />{" "}
            <br />
            <span className="text-danger">
              {/* {errors && errors.email ? errors.email : null} */}
            </span>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-12">
            <label htmlFor="Email">Leak</label> <br />
            <input
              type="leaks"
              className="input-control"
              placeholder="Enter your leak"
              id="leaks"
              name="leaks"
              value={leaks}
              onChange={(e) => {
                setLeaks(e.target.value);
              }}
            />{" "}
            <br />
            <span className="text-danger">
              {/* {errors && errors.email ? errors.email : null} */}
            </span>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-12">
            <label htmlFor="Password">Usage Time</label> <br />
            <input
              type="text"
              className="input-control"
              placeholder="Enter your usage time"
              id="usagetime"
              value={usagetime}
              onChange={(e) => {
                setUsageTime(e.target.value);
              }}
            />{" "}
            <br />
            <span className="text-danger">
              {/* {errors && errors.password ? errors.password : null} */}
            </span>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-12">
            <label htmlFor="Password">Doctor</label> <br />
            <input
              type="text"
              className="input-control"
              placeholder="Enter your doctor"
              id="doctor"
              value={doctor}
              onChange={(e) => {
                setDoctor(e.target.value);
              }}
            />{" "}
            <br />
            <span className="text-danger">
              {/* {errors && errors.password ? errors.password : null} */}
            </span>
          </div>
        </div>
        <span className="text-success">
          {profile && profile.success ? profile.success : null}
        </span>
        <div style={{ marginTop: "30px" }} className=" form-btns">
          <button
            type="submit"
            onClick={ProfileSubmit}
            className="bottom-btn right"
          >
            Update Profile
          </button>
        </div>
      </form>
    </>
  );
};
ContactPofile.propTypes = {
  UpdateProfile: PropTypes.func.isRequired,
  GetProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  profile: state.profile,
});
export default connect(mapStateToProps, { UpdateProfile, GetProfile })(
  ContactPofile
);
