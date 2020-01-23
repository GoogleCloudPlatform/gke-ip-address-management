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

import React, {
  Component,
} from 'react';
import './App.css';
import Calculator from './Calculator';

/**
 * Main application class.
 */
class App extends Component {
  /**
   * Render the main application component.
   *
   * @return {Object} the main <div> for the application.
   */
  render() {
    return ( <div className = "App" >
      <header className = "App-header" >
        <h1 > GKE IP Address Management </h1>
        <h3>-a</h3>
      </header>

      <Calculator / >

    </div>
    );
  }
}

export default App;
