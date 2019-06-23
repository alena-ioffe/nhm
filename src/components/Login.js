import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Input, Item, Form, Label, Card, Text, Button } from 'native-base';

export default class Result extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/bg.png')}
        style={styles.imgBg}
      >
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
      </ImageBackground>
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
    marginTop: 150,
  },
  buttonLogin: {
    marginTop: 30,
    backgroundColor: '#366AAE',
  },
  imgBg: {
    width: '100%',
    height: '100%',
  },
});
