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
import IPUtils from './IPUtils';

it('Ok, with a single one', () => {
  const p = new Packer();
  const result = p.pack(
      {
        net: '10.0.0.1',
        mask: 8,
      },
      [
        {
          name: 'test',
          mask: 16,
        },
      ],
  );
  expect(result.state).toEqual('ok');
  expect(result.packedNets.length).toEqual(1);
  expect(result.packedNets[0].name).toEqual('test');

  expect(IPUtils.decToDot(result.packedNets[0].netStart)).toEqual('10.0.0.0');
  expect(IPUtils.decToDot(result.packedNets[0].netEnd)).toEqual('10.0.255.255');
});

it('Ok, with a two subnets', () => {
  const p = new Packer();
  const result = p.pack(
      {
        net: '10.0.0.1',
        mask: 8,
      },
      [
        {
          name: 'test 1',
          mask: 16,
        },
        {
          name: 'test 2',
          mask: 16,
        },
      ],
  );
  expect(result.state).toEqual('ok');
  expect(result.packedNets.length).toEqual(2);
  expect(result.packedNets[0].name).toEqual('test 1');
  expect(IPUtils.decToDot(result.packedNets[0].netStart)).toEqual('10.0.0.0');

  expect(result.packedNets[1].name).toEqual('test 2');
  expect(IPUtils.decToDot(result.packedNets[1].netStart)).toEqual('10.1.0.0');
});

it('Test sort (largest to smallest)', () => {
  const subnets = [
    {
      name: 'small 2',
      mask: 16,
    },
    {
      name: 'small 1',
      mask: 16,
    },
    {
      name: 'large 2',
      mask: 8,
    },
    {
      name: 'mid 1',
      mask: 12,
    },
    {
      name: 'large 1',
      mask: 8,
    },
  ];
  const p = new Packer();
  const sortedSubnets = p.sortSubnets(subnets);
  expect(sortedSubnets[0].name).toEqual('large 1');
  expect(sortedSubnets[1].name).toEqual('large 2');
  expect(sortedSubnets[2].name).toEqual('mid 1');
  expect(sortedSubnets[3].name).toEqual('small 1');
  expect(sortedSubnets[4].name).toEqual('small 2');
});

it('Bad, with a single one', () => {
  const p = new Packer();
  const result = p.pack(
      {
        net: '10.0.0.1',
        mask: 24,
      },
      [
        {
          name: 'test',
          mask: 16,
        },
      ],
  );
  expect(result.state).toEqual('bad');
});


// //////// Internal

it('check fit', () => {
  const p = new Packer();
  expect(
      p.fit(IPUtils.dotToDec('192.168.0.1'),
          IPUtils.dotToDec('192.168.0.255'), {
            mask: 25,
          }).fit,
  ).toEqual(true);
  expect(
      p.fit(IPUtils.dotToDec('192.168.0.1'),
          IPUtils.dotToDec('192.168.0.255'), {
            mask: 24,
          }).fit,
  ).toEqual(true);
  expect(
      p.fit(IPUtils.dotToDec('192.168.0.1'),
          IPUtils.dotToDec('192.168.0.255'), {
            mask: 23,
          }).fit,
  ).toEqual(false);
});


it('Find single free range', () =>{
  const p = new Packer();
  const result= p.findEmptyRanges({
    net: '192.168.0.1',
    mask: 24,
  }, IPUtils.dotToDec('192.168.0.192'));
  expect(result.length).toEqual(1);
  expect(result[0].mask).toEqual(26);
  expect(IPUtils.decToDot(result[0].netStart)).toEqual('192.168.0.192');
  expect(IPUtils.decToDot(result[0].netEnd)).toEqual('192.168.0.255');
});

it('Find 2 free ranges', () =>{
  const p = new Packer();
  const result= p.findEmptyRanges({
    net: '192.168.0.1',
    mask: 24,
  }, IPUtils.dotToDec('192.168.0.160'));
  expect(result.length).toEqual(2);
  expect(result[0].mask).toEqual(27);
  expect(IPUtils.decToDot(result[0].netStart)).toEqual('192.168.0.160');
  expect(IPUtils.decToDot(result[0].netEnd)).toEqual('192.168.0.191');

  expect(result[1].mask).toEqual(26);
  expect(IPUtils.decToDot(result[1].netStart)).toEqual('192.168.0.192');
  expect(IPUtils.decToDot(result[1].netEnd)).toEqual('192.168.0.255');
});
