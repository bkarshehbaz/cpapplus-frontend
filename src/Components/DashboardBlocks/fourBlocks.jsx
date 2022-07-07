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

const FourBlocks = () => {
  return (
    <div className="col-12 col-md-6 col-lg-6">
      <div className="blocks-wrapper">
        <div className="block-outer col-md-6 col-lg-6 col-12">
          <div className="block ">
            <h4 className="block-title">Apnea Hypopnea Index</h4>
            <div className="info-block">
              <p className="p-bold">1.26</p>
              <p className="p-small font-red">
                <img src="./red-up.png" alt="" />
                24.0
              </p>
            </div>
          </div>
        </div>
        <div className="block-outer col-md-6 col-lg-6 col-12">
          <div className="block">
            <h4 className="block-title">95% Pressure</h4>
            <div className="info-block">
              <p className="p-bold">1.26</p>
              <p className="p-small font-green">
                <img src="./green-down.png" alt="" />
                24.0
              </p>
            </div>
          </div>
        </div>

        <div className="block-outer col-md-6 col-lg-6 col-12">
          <div className="block ">
            <h4 className="block-title">95% Leak Rate</h4>
            <div className="info-block">
              <p className="p-bold">1.26</p>
              <p className="p-small font-green">
                <img src="./green-up.png" alt="" />
                24.0
              </p>
            </div>
          </div>
        </div>
        <div className="block-outer col-md-6 col-lg-6 col-12">
          <div className="block">
            <h4 className="block-title">Daily Usage</h4>
            <div className="info-block">
              <p className="p-bold">11h 55m</p>
              <p className="p-small font-red">
                <img src="./red-up.png" alt="" />
                2h 56m
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
FourBlocks.propTypes = {
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
  FourBlocks
);
