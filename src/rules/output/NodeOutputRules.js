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

import IPUtils from '../../logic/IPUtils';

/**
 * Rules for the main subnet range based on the subnet size
 */
class NodeNetworkRules {
  /**
   * Constructor.
   *
   * @param {Input} input User input.
   */
  constructor(input) {
    this.input = input;
  }

  /**
   * Returns the maximum number of usable IPs.
   *
   * @return {number} maximum number of usable IPs.
   */
  maximum() {
    const netmask = this.input.nodeNetmask;
    // TODO allow reserving IPs on the Node Network
    return IPUtils.netmaskToUsableIps(netmask) - 4; // GCP reserves 4 ips.
  }

  /**
   * Returns the reference documentation URLs.
   *
   * @return {Array} an Array with a list of URLs.
   */
  ref() {
    return [
      'https://cloud.google.com/vpc/docs/vpc#reserved_ip_addresses_in_every_subnet',
    ];
  }
}

/**
 * Rules for the main subnet range based on the cluster subnet size size
 */
class ClusterNetworkRules {
  /**
   * Constructor.
   *
   * @param {Input} input User input.
   */
  constructor(input) {
    this.input = input;
  }

  /**
   * Returns the maximum number of usable IPs.
   *
   * @return {number} maximum number of usable IPs.
   */
  maximum() {
    const clusterNetmaskIps = IPUtils.netmaskToUsableIps(
        this.input.clusterNetmask,
    );
    const podNetmaskIps = IPUtils.netmaskToUsableIps(this.input.nodePodNetmask);
    return clusterNetmaskIps / podNetmaskIps;
  }

  /**
   * Returns the reference documentation URLs.
   *
   * @return {Array} an Array with a list of URLs.
   */
  ref() {
    return [];
  }
}

/**
 * Rules for the main subnet range based on location type (Regional, zonal, multi-zonal).
 */
class RegionalLocationRules {
  /**
   * Constructor.
   *
   * @param {Input} input User input.
   * @param {number} currentMax Current possible maximum based on upstream rules.
   */
  constructor(input, currentMax) {
    this.input = input;
    this.currentMax = currentMax;
  }

  /**
   * Returns the maximum number of usable IPs.
   *
   * @return {number} maximum number of usable IPs.
   */
  maximum() {
    if (this.input.locationType === 'REGIONAL') {
      return this.currentMax - (this.currentMax % 3);
    } else if (this.input.locationType === 'MULTI_ZONAL') {
      return (
        this.currentMax -
        (this.currentMax % (Number.parseInt(this.input.extraZones) + 1))
      );
    }
    return this.currentMax;
  }

  /**
   * Returns the reference documentation URLs.
   *
   * @return {Array} an Array with a list of URLs.
   */
  ref() {
    return [];
  }
}

/**
 * Rules for the main subnet range based on the aggregate of NodeNetworkRules and ClusterNetworkRules
 */
class NodeOutputRules {
  /**
   * Constructor.
   *
   * @param {Input} input User input.
   */
  constructor(input) {
    this.input = input;
    this.nodeNetworkRules = new NodeNetworkRules(this.input);
    this.clusterNetworkRules = new ClusterNetworkRules(this.input);
  }

  /**
   * Returns the maximum number of usable IPs.
   *
   * @return {number} maximum number of usable IPs.
   */
  maximum() {
    const v1 = this.nodeNetworkRules.maximum();
    const v2 = this.clusterNetworkRules.maximum();

    const regionalLocationRules = new RegionalLocationRules(
        this.input,
      v1 < v2 ? v1 : v2,
    );

    return regionalLocationRules.maximum();
  }

  /**
   * @return{Array} list of details that are affecting the maximum size.
   */
  details() {
    const details = [];
    details.push({
      id: 'subnet_limit',
      text: `The node subnet will limit each cluster to a maximum of ${this.nodeNetworkRules.maximum()} node(s).`,
    });
    details.push({
      id: 'cluster_limit',
      text: `The cluster subnet will limit each cluster to a maximum of ${this.clusterNetworkRules.maximum()} node(s).`,
    });
    if (this.input.locationType === 'REGIONAL') {
      details.push({
        id: 'regional_multiple_limit',
        text: `Nodes in a regional cluster have to be deployed in multiples of three`,
      });
    } else if (this.input.locationType === 'MULTI_ZONAL') {
      details.push({
        id: 'zonal_multiple_limit',
        text: `Nodes in a multi-zonal cluster (with ${
          this.input.extraZones
        } extra zone) have to be deployed in multiples of ${Number.parseInt(
            this.input.extraZones,
        ) + 1}`,
      });
    }

    return details;
  }
}

export default NodeOutputRules;

export {NodeNetworkRules, ClusterNetworkRules};
