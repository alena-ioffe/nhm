import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Card, CardItem, Text, Left, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class LevelK extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/bg.png')}
        style={styles.imgBg}
      >
        <Card style={styles.cardContainer}>
          <CardItem header bordered style={{ backgroundColor: '#62BFE6' }}>
            <Text style={styles.header}>add and subtract 0 - 10</Text>
          </CardItem>

          <CardItem bordered style={styles.levelList}>
            <Left>
              <Text>You can do it. You have One minute</Text>
            </Left>
          </CardItem>
          <CardItem style={styles.levelList} />
          <Button
            full
            style={styles.buttonGo}
            onPress={() => Actions.FormGen()}
            title="MATH"
          >
            <Text>Ready Set G0 </Text>
          </Button>
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
  buttonGo: {
    backgroundColor: '#BD64A7',
    margin: 20,
  },
  imgBg: {
    width: '100%',
    height: '100%',
  },
});
