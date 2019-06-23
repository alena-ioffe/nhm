import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Content,
  Input,
  Item,
  Form,
  Label,
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

export default class Result extends Component {
  render() {
    return (
      <Card style={styles.cardContainer}>
        <Form style={styles.formStyle}>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          <Button full style={styles.buttonLogin}>
            <Text>Submit</Text>
          </Button>
        </Form>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  formStyle: {
    padding: 20,
  },
  cardContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 100,
  },
  buttonLogin: {
    marginTop: 30,
  },
});
