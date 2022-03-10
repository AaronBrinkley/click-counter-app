import React from "react";
import "./Wrapper.css";

export const Wrapper = (props) => {
  var Result = props.CountNum;

  function addCount() {
    Result++;

    props.setCountNum(Result);
  }

  function subtractCount() {
    Result--;

    props.setCountNum(Result);
  }

  return (
    <div className="wrapper">
      {props.children}
      <button className="btn btn--alt" onClick={addCount}>
        +
      </button>
      <button className="btn" onClick={subtractCount}>
        -
      </button>
    </div>
  );
};
