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

/* eslint no-console: ["off"] */
import Logic from './Logic';

const argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

/**
 * Evaluates the input provided to the application, and outputs the result.
 *
 * @param {string} text Text input provided by the user
 */
function evaluateInput(text) {
  console.log(text);
  const input = JSON.parse(text);
  const logic = new Logic(input);
  console.log(JSON.stringify(logic.getCombinations()));
}


if ('input' in argv && argv['input'] != '-') {
  // Read from file
  const fs = require('fs');

  const contents = fs.readFileSync(argv['input'], 'utf8');
  evaluateInput(contents);
} else {
  // Read from STDIN

  const stdin = process.stdin;
  const inputChunks = [];
  stdin.setEncoding('utf8');

  stdin.on('data', function(chunk) {
    inputChunks.push(chunk);
  });

  stdin.on('end', function() {
    const input = inputChunks.join('');
    evaluateInput(input);
  });
}
