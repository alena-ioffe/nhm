import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Text, Title, H3, Left, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class LevelK extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/bg.png')}
        style={styles.imgBg}
      >
        <Card style={styles.cardContainer}>
          <CardItem style={styles.header}>
            <Text style={styles.headerText}>'+' , '-' 0 ... 10</Text>
          </CardItem>
          <CardItem style={styles.levelList}>
            <Title>Example: </Title>
          </CardItem>
          <CardItem style={styles.levelList}>
            <Title>3 + 5 = </Title>
          </CardItem>
          <CardItem style={styles.levelList}>
            <Title>0 + 2 = </Title>
          </CardItem>
          <CardItem bordered style={styles.levelList}>
            <Image
              source={require('../../assets/crab-m.jpg')}
              style={{
                width: 180,
                height: 180,
                marginLeft: '37%',
                marginTop: -70,
              }}
            />
          </CardItem>
          <Button
            full
            style={styles.buttonGo}
            onPress={() => Actions.FormGen()}
            title="MATH"
          >
            <Text>START</Text>
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
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#62BFE6',
  },
  headerText: {
    paddingBottom: 10,
    paddingTop: 10,
    color: '#fff',
    fontSize: 22,
    letterSpacing: 2,
  },
  cardContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: '20%',
    borderRadius: 15,
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
