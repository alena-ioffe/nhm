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
  H1,
  H2,
  H3,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class LevelsList extends Component {
  render() {
    return (
      <Card style={styles.cardContainer}>
        <CardItem style={styles.header}>
          <Text style={styles.headerText}>Choose Level</Text>
        </CardItem>

        <CardItem
          button
          transparent
          onPress={() => {
            Actions.LevelK();
          }}
          bordered
          style={styles.levelList}
        >
          <Left>
            <H2>Level</H2>
            <Badge info style={styles.badgeLevels}>
              <Text>K </Text>
            </Badge>
            <Text note>within 0 - 10</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>

        <CardItem
          button
          transparent
          onPress={() => {
            Actions.LevelK();
          }}
          bordered
          style={styles.levelList}
        >
          <Left>
            <H2>Level</H2>
            <Badge info style={styles.badgeLevels}>
              <Text>1 </Text>
            </Badge>
            <Text note>within 0 - 20</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>

        <CardItem bordered style={styles.levelList}>
          <Left>
            <H2>Level</H2>
            <Badge info style={styles.badgeLevels}>
              <Text>2 </Text>
            </Badge>
            <Text note>within 0 - 20</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>

        <CardItem bordered style={styles.levelList}>
          <Left>
            <H2>Level</H2>
            <Badge info style={styles.badgeLevels}>
              <Text>3 </Text>
            </Badge>
            <Text note>within 0 - 20</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem style={styles.levelListLast}>
          <Left>
            <H2>Level</H2>
            <Badge info style={styles.badgeLevels}>
              <Text>4 </Text>
            </Badge>
            <Text note>within 0 - 20</Text>
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
    fontSize: 22,
    color: '#fff',
    lineHeight: 30,
  },
  levelList: {
    paddingBottom: 20,
    paddingTop: 15,
  },
  levelListLast: {
    paddingBottom: 20,
    paddingTop: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  header: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#59B8A5',
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
    marginTop: '45%',
    borderRadius: 15,
  },
});
