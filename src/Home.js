import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import FooterTabsComp from './Footer';
import LevelsList from './LevelsList';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={{ width: '100%', height: '100%' }}
        >
          <Content padder>
            <LevelsList />
          </Content>
          {/* <FooterTabsComp /> */}
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imgBg: {
    width: '100%',
    height: '100%',
  },
});
