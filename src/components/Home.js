import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import LevelsList from './LevelsList';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={require('../../assets/bg.png')}
          style={styles.imgBg}
        >
          <Content padder>
            <LevelsList />
          </Content>
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
