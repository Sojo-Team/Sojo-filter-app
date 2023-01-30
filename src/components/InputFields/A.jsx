import React from "react";
import "./../../index.scss";

const A = ({ aInput, setAInput }) => {
  return (
    <div className="input">
      <label htmlFor="a">Input Field A</label>
      <textarea
        id="a"
        value={aInput}
        onChange={(e) => {
          setAInput(e.target.value);
        }}
      />
    </div>
  );
};

export default A;
