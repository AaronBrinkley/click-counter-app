import React from "react";
import { store, view } from 'react-easy-state'; 
import "./Title.css";

const Title = (props) => <h1 className="title">{props.children}</h1>;

export default Title;
