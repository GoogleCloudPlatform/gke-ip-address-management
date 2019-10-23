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

import BaseNetmaskRules from './BaseNetmaskRules';

/**
 * Hardcoded minimum limit for pod ranges
 */
class HardcodedMin {
  /**
   * Return the minimum for the range
   *
   * @return {number} range minimum
   */
  minimum() {
    return 28;
  }
}

/**
 * Hardcoded max limit for pod ranges
 */
class HardcodedMax {
  /**
   * Return the max for the range
   *
   * @return {number} range max
   */
  maximum() {
    return 24;
  }
}


/**
 * Rules for available range of pod netmask options.
 */
class PodNetmastRules extends BaseNetmaskRules {
  /**
   * Constructor.
   */
  constructor() {
    super([new HardcodedMin()], [new HardcodedMax()]);
  }
}

export default PodNetmastRules;
