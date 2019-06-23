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
import CountDown from 'react-native-countdown-component';
import { Actions } from 'react-native-router-flux';

export default class FormGen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/bg.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <Card style={styles.cardContainer}>
          <CardItem header bordered style={{ backgroundColor: '#59B8A5' }}>
            <Text style={styles.header}>Time : </Text>
            <CountDown
              until={10}
              onFinish={() => Actions.LevelK()}
              digitStyle={{
                backgroundColor: '#59B8A5',
                borderWidth: 2,
                borderColor: '#ffff',
              }}
              digitTxtStyle={{ color: '#fff' }}
              timeToShow={['M', 'S']}
              timeLabels={{ m: null, s: null }}
              showSeparator
              size={20}
              timeLabelStyle={{ color: '#fff', fontWeight: 'bold' }}
              separatorStyle={{ color: '#fff' }}
            />
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
  badgeLevels: {
    marginLeft: 10,
    fontSize: 20,
    color: '#fff',
    lineHeight: 24,
  },
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
    marginTop: 30,
  },
});
