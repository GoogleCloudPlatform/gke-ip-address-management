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
import IPUtils from '../../IPUtils';
import PropTypes from 'prop-types';

/**
 * A row for a particular subnet definition
 */
class LogicOutputNetworkRow extends Component {
  /**
   * Pretty format the subnet type.
   * @param {type} type The subnet type.
   * @return {string} subnet type text.
   */
  subnetTypeText(type) {
    if (type === 'PRIMARY') {
      return 'Primary';
    } else if (type === 'SECONDARY') {
      return 'Secondary';
    } else if (type === 'MANAGED') {
      return 'Google Managed';
    }
    return 'N/A';
  }

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
        <td> {this.props.network.name} </td>
        <td> {this.props.network.vpcName} </td>
        <td> {this.props.network.subnetRangeName} </td>
        <td> {this.subnetTypeText(this.props.network.type)} </td>
        <td> {this.props.network.description} </td>
      </tr>
    );
  }
}

LogicOutputNetworkRow.propTypes = {
  network: PropTypes.object,
};

export default LogicOutputNetworkRow;
