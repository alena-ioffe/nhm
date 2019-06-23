import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Left,
  Button,
  Container,
  H1,
  H2,
  H3,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import ConfettiCannon from 'react-native-confetti-cannon';

export default class Result extends Component {
  render() {
    return (
      <Container>
        <ConfettiCannon count={200} origin={{ x: -30, y: 0 }} />

        <Card style={styles.cardContainer}>
          <CardItem header bordered style={{ backgroundColor: '#62BFE6' }}>
            <Text style={styles.header}>Hooray 24/24</Text>
          </CardItem>

          <CardItem bordered style={styles.levelList}>
            <Left>
              <H3>Awesome job!</H3>
            </Left>
          </CardItem>
          <CardItem bordered style={styles.levelList}>
            <Left>
              <Text>Total Points: 50</Text>
            </Left>
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
  buttonPlayAgain: {
    backgroundColor: '#BD64A7',
    margin: 20,
    backgroundColor: '#BD64A7',
  },
});
