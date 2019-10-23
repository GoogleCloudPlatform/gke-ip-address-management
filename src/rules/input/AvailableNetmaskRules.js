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
 * Rule that define the minimum available netmask
 */
class HardcodedMin {
  /**
   * Calculate the minimum netmask possible.
   *
   * @return {number} minimum netmask possible.
   */
  minimum() {
    return 29;
  }
}

/**
 * Rule that define the maximum available netmask
 */
class HardcodedMax {
  /**
   * Calculate the maximum netmask possible.
   *
   * @return {number} maximum netmask possible.
   */
  maximum() {
    return 8;
  }
}

/**
 * Rules that define the available netmasks to show
 */
class AvailableNetmaskRules extends BaseNetmaskRules {
  /**
   *
   * Constructor.
   */
  constructor() {
    super([new HardcodedMin()], [new HardcodedMax()]);
  }
}

export default AvailableNetmaskRules;
