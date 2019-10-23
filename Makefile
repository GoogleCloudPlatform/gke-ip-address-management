# Copyright 2019 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Make will use bash instead of sh
SHELL := /usr/bin/env bash

ROOT := ${CURDIR}



# All is the first target in the file so it will get picked up when you just run 'make' on its own
all: basefiles check_trailing_whitespace npm-install npm-test

run: npm-install npm-start


.PHONY: basefiles
basefiles:
	@source test/make.sh && basefiles

.PHONY: check_trailing_whitespace
check_trailing_whitespace:
	@source test/make.sh && check_trailing_whitespace

.PHONY: npm-install
npm-install:
	npm install

.PHONY: npm-test
npm-test: export CI=true # This will instruct react-scripts to run in non-interative mode
npm-test:
	npm test

.PHONY: npm-start
npm-start:
	npm start

.PHONY: lint
lint:
	npm run lint

.PHONY: npm-build
npm-build:
	@source build_scripts.sh && npm_build

.PHONY: verify-header
verify-header:
	python test/verify_boilerplate.py
	@echo "\n Test passed - Verified all file Apache 2 headers"