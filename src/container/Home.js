import React from "react";
import Card from "../component/Card";
import Header from "../component/Header";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#0a5658",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      home here
      <Card />
    </div>
  );
}
