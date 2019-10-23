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
 * Mock rule
 */
class TestRule {
  /**
   *
   * Constructor.
   *
   * @param {number} min Hardcoded min.
   * @param {number} max Hardcoded max.
   */
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  /**
   * Calculate the minimum netmask possible.
   *
   * @return {number} minimum netmask possible.
   */
  minimum() {
    return this.min;
  }

  /**
   * Calculate the max netmask possible.
   *
   * @return {number} max netmask possible.
   */
  maximum() {
    return this.max;
  }
}

it('Find min', () => {
  const rule1 = new TestRule(1, 10);
  const rule2 = new TestRule(2, 15);
  const r = new BaseNetmaskRules([rule1, rule2], [rule1, rule2]);
  expect(r.maximum().maximum()).toEqual(15);
  expect(r.minimum().minimum()).toEqual(1);
});
