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
import {Input} from 'reactstrap';
import PropTypes from 'prop-types';

/**
 * Component to display an Input element for a text dropdown
 */
class TextDropdown extends Component {
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
   * Handle selecting a different item.
   *
   * @param {Object} e the selection event.
   */
  handleChange(e) {
    this.props.changeHandler(e.target.value);
  }

  /**
   *
   * Create the options.
   *
   * @return {Object} the options for the dropdown.
   */
  createOptions = () => {
    const options = [];
    this.props.options.forEach((s) => {
      options.push(<option value={s.value} key={s.value}>{s.text}</option>);
    });
    return options;
  };

  /**
   * Render the Input element.
   *
   * @return {Object} the Input element for a text dropdown.
   */
  render() {
    if (this.props.value === '' || this.props.value === null) {
      return (
        <Input
          type="select"
          name={this.props.name}
          id={this.props.id}
          onChange={this.handleChange}
        >
          {this.createOptions()}
        </Input>
      );
    } else {
      return (
        <Input
          type="select"
          name={this.props.name}
          id={this.props.id}
          onChange={this.handleChange}
          value={this.props.value}
        >
          {this.createOptions()}
        </Input>
      );
    }
  }
}


TextDropdown.propTypes = {
  id: PropTypes.string,
  options: PropTypes.array,
  name: PropTypes.string,
  value: PropTypes.string,
  changeHandler: PropTypes.func,
};

export default TextDropdown;
