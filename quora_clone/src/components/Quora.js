import Widget from "./Widget";
import React from "react";
import "../css/Quora.css";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Quora() {
  return (
    <div className="quora">
      <Navbar></Navbar>
      <div className="quora__content">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}
