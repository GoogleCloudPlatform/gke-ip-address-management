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
import LogicOutputDropdown from './LogicOutputDropdown';
import LogicOutputNetworkRow from './LogicOutputNetworkRow';
import {Table} from 'reactstrap';
import NodeOutputRules from '../../rules/output/NodeOutputRules';
import ServiceOutputRules from '../../rules/output/ServiceOutpuRules';
import PodOutputRules from '../../rules/output/PodOutputRules';
import Logic from '../../Logic';
import PropTypes from 'prop-types';

/**
 * Container object for outputting the results of the calculation logic.
 */
class LogicOutput extends Component {
  /**
   * Constructor.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    const output = {
      combinationIndex: 0,
    };

    this.state = {
      output: output,
    };

    this.handleUpdateOutput = this.handleUpdateOutput.bind(this);

    this.handleChangeCombination = this.handleChangeCombination.bind(this);
  }
  /**
   *
   * Create the detail.
   *
   * @param {Object} nodeOutputRules rules that were used to compute the output.
   * @return {Object} the details for the rules.
   */
  createDetail = (nodeOutputRules) => {
    const details = [];

    const nodeDetails = nodeOutputRules.details();
    nodeDetails.forEach((detail) => {
      details.push(<div key={detail.id}>{detail.text}</div>);
    });

    return details;
  };

  /**
   *
   * Create the rows.
   *
   * @return {Object} the details rows.
   */
  createRows = () => {
    const logic = this.props.logic;
    const combination = logic.getCombinations()[
        this.state.output.combinationIndex
    ];
    const networks = combination.networks;
    const rows = [];

    networks.forEach((network) => {
      rows.push(<LogicOutputNetworkRow key={network.name} network={network} />);
    });

    return rows;
  };

  /**
   * Handle the selection of a different combination to be displayed.
   *
   * @param {number} combinationIndex The index of the combinations to be displayed.
   */
  handleChangeCombination(combinationIndex) {
    this.handleUpdateOutput(
        Object.assign({}, this.state.output, {
          combinationIndex: combinationIndex,
        })
    );
  }

  /**
   * Update the output.
   *
   * @param {object} output The updated output.
   */
  handleUpdateOutput(output) {
    this.setState({
      output: output,
    });
  }

  /**
   * Render the main output component.
   *
   * @return {Object} the main <div> for the output.
   */
  render() {
    const nodeOutputRules = new NodeOutputRules(this.props.input);
    const serviceOutputRules = new ServiceOutputRules(this.props.input);
    const podOutputRules = new PodOutputRules(this.props.input);

    return (
      <div>
        <div>
          <b> Summary </b> <br />
          With the current configuration, up to{' '}
          {this.props.logic.getCombinations().length} isolated clusters can be
          created. <br />
          Each cluster will suppport: <br />
          Up to {nodeOutputRules.maximum()} node(s) per cluster. <br />
          Up to {serviceOutputRules.maximum()} service(s) per cluster. <br />
          Up to {podOutputRules.maximum()} pods per node. <br />
        </div>
        <div>
          <b>Details</b>
          <br />
          {this.createDetail(nodeOutputRules)}
        </div>
        <LogicOutputDropdown
          logic={this.props.logic}
          changeHandler={this.handleChangeCombination}
        />{' '}
        <Table>
          <tbody>
            <tr>
              <th> Network </th>
              <th> Start </th>
              <th> End </th>
              <th> Name </th>
              <th> VPC Name </th>
              <th> Subnet Range Name </th>
              <th> Subnet Range Type </th>
              <th> Description </th>
            </tr>
            {this.createRows()}
          </tbody>
        </Table>{' '}
      </div>
    );
  }
}


LogicOutput.propTypes = {
  logic: PropTypes.instanceOf(Logic),
  input: PropTypes.object,
};

export default LogicOutput;
