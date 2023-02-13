import { useEffect, useState } from "react";
import "./../../index.scss";

const Intercection = ({ data }) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (data) {
      setResult(data.join("\r\n"));
    }
  }, [data]);

  return (
    <>
      <div className="input">
        <label htmlFor="bo">B Names (A ma navako)</label>
        <textarea
          id="bo"
          value={result}
          //   onChange={(e) => {
          //     setAInput(e.target.value);
          //   }}
        />
      </div>
    </>
  );
};

export default Intercection;
