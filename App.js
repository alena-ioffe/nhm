import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Home, LevelK, FormGen } from './src';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Home " component={Home} initial hideNavBar />
          <Scene key="LevelK" component={LevelK} title="Level K" />
          <Scene key="FormGen" component={FormGen} title="Math" />
        </Scene>
      </Router>
    );
  }
}
