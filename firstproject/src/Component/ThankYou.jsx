import React, { useState } from "react";

function ThankYou() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      
      {/* <button
        onClick={() => setShowMessage(true)}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Click Me
      </button> */}
      <button onClick={() => setShowMessage(!showMessage)}>
      {showMessage ? "Hide Message" : "Show Message"}
     </button>

      {showMessage && (
        <h2 style={{ marginTop: "20px" }}>
          Thank you sir for this grateful learning 🙏
        </h2>
      )}

    </div>
  );
}

export default ThankYou;