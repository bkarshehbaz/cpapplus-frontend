import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from "./Register";
let send = useNavigate();
const registerFunction = () => {
  return <Register send={send} />;
};
export default registerFunction;
