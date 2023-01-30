import React from "react";
import "./../../index.scss";

const Intercection = ({ data }) => {
  return (
    <>
      <div className="input">
        <label htmlFor="bo">B Names</label>
        <textarea
          id="bo"
          value={data}
          //   onChange={(e) => {
          //     setAInput(e.target.value);
          //   }}
        />
      </div>
    </>
  );
};

export default Intercection;
