import React, { useState } from "react";

function LiveInput() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Live Input Display</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        style={{ padding: "8px", width: "200px" }}
      />

      <p style={{ marginTop: "20px" }}>
        You typed: <strong>{text}</strong>
      </p>
    </div>
  );
}

export default LiveInput;