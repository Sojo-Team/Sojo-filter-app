import { useEffect, useState } from "react";
import "./../../index.scss";

const Intercection = ({ data }) => {
  const [result, setResult] = useState([]);

  return (
    <>
      <div className="input">
        <label htmlFor="bo">B Names (A ma navako)</label>
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
