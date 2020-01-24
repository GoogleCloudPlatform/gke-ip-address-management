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

import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Input,
} from 'reactstrap';
import PropTypes from 'prop-types';

/**
 * Component to hold buttons to manage the state of applications.
 */
class StateButtons extends React.Component {
  /**
   * Constructor.
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      downloadModal: false,
      uploadModal: false,
      configText: '',
    };

    this.toggleDownload = this.toggleDownload.bind(this);
    this.toggleUpload = this.toggleUpload.bind(this);
    this.uploadConfig = this.uploadConfig.bind(this);
    this.handleConfigText = this.handleConfigText.bind(this);
  }

  /**
   * Handle ingesting new text for the configuration.
   *
   * @param {Object} e the selection event.
   */
  handleConfigText(e) {
    this.setState(
        Object.assign({}, this.state.input, {
          configText: e.target.value,
        }),
    );
  }

  /**
   * Show the download modal dialog
   */
  toggleDownload() {
    this.setState((prevState) => ({
      downloadModal: !prevState.downloadModal,
      uploadModal: prevState.uploadModal,
      configText: '',
    }));
  }

  /**
   * Show the upload modal dialog
   */
  toggleUpload() {
    this.setState((prevState) => ({
      downloadModal: prevState.downloadModal,
      uploadModal: !prevState.uploadModal,
      configText: '',
    }));
  }

  /**
   * Hide the upload modal dialog, and ingest the config text.
   */
  uploadConfig() {
    this.toggleUpload();
    this.props.handleUploadConfig(this.state.configText);
  }

  /**
   * Render the Col element.
   *
   * @return {Object} the Col element that contains the buttons.
   */
  render() {
    return (
      <Col className="text-right ">
        <Button color="primary" onClick={this.toggleDownload}>
          Download Config
        </Button>{' '}
        <Modal isOpen={this.state.downloadModal} toggle={this.toggleDownload}>
          <ModalHeader toggle={this.toggleDownload}>
            Current Configuration
          </ModalHeader>
          <ModalBody>
            <pre>{this.props.input}</pre>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleDownload}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <Button color="secondary" onClick={this.toggleUpload}>
          Upload Config
        </Button>{' '}
        <Modal isOpen={this.state.uploadModal} toggle={this.toggleUpload}>
          <ModalHeader toggle={this.toggleUpload}>
            Upload Configuration
          </ModalHeader>
          <ModalBody>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              rows="15"
              onChange={this.handleConfigText}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.uploadConfig}>
              Upload
            </Button>
            <Button color="secondary" onClick={this.toggleUpload}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Col>
    );
  }
}

StateButtons.propTypes = {
  input: PropTypes.string,
  handleUploadConfig: PropTypes.func,
};

export default StateButtons;
