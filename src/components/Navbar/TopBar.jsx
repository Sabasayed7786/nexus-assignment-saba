import React from "react";

const TopBar = () => {
  const topBarStyle = {
    backgroundColor: "gray",
    color: "white",
    padding: "10px 0",
    textAlign: "center",
  };

  return (
    <div style={topBarStyle}>
      Trained Aesop consultations are available to provide bespoke skin care advice. Book a video consultation.
    </div>
  );
};

export default TopBar;
