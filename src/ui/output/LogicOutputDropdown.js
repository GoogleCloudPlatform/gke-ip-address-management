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
import '../../App.css';
import {Input, Label, FormGroup, Col} from 'reactstrap';
import Logic from '../../Logic';
import PropTypes from 'prop-types';

/**
 * Dropdown for the different combinations that were calculated
 */
class LogicOutputDropdown extends Component {
  /**
   * Constructor.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   *
   * Create the options, one per combination
   *
   * @return {Object} the options for the dropdown.
   */
  createOptions = () => {
    const combinations = this.props.logic.getCombinations();

    const options = [];
    combinations.forEach(function(element, index) {
      options.push(
          <option value={index} key={index}>Number of clusters: {index + 1} </option>
      );
    });
    return options;
  };

  /**
   * Handle selecting a different combination.
   *
   * @param {Object} e the selection event.
   */
  handleChange(e) {
    this.props.changeHandler(Number(e.target.value));
  }

  /**
   * Render the dropdown.
   *
   * @return {Object} the dropdown for the combinations that were calculated.
   */
  render() {
    return (
      <div>
        <FormGroup row>
          <Label for="combination" sm={2}>
            {' '}
            Available Combinations{' '}
          </Label>
          <Col sm={2}>
            <Input
              type="select"
              name="combination"
              id="exampleSelect"
              onChange={this.handleChange}
            >
              {' '}
              {this.createOptions()}{' '}
            </Input>{' '}
          </Col>{' '}
        </FormGroup>
      </div>
    );
  }
}

LogicOutputDropdown.propTypes = {
  logic: PropTypes.instanceOf(Logic),
  input: PropTypes.object,
  changeHandler: PropTypes.func,
};

export default LogicOutputDropdown;
