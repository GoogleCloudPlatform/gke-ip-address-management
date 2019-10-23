#!/usr/bin/env groovy
/*
Copyright 2019 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

def label = "gke-ipam-${UUID.randomUUID().toString()}"
podTemplate(label: label, containers: [
    containerTemplate(name: 'node', image: 'node:12.7.0-stretch', ttyEnabled: true, command: 'cat'),
    containerTemplate(name: 'python', image: 'python:3.7.4-buster', ttyEnabled: true, command: 'cat'),
  ]) {
  node(label) {
    container('python') {
      stage('Checkout') {
        checkout scm
      }
      stage('Verify Headers') {
        sh 'make verify-header' 
      }
    }
    container('node') {      
      stage('Install dependencies') {
        sh 'make npm-install'      
      }      
      stage('Run tests') {
        sh 'make npm-test'    
      }
      stage('Run lint') {
        sh 'make lint' 
      }
    }    
  }
}
