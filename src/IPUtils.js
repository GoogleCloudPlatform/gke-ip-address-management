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

/**
 * Utilities to manipulate IPs.
 */
class IPUtils {
  /**
   * Converts an IP address from decimal to dot notation.
   *
   * @param {number} address address in decimal notation.
   * @return {string} address in dot notation.
   */
  static decToDot(address) {
    const part1 = address & 255;
    const part2 = (address >> 8) & 255;
    const part3 = (address >> 16) & 255;
    const part4 = (address >> 24) & 255;
    return part4 + '.' + part3 + '.' + part2 + '.' + part1;
  }

  /**
   * Converts an IP address from dot to decimal notation.
   *
   * @param {string} address address in dot notation.
   * @return {number} address in decimal notation.
   */
  static dotToDec(address) {
    const octets = address.match(/(\d+)/g);
    let total = 0;
    for (const i in octets) {
      if (Object.prototype.hasOwnProperty.call(octets, i)) {
        const mul = 2 ** ((3 - i) * 8);
        total += octets[i] * mul;
      }
    }
    return total;
  }

  /**
   * Calculate the last IP of a network with a particular netmask.
   * @param {number} networkIp network IP.
   * @param {number} netmask netwask for the network.
   * @return {number} last IP of the network.
   */
  static netEnd(networkIp, netmask) {
    // Logical OR between the address and the NOT netmask (bits flipped).
    const netmaskDec = 2 ** (32 - netmask) - 1;
    return this.fixSigned(networkIp | netmaskDec);
  }

  /**
   * Calculate the first IP of a network with a particular netmask.
   * @param {number} networkIp network IP.
   * @param {number} netmask netwask for the network.
   * @return {number} first IP of the network.
   */
  static netStart(networkIp, netmask) {
    // Logical AND between the address and the netmask.
    const netmaskDec = 4294967295 - (2 ** (32 - netmask) - 1);
    return this.fixSigned(networkIp & netmaskDec);
  }

  /**
 * Find the largest viable netmask between to IPs.
 *
 * @param {number} currentIp start IP.
 * @param {number} endIp end IP.
 * @return {number} the largest mask between the start and end IPs.
 */
  static findLargestMask(currentIp, endIp) {
    const remaining = endIp - currentIp;
    let currentBits = 0;
    while (currentBits < 32) {
      const ips = 2**currentBits;
      if (remaining <= ips) {
        return 32 - currentBits;
      }
      currentBits ++;
    }
    return NaN; // ???
  }

  /**
   * Converts a netmask into a decimal value (bits turned on).
   *
   * @param {number} netmask netmask value (from 0 to 32)
   * @return {number} decimal value of netmask in decimal format
   */
  static netmaskToDecimal(netmask) {
    const v1 = 4294967295; // (2 ** 32) - 1
    const v2 = 2 ** (32 - netmask) - 1;
    return this.fixSigned(v1 ^ v2);
  }

  /**
   * Deals with the fact that in JS bitwise operations
   * 32 bit SIGNED numbers are used, so there's a possible overflow.
   *
   * @param {number} signed number in SIGNED format.
   * @return {number} unsigned number
   */
  static fixSigned(signed) {
    if (signed < 0) {
      let ret = signed & 2147483647;
      ret += 2147483648;
      return ret;
    }
    return signed;
  }

  /**
   * Calculates the number of usable IPs.
   *
   * @param {number} netmask network netmask.
   * @return {number} number of usable IPs.
   */
  static netmaskToUsableIps(netmask) {
    return 2 ** (32 - netmask);
  }
}

export default IPUtils;
