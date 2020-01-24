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

/**
 * Pack subnets as efficient as possible withtin a given address space
 */
class Packer {
  /**
   * Packs the provided subnets into the provided space.
   * If packing the subnets is not possible, it returns an object with 'state': 'bad'
   *
   * @param {*} space
   * @param {*} subnets
   * @return {Object} object with the packed subnets.
   */
  pack(space, subnets) {
    const sortedSubnets = this.sortSubnets(subnets);
    let currentIp = IPUtils.netStart(IPUtils.dotToDec(space.net), space.mask);

    const endIp = IPUtils.netEnd(currentIp, space.mask);
    const packedNets = [];
    for (let i = 0; i < sortedSubnets.length; i++) {
      const subnet = sortedSubnets[i];
      const fit = this.fit(currentIp, endIp, subnet);
      if (fit.fit) {
        packedNets.push({
          name: subnet.name,
          mask: subnet.mask,
          netStart: currentIp,
          netEnd: fit.end,
          description: subnet.description,
          vpcName: subnet.vpcName,
          subnetRangeName: subnet.subnetRangeName,
          type: subnet.type,
        });
        currentIp = fit.end + 1;
      } else {
        // Couldn't fit
        return {
          state: 'bad',
        };
      }
    }

    const freeRanges=this.findEmptyRanges(space, currentIp);
    return {
      state: 'ok',
      packedNets: packedNets,
      freeRanges: freeRanges,
    };
  }

  /**
   * Tries to fit a subnet between spaceStart and spaceEnd
   * @param {number} spaceStart
   * @param {number} spaceEnd
   * @param {number} currentNet
   * @return {Object} object with the result
   */
  fit(spaceStart, spaceEnd, currentNet) {
    const currentNetEnd = IPUtils.netEnd(spaceStart, currentNet.mask);
    if (currentNetEnd > spaceEnd) {
      return {
        fit: false,
        end: currentNetEnd,
      };
    }
    return {
      fit: true,
      end: currentNetEnd,
    };
  }

  /**
   * Sorts the subnets from largest to smallest.
   * @param {Array} subnets Subnets to sort.
   * @return {Array} sorted subnets.
   */
  sortSubnets(subnets) {
    return subnets.sort(function(a, b) {
      if (a.mask === b.mask) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      } else {
        return a.mask - b.mask;
      }
    });
  }

  /**
   * Finds the largest free CIDR blocks in a subnet, starting from a particular IP.
   *
   * @param {Object} space source address space.
   * @param {number} firstFreeIpDec first free IP.
   * @return {Array} sorted free subnet.
   */
  findEmptyRanges(space, firstFreeIpDec) {
    const startIp = IPUtils.netStart(IPUtils.dotToDec(space.net), space.mask);
    const endIp = IPUtils.netEnd(startIp, space.mask);
    const maxIp = startIp + (endIp - firstFreeIpDec);
    const freeNets = [];
    let currentIp = startIp;
    for (let mask = space.mask; mask < 32; mask ++ ) {
      const subnet = {
        mask: mask,
      };
      const fit = this.fit(currentIp, maxIp, subnet);
      if (fit.fit) {
        freeNets.unshift({
          mask: mask,
          netStart: endIp - fit.end +startIp,
          netEnd: endIp - currentIp +startIp,
        });
        currentIp = fit.end + 1;
      }
    }
    return freeNets;
  }
}

export default Packer;
