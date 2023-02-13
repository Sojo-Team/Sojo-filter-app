import { useEffect, useState } from "react";
import "./../../index.scss";

const Intercection = ({ commonNames }) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (commonNames) {
      setResult(commonNames.split(",").join("\r\n"));
      // alert(typeof commonNames);
    }
  }, [commonNames]);

  return (
    <>
      <div className="input">
        <label htmlFor="common">Common Names</label>
        <textarea
          id="common"
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
