import React from "react";
import rainyday from "../assets/rainyday.png";
export default function Header() {
  return (
    <div
      style={{
        width: "800px",
        height: "100px",
        backgroundColor: "#0a5658",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img style={{ width: "10%" }} src={rainyday} />
      <p
        style={{
          marginLeft: "5px",
          fontSize: "25px",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Wheather App
      </p>
    </div>
  );
}
