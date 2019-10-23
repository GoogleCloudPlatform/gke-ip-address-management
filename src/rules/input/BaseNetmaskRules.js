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

const reducerMax = (accumulator, currentValue) =>
  accumulator == null || currentValue.maximum() > accumulator.maximum()
    ? currentValue
    : accumulator;

const reducerMin = (accumulator, currentValue) =>
  accumulator == null || currentValue.maximum() < accumulator.maximum()
    ? currentValue
    : accumulator;

/**
 * Base class for the rules that define the maximum and minimum netmasks to show
 */
class BaseNetmaskRules {
  /**
   *
   * Constructor.
   *
   * @param {Object} minRules
   * @param {Object} maxRules
   */
  constructor(minRules, maxRules) {
    this.minRules = minRules;
    this.maxRules = maxRules;
  }

  /**
   * Calculate the minimum netmask possible.
   *
   * @return {number} minimum netmask possible.
   */
  minimum() {
    return this.minRules.reduce(reducerMin);
  }

  /**
   * Calculate the max netmask possible.
   *
   * @return {number} max netmask possible.
   */
  maximum() {
    return this.maxRules.reduce(reducerMax);
  }
}

export default BaseNetmaskRules;
