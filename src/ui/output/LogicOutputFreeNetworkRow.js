// Copyright 2020 Google LLC
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
import IPUtils from '../../logic/IPUtils';
import PropTypes from 'prop-types';

/**
 * A row for an available or free subnet.
 */
class LogicOutputFreeNetworkRow extends Component {
  /**
   * Render the row.
   *
   * @return {Object} the table row for the network.
   */
  render() {
    return (
      <tr>
        <td>
          {' '}
          {IPUtils.decToDot(this.props.network.netStart)}/
          {this.props.network.mask}
        </td>
        <td> {IPUtils.decToDot(this.props.network.netStart)} </td>
        <td> {IPUtils.decToDot(this.props.network.netEnd)} </td>
        <td> /{this.props.network.mask} </td>
      </tr>
    );
  }
}

LogicOutputFreeNetworkRow.propTypes = {
  network: PropTypes.object,
};

export default LogicOutputFreeNetworkRow;
