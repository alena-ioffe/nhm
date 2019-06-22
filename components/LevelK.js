import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text, Left, Button } from 'native-base';

export default class LevelK extends Component {
  render() {
    return (
      <Card style={styles.cardContainer}>
        <CardItem header bordered style={{ backgroundColor: '#59B8A5' }}>
          <Text style={styles.header}>add and subtract 0 - 10</Text>
        </CardItem>

        <CardItem bordered style={styles.levelList}>
          <Left>
            <Text>You can do it. You have One minute</Text>
          </Left>
        </CardItem>
        <CardItem bordered style={styles.levelList} />
        <Button full style={{ backgroundColor: '#BD64A7' }}>
          <Text>Ready Set G0 </Text>
        </Button>
      </Card>
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
