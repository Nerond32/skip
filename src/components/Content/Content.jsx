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
      <div>
        <h2>Settings</h2>
        <div className="content">
          <Input />
          <GenerateButton />
          <Output />
        </div>
      </div>
    );
  }
}

export default Content;
