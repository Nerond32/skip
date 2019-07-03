import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import data from './data';
import preScript from './preScript';
import postScript from './postScript';
import Input from './Input/Input';
import Output from './Output/Output';
import * as actions from '../../redux/actions';
import Button from '../Assets/Button';

const Content = ({ script, updateScript }) => {
  const [inputs, setInputs] = useState(data);
  const download = () => {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${encodeURIComponent(script)}`
    );
    element.setAttribute('download', 'startupScript.ps1');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const generate = () => {
    const inputValues = Object.values(inputs);
    const formattedScript =
      inputValues.reduce(
        (prevCode, { isChecked, code }) =>
          isChecked ? `${prevCode + code}\n` : prevCode,
        `${preScript}\n`
      ) + postScript;
    updateScript(formattedScript);
  };

  const changedInputSelection = name => {
    setInputs(prevState => {
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
  };

  return (
    <div>
      <div className="content">
        {Object.entries(inputs).map(([key, value]) => (
          <Input
            key={key}
            id={key}
            name={value.name}
            isChecked={value.isChecked}
            changedInputSelection={changedInputSelection}
          />
        ))}
        <br />
        <Button onClick={generate}>Generate</Button>
        <Output text={script} />
        <Button onClick={download}>Download</Button>
      </div>
    </div>
  );
};

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
  updateScript: actions.updateScript
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
