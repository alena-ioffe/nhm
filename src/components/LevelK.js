import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Text, H3, Left, Button } from 'native-base';
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
              <H3>You can do it!</H3>
            </Left>
            <Image
              source={require('../../assets/crab-m.jpg')}
              style={{ width: 180, height: 180 }}
            />
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
    paddingBottom: 10,
    paddingTop: 10,
  },
  header: {
    paddingBottom: 10,
    paddingTop: 10,
    color: '#fff',
    fontSize: 22,
    letterSpacing: 2,
  },
  cardContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: '45%',
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
