import React from "react";
import "./Content.less";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import data from "./data";
import preScript from "./preScript";
import postScript from "./postScript";
import Input from "./Input/Input";
import Output from "./Output/Output";
import GenerateButton from "./GenerateButton/GenerateButton";
import DownloadButton from "./DownloadButton/DownloadButton";
import { updateScript } from "../../redux/actions";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.download = this.download.bind(this);
    this.generate = this.generate.bind(this);
    this.changedInputSelection = this.changedInputSelection.bind(this);
    this.state = {
      inputs: data
    };
  }

  download() {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      `data:text/plain;charset=utf-8,${encodeURIComponent(this.props.script)}`
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
    this.props.updateScript(script);
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
          <br />
          <GenerateButton generate={this.generate} />
          <Output text={this.props.script} />
          <DownloadButton download={this.download} />
        </div>
      </div>
    );
  }
}

Content.defaultProps = {
  script: preScript + postScript
};

Content.propTypes = {
  script: PropTypes.string,
  updateScript: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { script: state.script };
}

const mapDispatchToProps = {
  updateScript
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
