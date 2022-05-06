import React from "react";
import { ChangeText } from "./ChangeText";
import CheckboxWithLabel from "./CheckboxWithLabel";

function App() {
  return (
    <div>
      <CheckboxWithLabel labelOn={"on"} labelOff={"off"} />
      <ChangeText />
    </div>
  );
}

export default App;
