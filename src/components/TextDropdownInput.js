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
import TextDropdown from './TextDropdown';
import PropTypes from 'prop-types';

/**
 * Component to display a Form element for a text dropdown
 */
class TextDropdownInput extends Component {
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
   * @param {Object} value the selection value.
   */
  handleChange(value) {
    this.props.changeHandler(this.props.propName, value);
  }

  /**
   * Render the From element.
   *
   * @return {Object} the From element for a text dropdown.
   */
  render() {
    return (
      <FormGroup row>
        <Label for="{this.props.name}" sm={3}>
          {this.props.label}
        </Label>
        <Col sm={2}>
          <TextDropdown
            name={this.props.name}
            id={this.props.name}
            options={this.props.options}
            value={this.props.value}
            changeHandler={this.handleChange}
          />
        </Col>
      </FormGroup>
    );
  }
}

TextDropdownInput.propTypes = {
  propName: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  name: PropTypes.string,
  value: PropTypes.string,
  changeHandler: PropTypes.func,
};


export default TextDropdownInput;
