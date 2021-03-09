import React from "react";

function App() {
  const [headingText, setHeading] = React.useState("Hello");
  function handleClick() {
    setHeading("Submitted");
  }

  const [mouseOver, setMouse] = React.useState(false);

  function isMouseOver() {
    setMouse(true);
  }

  function isMouseOut() {
    setMouse(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={isMouseOver}
        onMouseOut={isMouseOut}
        style={{ backgroundColor: mouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
