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

import IPUtils from './IPUtils';

it('netStart calculation', () => {
  const dec = IPUtils.dotToDec('192.168.3.10');
  expect(IPUtils.decToDot(IPUtils.netStart(dec, 24))).toEqual('192.168.3.0');
  expect(IPUtils.decToDot(IPUtils.netStart(dec, 16))).toEqual('192.168.0.0');
});

it('dot notation to decimal', () => {
  expect(IPUtils.dotToDec('0.0.0.3')).toEqual(3);
  expect(IPUtils.dotToDec('0.0.1.50')).toEqual(306);
  expect(IPUtils.dotToDec('254.3.1.50')).toEqual(4261609778);
});

it('decimal notation to dot', () => {
  expect(IPUtils.decToDot(3)).toEqual('0.0.0.3');
  expect(IPUtils.decToDot(306)).toEqual('0.0.1.50');
  expect(IPUtils.decToDot(4261609778)).toEqual('254.3.1.50');
});

it('netEnd calculation', () => {
  const dec = IPUtils.dotToDec('104.129.196.0');
  expect(IPUtils.netEnd(dec, 24)).toEqual(IPUtils.dotToDec('104.129.196.255'));
  expect(IPUtils.netEnd(dec, 16)).toEqual(IPUtils.dotToDec('104.129.255.255'));
});

it('Netmask calculation', () => {
  expect(IPUtils.netmaskToDecimal(24)).toEqual(
      IPUtils.dotToDec('255.255.255.0'),
  );
  expect(IPUtils.netmaskToDecimal(8)).toEqual(IPUtils.dotToDec('255.0.0.0'));
});

it('Find Largest Mask', () =>{
  expect(IPUtils.findLargestMask(0, 255)).toEqual(24);
  expect(IPUtils.findLargestMask(0, 256)).toEqual(24);
  expect(IPUtils.findLargestMask(0, 257)).toEqual(23);
  expect(IPUtils.findLargestMask(0, 120)).toEqual(25);
});
