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
    const freeRanges = [];
    // Pack the remaining IPs into free ranges
    // var freeDone = false;
    // while (!freeDone) {

    //   var subnet = {
    //     mask : lastMask
    //   }

    //   var fit = this.fit(currentIp, endIp, subnet);
    //   if (fit.fit) {
    //       freeRanges.push({
    //         mask: lastMask,
    //         netStart: currentIp,
    //         netEnd: fit.end
    //     });
    //     currentIp = fit.end + 1;
    //   } else {
    //     freeDone = true;

    //   }
    // }

    return {
      state: 'ok',
      packedNets: packedNets,
      freeRanges: freeRanges,
    };
  }

  /**
   * Tries to fit a subnet between spaceStart and spaceEnd
   * @param {*} spaceStart
   * @param {*} spaceEnd
   * @param {*} currentNet
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
}

export default Packer;
