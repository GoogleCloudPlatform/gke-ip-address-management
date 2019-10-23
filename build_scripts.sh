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


function npm_build() {
if [ -z "${IPAM_HOST_URL}" ]; then 
        echo "Building distribution to be run locally"        
        npm run build
else
        echo "Building distribution to be deployed at ${IPAM_HOST_URL}"        
        jq -c --arg hosturl "$IPAM_HOST_URL" '. + { "homepage": $hosturl }' package.json > package.json.new
        cp package.json package.json.org
        cp package.json.new package.json
        rm package.json.new
        npm run build
        cp package.json.org package.json
fi
}
