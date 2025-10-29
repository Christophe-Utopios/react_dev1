import { useState } from "react";

const StateLessComponent = () => {
  const [monPrenom, setMonPrenom] = useState("Toto");
  const [maVariable, setMaVariable] = useState(0);

  const changePrenom = () => {
    setMonPrenom("Titi");
  };

  return (
    <>
      <h1>StatelessComponent</h1>
      <p>Mon prénom : {monPrenom}</p>
      <button onClick={changePrenom}>ChangePrenom</button>
    </>
  );
};

export default StateLessComponent;
