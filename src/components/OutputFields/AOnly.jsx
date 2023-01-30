import React from "react";
import "./../../index.scss";

const Intercection = ({ data }) => {
  return (
    <>
      <div className="input">
        <label htmlFor="ao">A Names</label>
        <textarea
          id="ao"
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
