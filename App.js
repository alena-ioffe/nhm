import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Home, LevelK, FormGen, Result, FooterTabsComp, Login } from './src';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="tabbar" tabs={true} hideNavBar>
            <Scene key="Levels">
              <Scene key="Home" component={Home} hideNavBar initial />
              <Scene key="LevelK" component={LevelK} title="Level K" />
              <Scene key="LevelK" component={LevelK} title="Level K" />
              <Scene key="FormGen" component={FormGen} title="Math" />
              <Scene key="Result" component={Result} />
            </Scene>

            <Scene key="Account">
              <Scene key="Login" component={Login} title="Account" />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
