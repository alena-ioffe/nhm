import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Content } from 'native-base';
import FooterTabsComp from './Footer';
import CardListExample from './CardList';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={{ width: '100%', height: '100%' }}
        >
          <Content padder>
            <CardListExample />
          </Content>
          <FooterTabsComp />
        </ImageBackground>
      </Container>
    );
  }
}
