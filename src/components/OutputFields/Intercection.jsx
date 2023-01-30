import React from "react";
import "./../../index.scss";

const Intercection = ({ commonNames }) => {
  return (
    <>
      <div className="input">
        <label htmlFor="common">Common Names</label>
        <textarea
          id="common"
          value={commonNames}
          //   onChange={(e) => {
          //     setAInput(e.target.value);
          //   }}
        />
      </div>
    </>
  );
};

export default Intercection;
