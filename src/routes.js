import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { Home, LevelK, FormGen, Result, Login } from './components/index';
import { Icon } from 'native-base';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="tabbar"
            tabs={true}
            hideNavBar
            activeTintColor="#366AAE"
            labelStyle={{
              fontSize: 16,
              fontWeight: 'bold',
              letterSpacing: 1.5,
            }}
            showIcon
            showLabel
            tabBarStyle={{ backgroundColor: '#FFFFFF', height: 70 }}
          >
            <Scene
              key="Levels"
              title="Levels"
              icon={() => (
                <Icon
                  style={{ width: 30, height: 30 }}
                  name="rocket"
                  size={20}
                />
              )}
            >
              <Scene key="Home" component={Home} hideNavBar initial />
              <Scene key="LevelK" component={LevelK} title="Level K" />
              <Scene key="FormGen" component={FormGen} title="Math Time" />
              <Scene key="Result" component={Result} hideNavBar />
            </Scene>

            <Scene
              key="Account"
              title="Account"
              icon={() => (
                <Icon style={{ width: 30, height: 30 }} name="star" size={20} />
              )}
            >
              <Scene key="Login" component={Login} title="Account" hideNavBar />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
