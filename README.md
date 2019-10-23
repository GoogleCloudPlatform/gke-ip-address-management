# GKE IP Address Management

A tool to do IP Address Management for VPC-native GKE(Google Kubernetes Engine) clusters.

## Introduction

This tool provides an easy and interactive way to model the IP Address requirement to create [VPC-native GKE clusters using alias IP addresses](https://cloud.google.com/kubernetes-engine/docs/how-to/alias-ips).

## Architecture

This application is a React single page application. The application has no backend requirements, and can be run locally or hosted in any standard web server.

## Prerequisites

### Tools

To build and run the tool locally, Node.js and npm are required. Both tools can be installed by most popular package managers in Unix-like operating systems.
Alternatively, native installers for Node.js are available from the Node.js site [downloads](https://nodejs.org/en/download/). Node.js installers include the required `npm` tool.
Additionally, `jq` is required to build a distribution to deploy on a webserver. `jq` can be downloaded from the official [website](https://stedolan.github.io/jq/), but is normally installed using the native package manager of the platform you're running (such as `apt-get` or `yum`). Any reasonable recent version of `jq` would suffice. The process has been tested with version 1.5.

### Versions

Any reasonable modern version of Node.js and npm should suffice to build and run the tool. It has been tested with node version `8.6.0` and npm version `5.4.2`.

## Running

The tool can be run locally by executing:

    make run

This will install the required node dependancies and start the developement server. The developement service will listen on [http://localhost:3000/](http://localhost:3000/).

Alternatively you can just execute npm directly:

    npm install
    npm start

## Deployment

The application can be deployed to a webserver. To create a optimized production build, run:

    make npm-build

Simply copy the files located inside the `build` directory and serve from the root of a web server.

### Deployment from a different root URL

To create a build that is served out of URL that is not a the root of the domain, pass the base url as an environment variable before building:

    export IPAM_HOST_URL=https://mydomain.com/gke-ipam/
    make npm-build

Copy the resulting files from the `build` directory to the webserver at the previously designated path.

## CLI

A CLI is provided in the `src` directory. It currently takes the input in JSON format. For example:

    {
        "network": "10.0.0.0",
        "netmask": "16",
        "nodeNetmask": "29",
        "clusterNetmask": "24",
        "serviceNetmask": "24",
        "nodePodNetmask": "24",
        "masterNetwork": "PUBLIC",
        "locationType": "ZONAL",
        "extraZones": "1"
    }

The input can be passed from a file using `--input=`:

    ./gke-ipam.js --input=test.tmp

The input can be passed from `stdin`:

    cat test.tmp | ./gke-ipam.js

## Developing

See [CONTRIBUTING](CONTRIBUTING.md) for details on Contribuiting to the project.

### Testing

We use `jest` to run automated testing. During development it is useful to have `jest` running.
constantly and monitoring changes to the files:

    npm test

### Code Quality and Format

We use `eslint` for code quality. During development it's use full to run `eslint` periodically to catch any.
issues and to fix any formatting issues:

    npm run lint -- --fix

### Test Coverage

To see the test coverage of the codebase use the following command:

    npm test -- --coverage --watchAll=false

There's a [bug](https://github.com/facebook/jest/issues/8491) in jest that prevents running coverage and watching files together.

## TODO

* Display free ranges
* Allow to share the Cluster range CIDR accross VPCs
* Allow to add manually defined networks
* Allow to reserve IPs in the main VPC ranges
* Dispaly more info regarding what rules are constraining the results
* Allow packing multiple GKE clusters into a single VPC (2 or 4 depending on whether we share the Cluster Alias range)

## Relevant Material

The following links are relevant to nuances of creating VPC-native GKE clusters.

[GKE Network overview](https://cloud.google.com/kubernetes-engine/docs/concepts/network-overview)
[Creating VPC-native clusters using alias IP addresses](https://cloud.google.com/kubernetes-engine/docs/how-to/alias-ips)
[Alias IP Ranges Overview](https://cloud.google.com/vpc/docs/alias-ip)

## Change Log

* 5/13/2019 - Minimum size for `Services` changed to `/27`.

## License

Apache 2.0. See [LICENSE](LICENSE) for more information.

## Disclaimer

This is not an official Google product.
