import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Left,
  Button,
  Container,
  Title,
  H3,
  Right,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import ConfettiCannon from 'react-native-confetti-cannon';

export default class Result extends Component {
  render() {
    return (
      <Container>
        <ConfettiCannon count={200} origin={{ x: -30, y: 0 }} />
        <ImageBackground
          source={require('../../assets/bg.png')}
          style={styles.imgBg}
        >
          <Card style={styles.cardContainer}>
            <CardItem style={styles.header}>
              <Text style={styles.headerText}>Awesome job!</Text>
            </CardItem>

            <CardItem bordered style={styles.levelList}>
              <Left>
                <H3>score: 24/24</H3>
              </Left>
            </CardItem>
            <CardItem bordered style={styles.levelList}>
              <Image
                source={require('../../assets/purple-m.jpg')}
                style={{ width: 240, height: 200 }}
              />
            </CardItem>

            <Button
              full
              style={styles.buttonPlayAgain}
              onPress={() => Actions.FormGen()}
              title="MATH"
            >
              <Text>Play Again</Text>
            </Button>
          </Card>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  levelList: {
    paddingBottom: 20,
    paddingTop: 20,
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
    marginTop: '35%',
    borderRadius: 15,
  },
  buttonPlayAgain: {
    backgroundColor: '#BD64A7',
    margin: 20,
  },
  imgBg: {
    width: '100%',
    height: '100%',
  },
});
