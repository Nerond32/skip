import React from "react";
import "./Content.css";
import Input from "./Input/Input";
import Output from "./Output/Output";

const Content = () => {
  return (
    <div className="content">
      Hello world from content
      <br />
      <Input />
      <Output />
    </div>
  );
};

export default Content;
