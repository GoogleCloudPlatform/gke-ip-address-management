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

import ClusterRules from './cluster/ClusterRules';
import NodeRules from './node/NodeRules';
import ServiceRules from './service/ServiceRules';
import AvailableNetmaskRules from './AvailableNetmaskRules';
import PodNetmastRules from './PodNetmaskRules';

/**
 * Set of rules used to display the input UI
 */
class InputRules {
  /**
   * Constructor.
   *
   * @param {Object} input Current input.
   */
  constructor(input) {
    this.clusterRules = new ClusterRules(input);
    this.nodeRules = new NodeRules(input);
    this.serviceRules = new ServiceRules(input);
    this.availableNetmaskRules = new AvailableNetmaskRules();
    this.podRules = new PodNetmastRules();
  }

  /**
   * Returns the rules currently in effect for the cluster netmask.
   *
   * @return {ClusterRules} rules currently in effect
   */
  getClusterRules() {
    return this.clusterRules;
  }

  /**
   * Returns the rules currently in effect for the node netmask.
   *
   * @return {NodeRules} rules currently in effect
   */
  getNodeRules() {
    return this.nodeRules;
  }


  /**
   * Returns the rules currently in effect for the service netmask.
   *
   * @return {ServiceRules} rules currently in effect
   */
  getServiceRules() {
    return this.serviceRules;
  }

  /**
   * Returns the rules currently in effect for the available netmask.
   *
   * @return {AvailableNetmaskRules} rules currently in effect
   */
  getAvailableNetmaskRules() {
    return this.availableNetmaskRules;
  }

  /**
   * Returns the rules currently in effect for the pod netmask.
   *
   * @return {PodNetmaskRules} rules currently in effect
   */
  getPodRules() {
    return this.podRules;
  }
}

export default InputRules;
