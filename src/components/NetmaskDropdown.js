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
 * Component to display an Input element for a dropdown to select netmask values.
 */
class NetmaskDropdown extends Component {
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
   * @param {Object} e the selection event.
   */
  handleChange(e) {
    this.props.changeHandler(Number(e.target.value));
  }

  /**
   *
   * Create the options.
   *
   * @return {Object} the options for the dropdown.
   */
  createOptions = () => {
    const min = this.props.rules.minimum().minimum();
    const max = this.props.rules.maximum().maximum();
    const options = [];

    for (let i = min; i >= max; i--) {
      options.push(<option value={i} key={i}>/{i}</option>);
    }
    return options;
  };

  /**
   * Render the Input element.
   *
   * @return {Object} the Input element for the netmask dropdown.
   */
  render() {
    if (this.props.value === '' || this.props.value === null) {
      return (
        <Input
          type="select"
          name="select"
          id="exampleSelect"
          onChange={this.handleChange}
        >
          {this.createOptions()}
        </Input>
      );
    } else {
      return (
        <Input
          type="select"
          name="select"
          id="exampleSelect"
          onChange={this.handleChange}
          value={this.props.value}
        >
          {this.createOptions()}
        </Input>
      );
    }
  }
}

NetmaskDropdown.propTypes = {
  rules: PropTypes.object,
  value: PropTypes.number,
  changeHandler: PropTypes.func,
};

export default NetmaskDropdown;
