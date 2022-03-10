import { React, useState, useEffect } from "react";
import "./Count.css";

const Count = (props) => <h2 className="count">{props.children}</h2>;

export default Count;

let HourNum = new Date().getHours();

let MathFactor;
