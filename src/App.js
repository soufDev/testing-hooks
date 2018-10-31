import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

const ButtonStyled = styled.button`
  display: inline-block;
  color: #111;
  font-size: 1em;
  margin: 1em;
  width: 5em;
  padding: 0.25em 0.5em;
  border: 2px solid #30eccdbb;
  border-radius: 5px;
  background-color: #30eccdbb;
`;

const TomatoButton = styled(ButtonStyled)`
  color: #fff;
  border-color: tomato;
  background-color: tomato;
`;

function Button() {
  let [value, setValue] = useState(0);
  function handleOnClick() {
    setValue((value + 1) % 6);
  }
  return <TomatoButton onClick={handleOnClick}>{value}</TomatoButton>;
}
function App() {
  return (
    <div>
      <header className="App-header">
        <Button />
      </header>
    </div>
  );
}

export default App;
