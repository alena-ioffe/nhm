import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Badge,
  Left,
  Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class CardListExample extends Component {
  render() {
    return (
      <Card style={styles.cardContainer}>
        <CardItem header bordered style={{ backgroundColor: '#59B8A5' }}>
          <Text style={styles.header}>Choose Challenge</Text>
        </CardItem>

        <CardItem bordered style={styles.levelList}>
          <Left>
            <Text>Level</Text>
            <Badge primary style={styles.badgeLevels}>
              <Text>K</Text>
            </Badge>
          </Left>
          <Right>
            <Button
              transparent
              onPress={() => {
                Actions.LevelK();
              }}
            >
              <Icon name="arrow-forward" />
            </Button>
          </Right>
        </CardItem>

        <CardItem bordered style={styles.levelList}>
          <Left>
            <Text>Level</Text>
            <Badge primary style={styles.badgeLevels}>
              <Text>1 </Text>
            </Badge>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>

        <CardItem bordered style={styles.levelList}>
          <Left>
            <Text>Level</Text>
            <Badge primary style={styles.badgeLevels}>
              <Text>2 </Text>
            </Badge>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>

        <CardItem bordered style={styles.levelList}>
          <Left>
            <Text>Level</Text>
            <Badge primary style={styles.badgeLevels}>
              <Text>3 </Text>
            </Badge>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem bordered style={styles.levelList}>
          <Left>
            <Text>Level</Text>
            <Badge primary style={styles.badgeLevels}>
              <Text>4 </Text>
            </Badge>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
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
    marginTop: 150,
  },
});
