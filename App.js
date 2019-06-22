import React, { Component } from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import FooterTabsComp from './components/Footer';
import CardListExample from './components/CardList';
// import { Actions, Router, Scene } from 'react-native-router-flux';

export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={require('./assets/bg.png')}
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

const styles = StyleSheet.create({
  background: {},
});
