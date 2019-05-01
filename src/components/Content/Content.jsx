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
    this.changedInputSelection = this.changedInputSelection.bind(this);
    this.state = {
      inputs: data,
      scripts: ""
    };
  }

  generate() {
    let tmpScript = "";
  }

  changedInputSelection(name, value) {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [name]: { ...this.state.inputs[name], isChecked: value }
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Settings</h2>
        <div className="content">
          {Object.entries(this.state.inputs).map(([key, value]) => (
            <Input
              key={key}
              id={key}
              name={value.name}
              isChecked={value.isChecked}
              changedInputSelection={this.changedInputSelection}
            />
          ))}
          <GenerateButton generate={this.generate} />
          <Output text={this.state.script} />
        </div>
      </div>
    );
  }
}

export default Content;
