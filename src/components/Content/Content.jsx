import React from "react";
import "./Content.less";
import data from "./data";
import preScript from "./preScript";
import Input from "./Input/Input";
import Output from "./Output/Output";
import GenerateButton from "./GenerateButton/GenerateButton";
import DownloadButton from "./DownloadButton/DownloadButton";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.download = this.download.bind(this);
    this.generate = this.generate.bind(this);
    this.changedInputSelection = this.changedInputSelection.bind(this);
    this.state = {
      inputs: data,
      scripts: preScript
    };
  }

  download() {
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(this.state.scripts)
    );
    element.setAttribute("download", "startupScript.ps1");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  generate() {
    let tmpScript = preScript + "\n";
    Object.entries(this.state.inputs).map(([key, value]) => {
      if (value.isChecked) {
        tmpScript += value.code + "\n";
      }
    });
    this.setState({
      scripts: tmpScript
    });
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
          <Output text={this.state.scripts} />
          <DownloadButton download={this.download} />
        </div>
      </div>
    );
  }
}

export default Content;
