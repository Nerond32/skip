import React from "react";
import "./Content.less";
import Input from "./Input/Input";
import Output from "./Output/Output";
import GenerateButton from "./GenerateButton/GenerateButton";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.generate = this.generate.bind(this);
  }
  generate() {
    console.log("SYF");
  }

  render() {
    return (
      <div>
        <h2>Settings</h2>
        <div className="content">
          <Input />
          <GenerateButton generate={this.generate} />
          <Output />
        </div>
      </div>
    );
  }
}

export default Content;
