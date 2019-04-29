import React from "react";
import "./Content.css";
import Input from "./Input/Input";
import Output from "./Output/Output";
import GenerateButton from "./GenerateButton/GenerateButton";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.generate = this.generate.bind(this);
  }
  generate() {}

  render() {
    return (
      <div className="content">
        <h2>Settings</h2>
        <br />
        <Input />
        <GenerateButton />
        <Output />
      </div>
    );
  }
}

export default Content;
