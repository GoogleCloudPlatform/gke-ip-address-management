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

import Packer from './Packer';

/**
 * Object to encapsulate the business logic for doing IPAM for GKE clusters.
 */
class Logic {
  /**
   * Constructor.
   *
   * @param {*} input Input provided by the user.
   */
  constructor(input) {
    // Calculate clusters, using Packer
    const packer = new Packer();
    const validCombinations = [];
    const space = {
      net: input.network,
      mask: input.netmask,
    };
    let ok = true;
    let count = 1;
    while (ok && count < 1001) {
      const networks = [];
      const targetNumberLength = count.toString().length;
      for (let j = 1; j <= count; j++) {
        networks.push({
          mask: input.nodeNetmask,
          name: 'node-' + this.pad(targetNumberLength, j),
          vpcName: 'vpc-' + this.pad(targetNumberLength, j),
          subnetRangeName: 'N/A',
          type: 'PRIMARY',
          description:
            'Main VPC range for node-' + this.pad(targetNumberLength, j),
        });

        networks.push({
          mask: input.clusterNetmask,
          name: 'cluster-' + this.pad(targetNumberLength, j),
          vpcName: 'vpc-' + this.pad(targetNumberLength, j),
          subnetRangeName: 'cluster-' + this.pad(targetNumberLength, j),
          type: 'SECONDARY',
          description:
            'Secondary range for VPC node-' +
            this.pad(targetNumberLength, j) +
            ' (for pods)',
        });

        networks.push({
          mask: input.serviceNetmask,
          name: 'service-' + this.pad(targetNumberLength, j),
          vpcName: 'vpc-' + this.pad(targetNumberLength, j),
          subnetRangeName: 'service-' + this.pad(targetNumberLength, j),
          type: 'SECONDARY',
          description:
            'Secondary range for VPC node-' +
            this.pad(targetNumberLength, j) +
            ' (for services)',
        });

        if (input.masterNetwork === 'UNIQUE') {
          networks.push({
            mask: 28,
            name: 'master-' + this.pad(targetNumberLength, j),
            vpcName: 'N/A',
            subnetRangeName: 'N/A',
            type: 'MANAGED',
            description:
              'IP range for managed VPC for master(s) for cluster node-' +
              this.pad(targetNumberLength, j),
          });
        }
      }

      if (input.masterNetwork === 'SHARE') {
        networks.push({
          mask: 28,
          name: 'master',
          vpcName: 'N/A',
          subnetRangeName: 'N/A',
          type: 'MANAGED',
          description:
            'Shared IP range for managed VPC for master(s) for all clusters',
        });
      }

      const packerResults = packer.pack(space, networks);
      if (packerResults.state === 'ok') {
        validCombinations.push({
          networks: packerResults.packedNets,
          freeRanges: packerResults.freeRanges,
        });
      } else {
        ok = false;
      }

      count++;
    }

    this.combinations = validCombinations;
  }

  /**
   * Pads the number to a target length using zeros.
   *
   * @param {number} targetLength number of digits to pad to.
   * @param {string} numberToPad number to pad.
   * @return {string} padded number.
   */
  pad(targetLength, numberToPad) {
    return numberToPad.toString().padStart(targetLength, '0');
  }

  /**
   * Returns the rules used for cluster netmask calculations.
   *
   * @return {*} the cluster rules.
   */
  getClusterRules() {
    return this.clusterRules;
  }

  /**
   * Returns the rules used for node netmask calculations.
   *
   * @return {*} the node rules.
   */
  getNodeRules() {
    return this.nodeRules;
  }

  /**
   * Returns the rules used for service netmask calculations.
   *
   * @return {*} the service rules.
   */
  getServiceRules() {
    return this.serviceRules;
  }

  /**
   * Returns the viable combinations.
   *
   * @return {*} the viable combinations.
   */
  getCombinations() {
    return this.combinations;
  }
}

export default Logic;
