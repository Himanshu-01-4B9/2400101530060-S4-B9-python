import React, { useState } from "react";

function ShowHide() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Show / Hide Text</h1>

      <button onClick={toggleText}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>

      {isVisible && (
        <p style={{ marginTop: "20px" }}>
          MY TEACHER IS PRASHANT SONI HE IS A VERY NICE TEACHER!
        </p>
      )}
    </div>
  );
}

export default ShowHide;