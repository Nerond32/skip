import React from "react";
import "./Content.less";
import data from "./data";
import Input from "./Input/Input";
import Output from "./Output/Output";
import GenerateButton from "./GenerateButton/GenerateButton";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.generate = this.generate.bind(this);
    this.state = {
      inputs: [],
      scripts: ""
    };
  }

  generate() {
    let tmpScript = "";
  }

  render() {
    return (
      <div>
        <h2>Settings</h2>
        <div className="content">
          {Object.entries(data).map(([key, value]) => (
            <Input key={key} name={value.name} check={value.isChecked} />
          ))}

          <GenerateButton generate={this.generate} />
          <Output text={this.state.script} />
        </div>
      </div>
    );
  }
}

export default Content;
