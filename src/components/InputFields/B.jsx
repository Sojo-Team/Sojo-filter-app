import React from "react";
import "./../../index.scss";

const B = ({ bInput, setBInput }) => {
  return (
    <div className="input">
      <label htmlFor="b">Input Field B</label>
      <textarea
        id="b"
        value={bInput}
        onChange={(e) => {
          setBInput(e.target.value);
        }}
      />
    </div>
  );
};

export default B;
