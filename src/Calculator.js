// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, {Component} from 'react';
import './App.css';
import {Container, Row} from 'reactstrap';

import Parameters from './ui/input/Parameters';
import Results from './ui/output/Results';
import Logic from './logic/Logic';

import InputRules from './rules/input/InputRules';
import StateButtons from './components/StateButtons';

/**
 * Main component for the UI. It's the glue logic between the input, business logic, and output.
 */
class Calculator extends Component {
  /**
   * Constructor.
   *
   * @param {*} props Properties.
   */
  constructor(props) {
    super(props);

    // TODO Need to use better defaults
    const input = {
      network: '10.0.0.0',
      netmask: 16,
      nodeNetmask: 29,
      clusterNetmask: 24,
      serviceNetmask: 24,
      nodePodNetmask: '24',
      masterNetwork: 'PUBLIC',
      locationType: 'ZONAL',
      extraZones: 1,
    };
    const logic = new Logic(input);
    const inputRules = new InputRules(input);

    this.state = {
      input: input,
      logic: logic,
      inputRules: inputRules,
    };

    this.handleUpdateInput = this.handleUpdateInput.bind(this);

    this.handleUploadConfig = this.handleUploadConfig.bind(this);
  }

  /**
   * Handle uploading a complete new config text.
   *
   * @param {string} configText the new config text.
   */
  handleUploadConfig(configText) {
    const newInput = JSON.parse(configText);
    this.handleUpdateInput(newInput);
  }

  /**
   * Handle updating the input from the UI.
   *
   * @param {Object} input the new input.
   */
  handleUpdateInput(input) {
    let logic;
    if (this.validateInput(input)) {
      logic = new Logic(input);
    }
    this.setState({
      input: input,
      logic: logic,
      inputRules: new InputRules(input),
    });
  }

  /**
   * Validates that the input is valid.
   *
   * @param {Object} input Input structure.
   * @return {boolean} True if valid, false otherwise.
   */
  validateInput(input) {
    if (!Number.isInteger(input.netmask)) {
      return false;
    }
    return true;
  }

  /**
   * Render the div element that holds most of the application.
   *
   * @return {Object} the div element with the application.
   */
  render() {
    return (
      <div className="workspace">
        <br />
        <Container>
          <Row>
            <StateButtons
              input={JSON.stringify(this.state.input, null, ' ')}
              handleUploadConfig={this.handleUploadConfig}
            />
          </Row>
        </Container>
        <br />
        <Parameters
          input={this.state.input}
          inputRules={this.state.inputRules}
          handleUpdateInput={this.handleUpdateInput}
        />

        <hr />
        <h2>Input</h2>
        <pre>{JSON.stringify(this.state.input, null, ' ')}</pre>

        <Results state={this.state} />
      </div>
    );
  }
}

export default Calculator;
