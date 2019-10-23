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

import BaseNetmaskRules from '../BaseNetmaskRules';

/**
 * Hardcoded minimum limit for node ranges
 */
class HardcodedMin {
  /**
   * Return the minimum for the range
   *
   * @return {number} range minimum
   */
  minimum() {
    return 29;
  }

  /**
   * Returns the reference documentation URL.
   *
   * @return {string} reference URL.
   */
  ref() {
    return 'https://cloud.google.com/vpc/docs/vpc#manually_created_subnet_ip_ranges';
  }
}

/**
 * Maximum limit for node ranges, based on available netmask
 */
class NetmaskMax {
  /**
   * Constructor.
   *
   * @param {Object} state Current state.
   */
  constructor(state) {
    this.state = state;
  }

  /**
   * Return the max for the range
   *
   * @return {number} range max
   */
  maximum() {
    return this.state.netmask;
  }
}

/**
 * Rules for available range of node netmask options.
 */
class NodeRules extends BaseNetmaskRules {
  /**
   * Constructor.
   *
   * @param {Object} state Current state.
   */
  constructor(state) {
    super([new HardcodedMin()], [new NetmaskMax(state)]);
  }
}

export default NodeRules;
