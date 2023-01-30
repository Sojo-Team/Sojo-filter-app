import React, { useState } from "react";
import A from "./InputFields/A";
import B from "./InputFields/B";
import Intercection from "./OutputFields/Intercection";
import AOnly from "./../components/OutputFields/AOnly";
import BOnly from "./../components/OutputFields/BOnly";
import {
  getDuplicatingValues,
  getNamesFromA,
  getNamesFromB,
} from "./../helper/main";
import "./../index.scss";

const App = () => {
  const [aInput, setAInput] = useState("");
  const [bInput, setBInput] = useState("");
  const [commonNames, setCommonNames] = useState("");
  const [aNames, setANames] = useState("");
  const [bNames, setBNames] = useState("");

  const getSame = () => {
    const res = getDuplicatingValues(aInput.split("\n"), bInput.split("\n"));
    setCommonNames(res.toString());
  };

  const getANames = () => {
    const res = getNamesFromA(aInput.split("\n"), bInput.split("\n"));
    setANames(res);
  };

  const getBNames = () => {
    const res = getNamesFromB(aInput.split("\n"), bInput.split("\n"));
    setBNames(res);
  };

  return (
    <>
      <div className="main-input">
        <div className="inputWrapper">
          <A aInput={aInput} setAInput={setAInput} />
          <B bInput={bInput} setBInput={setBInput} />
        </div>
        <button
          onClick={() => {
            getSame();
            getANames();
            getBNames();
          }}
        >
          Generate
        </button>

        <div className="inputWrapper">
          <Intercection commonNames={commonNames} />
          <AOnly data={aNames} />
          <BOnly data={bNames} />
        </div>
      </div>
    </>
  );
};

export default App;
