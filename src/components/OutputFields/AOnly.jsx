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
        <label htmlFor="ao">A Names (B ma navako)</label>
        <textarea
          id="ao"
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
