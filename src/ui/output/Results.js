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
import LogicOutput from './LogicOutput';
import PropTypes from 'prop-types';


/**
 * Class for the results of the calculations
 */
class Results extends Component {
  /**
   * Render the actual results.
   *
   * @return {Object} the results or error message.
   */
  printReslts() {
    if (
      this.props.state.logic &&
      this.props.state.logic.getCombinations() &&
      this.props.state.logic.getCombinations().length > 0
    ) {
      return (
        <LogicOutput
          logic={this.props.state.logic}
          input={this.props.state.input}
        />
      );
    } else {
      return <div> Invalid Input </div>;
    }
  }


  /**
   * Render the results component.
   *
   * @return {Object} the main <div> for the results.
   */
  render() {
    return (
      <div>
        <hr/>
        <h2> Results </h2>
        {this.printReslts()}
      </div>
    );
  }
}

Results.propTypes = {
  state: PropTypes.object,
};

export default Results;
