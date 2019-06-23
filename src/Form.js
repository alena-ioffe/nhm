import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Left,
  Button,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import CountDown60 from './utils/CountDown';
import { Actions } from 'react-native-router-flux';

export default class FormGen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/bg.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <Card style={styles.cardContainer}>
          <CardItem header bordered style={{ backgroundColor: '#62BFE6' }}>
            <Text style={styles.header}>Time : </Text>
            <CountDown60 />
          </CardItem>
          <Form>
            <Item>
              <Text> 3 + 5 = </Text>
              <Input />
            </Item>
            <Item>
              <Text> 3 + 5 = </Text>
              <Input />
            </Item>
          </Form>
        </Card>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  levelList: {
    paddingBottom: 20,
    paddingTop: 20,
  },
  header: {
    paddingBottom: 15,
    paddingTop: 15,
    color: '#fff',
    fontSize: 24,
    letterSpacing: 2,
  },
  cardContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 100,
  },
});
