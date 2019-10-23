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
import {FormGroup, Label, Col} from 'reactstrap';
import NetmaskDropdown from './NetmaskDropdown';
import PropTypes from 'prop-types';


/**
 * Component to display an FormGroup element that contains a dropdown to select netmask values.
 */
class NetmaskInput extends Component {
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
   * Handle selecting a different value.
   *
   * @param {Object} value the selected value.
   */
  handleChange(value) {
    this.props.changeHandler(this.props.propName, value);
  }

  /**
   * Render the FormGroup element.
   *
   * @return {Object} the FormGroup element that contains the netmask dropdown.
   */
  render() {
    return (
      <FormGroup row>
        <Label for="{this.props.name}" sm={3}>
          {this.props.label}
        </Label>
        <Col sm={2}>
          <NetmaskDropdown
            name={this.props.name}
            rules={this.props.rules}
            changeHandler={this.handleChange}
            value={this.props.value}
          />
        </Col>
      </FormGroup>
    );
  }
}

NetmaskInput.propTypes = {
  rules: PropTypes.object,
  value: PropTypes.number,
  label: PropTypes.string,
  name: PropTypes.string,
  propName: PropTypes.string,
  changeHandler: PropTypes.func,
};

export default NetmaskInput;
