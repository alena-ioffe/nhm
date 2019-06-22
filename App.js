import React, { Component } from 'react';
import LevelK from './components/LevelK';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';

export default class AnatomyExample extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Home " component={Home} initial hideNavBar />
          <Scene key="LevelK" component={LevelK} title="Level K" />
        </Scene>
      </Router>
    );
  }
}
