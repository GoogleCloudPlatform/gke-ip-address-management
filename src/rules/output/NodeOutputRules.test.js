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

import {NodeNetworkRules, ClusterNetworkRules} from './NodeOutputRules';

it('NodeNetworkRules calculates the right value', () => {
  const r1 = new NodeNetworkRules({nodeNetmask: 24});
  expect(r1.maximum()).toEqual(252);
  const r2 = new NodeNetworkRules({nodeNetmask: 16});
  expect(r2.maximum()).toEqual(65532);
});

it('ClusterNetworkRules calculates the right value', () => {
  const r1 = new ClusterNetworkRules({clusterNetmask: 22, nodePodNetmask: 24});
  expect(r1.maximum()).toEqual(4);
  const r2 = new ClusterNetworkRules({clusterNetmask: 20, nodePodNetmask: 24});
  expect(r2.maximum()).toEqual(16);
});
