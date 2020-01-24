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
import {Form, FormGroup, Input, Label, Col} from 'reactstrap';
import TextDropdown from '../../components/TextDropdown';
import NetmaskInput from '../../components/NetmaskInput';
import TextDropdownInput from '../../components/TextDropdownInput';
import InputRules from '../../rules/input/InputRules';
import PropTypes from 'prop-types';

const locationTypeOptions = [
  {value: 'ZONAL', text: 'Zonal'},
  {value: 'MULTI_ZONAL', text: 'Multi - zonal'},
  {value: 'REGIONAL', text: 'Regional'},
];

const extraZoneOptions = [
  {value: '1', text: '1'},
  {value: '2', text: '2'},
  {value: '3', text: '3'},
];

const masterBlockOptions = [
  {value: 'PUBLIC', text: 'Public Master'},
  {value: 'SHARE', text: 'Share one Master CIDR across all clusters'},
  {value: 'UNIQUE', text: 'Create a Unique Master CIDR for each cluster'},
  {value: 'DEFAULT', text: 'Use default values for the Master CIDR block'},
];

const nodePodNetmaskOptions = [
  {value: '28', text: '8 pods (/28)', max: 8},
  {value: '27', text: '9 to 16 pods (/27)', max: 16},
  {value: '26', text: '17 to 32 pods (/26)', max: 32},
  {value: '25', text: '33 to 64 pods (/25)', max: 64},
  {value: '24', text: '65 to 110 pods (/24)', max: 110},
];

/**
 * User inputted parameters
 */
class Parameters extends Component {
  /**
   * Constructor.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.handleChangeNetwork = this.handleChangeNetwork.bind(this);

    this.handleLocationTypeChange = this.handleLocationTypeChange.bind(this);
    this.handleExtraZonesChange = this.handleExtraZonesChange.bind(this);
    this.handlePropChange = this.handlePropChange.bind(this);
  }


  /**
   * Handle selecting a different location type.
   *
   * @param {Object} newValue the new value.
   */
  handleLocationTypeChange(newValue) {
    this.props.handleUpdateInput(
        Object.assign({}, this.props.input, {
          locationType: newValue,
        }),
    );
  }


  /**
   * Handle selecting a different number of extra zones (used for zonal clusters only).
   *
   * @param {Object} newValue the new value.
   */
  handleExtraZonesChange(newValue) {
    this.props.handleUpdateInput(
        Object.assign({}, this.props.input, {
          extraZones: newValue,
        }),
    );
  }


  /**
   * Handle changing the network.
   *
   * @param {Object} e the change event.
   */
  handleChangeNetwork(e) {
    this.props.handleUpdateInput(
        Object.assign({}, this.props.input, {
          network: e.target.value,
        }),
    );
  }

  /**
   * Handle changing an arbitrary property.
   *
   * @param {string} propName the name of the property to update.
   * @param {Object} newValue the new value.
   */
  handlePropChange(propName, newValue) {
    this.props.handleUpdateInput(
        Object.assign({}, this.props.input, {
          [propName]: newValue,
        }),
    );
  }

  /**
   * Render the widgets for the parameters.
   *
   * @return {Object} the Form element that contains the parameters.
   */
  render() {
    let extraZonesLabel;
    let extraZonesInput;

    if (this.props.input.locationType === 'MULTI_ZONAL') {
      extraZonesLabel = (
        <Label for="extra-zones-select" sm={2}>
          Extra Zones
        </Label>
      );
      extraZonesInput = (
        <Col sm={1}>
          <TextDropdown
            name="extra-zones-select"
            id="extra-zones-select"
            options={extraZoneOptions}
            value={this.props.input.extraZones}
            changeHandler={this.handleExtraZonesChange}
          />
        </Col>
      );
    } else {
      extraZonesLabel = ' ';
      extraZonesInput = ' ';
    }

    return (
      <Form>
        <FormGroup row>
          <Label for="location-type-select" sm={3}>
            Location Type
          </Label>
          <Col sm={2}>
            <TextDropdown
              name="location-type-select"
              id="location-type-select"
              options={locationTypeOptions}
              value={this.props.input.locationType}
              changeHandler={this.handleLocationTypeChange}
            />
          </Col>
          {extraZonesLabel}
          {extraZonesInput}
        </FormGroup>

        <FormGroup row>
          <Label for="network" sm={3}>
            {' '}
            Available Network{' '}
          </Label>{' '}
          <Col sm={2}>
            <Input
              name="network"
              id="network"
              type="text"
              placeholder="10.0.0.0"
              value={this.props.input.network}
              onChange={this.handleChangeNetwork}
            />{' '}
          </Col>{' '}
        </FormGroup>

        <NetmaskInput
          name="available-netmask"
          label="Available Netmask"
          rules={this.props.inputRules.getAvailableNetmaskRules()}
          changeHandler={this.handlePropChange}
          value={this.props.input.netmask}
          propName="netmask"
        />

        <NetmaskInput
          name="node-netmask"
          label="Node Subnet mask"
          rules={this.props.inputRules.getNodeRules()}
          changeHandler={this.handlePropChange}
          value={this.props.input.nodeNetmask}
          propName="nodeNetmask"
        />

        <NetmaskInput
          name="cluster-netmask"
          label="Cluster Subnet mask"
          rules={this.props.inputRules.getClusterRules()}
          changeHandler={this.handlePropChange}
          value={this.props.input.clusterNetmask}
          propName="clusterNetmask"
        />

        <TextDropdownInput
          name="node-pod-netmask-select"
          label="Maximum Pods (Pod Netmask)"
          options={nodePodNetmaskOptions}
          changeHandler={this.handlePropChange}
          value={this.props.input.nodePodNetmask}
          propName="nodePodNetmask"
        />

        <NetmaskInput
          name="service-netmask"
          label="Service Subnet mask"
          rules={this.props.inputRules.getServiceRules()}
          changeHandler={this.handlePropChange}
          value={this.props.input.serviceNetmask}
          propName="serviceNetmask"
        />

        <TextDropdownInput
          name="master-block-select"
          label="Master CIDR block"
          options={masterBlockOptions}
          changeHandler={this.handlePropChange}
          value={this.props.input.masterNetwork}
          propName="masterNetwork"
        />
      </Form>
    );
  }
}

Parameters.propTypes = {
  input: PropTypes.object,
  inputRules: PropTypes.instanceOf(InputRules),
  handleUpdateInput: PropTypes.func,
};

export default Parameters;

export {nodePodNetmaskOptions};
