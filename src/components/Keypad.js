import React from "react"; // Code Keypad Component Here

function password() {
  console.log("Entering password...");
}

function Keypad() {
  return (
    <div>
      <input type="password" onChange={password}></input>
    </div>
  );
}

export default Keypad;
