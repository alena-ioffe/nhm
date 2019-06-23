import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Left,
  Button,
  Container,
  Body,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import ConfettiCannon from 'react-native-confetti-cannon';

export default class Result extends Component {
  render() {
    return (
      <Container>
        <ConfettiCannon count={200} origin={{ x: -30, y: 0 }} />

        <Card style={styles.cardContainer}>
          <CardItem header bordered style={{ backgroundColor: '#59B8A5' }}>
            <Text style={styles.header}>Hooray 24/24</Text>
          </CardItem>

          <CardItem bordered style={styles.levelList}>
            <Left>
              <Text>Awesome job!</Text>
            </Left>
          </CardItem>
          <CardItem bordered style={styles.levelList}>
            <Left>
              <Text>Total Points: 50</Text>
            </Left>
          </CardItem>
          <Button
            full
            style={{ backgroundColor: '#BD64A7' }}
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
