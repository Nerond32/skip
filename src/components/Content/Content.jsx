import React from "react";
import "./Content.less";
import data from "./data";
import preScript from "./preScript";
import postScript from "./postScript";
import Input from "./Input/Input";
import Output from "./Output/Output";
import GenerateButton from "./GenerateButton/GenerateButton";
import DownloadButton from "./DownloadButton/DownloadButton";

class Content extends React.Component {
  constructor() {
    super();
    this.download = this.download.bind(this);
    this.generate = this.generate.bind(this);
    this.changedInputSelection = this.changedInputSelection.bind(this);
    this.state = {
      inputs: data,
      script: preScript
    };
  }

  download() {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      `data:text/plain;charset=utf-8,${encodeURIComponent(this.state.script)}`
    );
    element.setAttribute("download", "startupScript.ps1");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  generate() {
    const inputValues = Object.values(this.state.inputs);
    const script =
      inputValues.reduce(
        (prevCode, { isChecked, code }) =>
          isChecked ? `${prevCode + code}\n` : prevCode,
        `${preScript}\n`
      ) + postScript;
    this.setState({
      script
    });
  }

  changedInputSelection(name) {
    this.setState(prevState => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: {
            ...prevState.inputs[name],
            isChecked: !prevState.inputs[name].isChecked
          }
        }
      };
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
          <DownloadButton download={this.download} />
        </div>
      </div>
    );
  }
}

export default Content;
