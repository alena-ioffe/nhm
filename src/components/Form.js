import React, { Component } from 'react';
import { ImageBackground, StyleSheet, TextInput } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Title,
  Button,
  Form,
  Item,
  H3,
  H2,
} from 'native-base';
import CountDown60 from '../utils/CountDown';

// const numbers = () => {
//   return [...Array(10).keys()].map(x => x++);
// };

export default class FormGen extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
      correctAnswer: '',
      answer: '',
      output1: '',
      output2: '',
      message: '',
    };
    this.randomNumber = this.randomNumber.bind(this);
    this.checkAnswer = this.randomNumber.bind(this);
    this.makeQuestion = this.makeQuestion.bind(this);
    // this.superFunc = this.superFunc.bind(this);
  }

  randomNumber() {
    return Math.floor(Math.random() * 11);
  }

  makeQuestion() {
    let num1 = this.randomNumber();
    let num2 = this.randomNumber();
    this.setState({
      output1: num1,
      output2: num2,
      correctAnswer: num1 + num2,
    });
  }

  async checkAnswer(event) {
    this.answer = parseInt(event.target.value, 10);
    this.answer === this.state.correctAnswer
      ? (this.message = 'correct')
      : (this.message = 'oops');

    await this.setState({
      message: this.message,
      answer: this.answer,
    });
  }

  // superFunc() {
  //   // this.correctAnswer = this.output1 + this.output2;
  //   this.checkAnswer();
  //   this.makeQuestion();
  // }

  // getAnswer() {
  //   this.setState({
  //     correctAnswer: `type of ${this.output1}`,
  //   });
  // }

  componentDidMount() {
    this.makeQuestion();
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/bg.png')}
        style={styles.imgBg}
      >
        <Card style={styles.cardContainer}>
          <CardItem header bordered style={{ backgroundColor: '#62BFE6' }}>
            <Text style={styles.header}>Time : </Text>
            <CountDown60 />
          </CardItem>
          <CardItem header bordered>
            <Title>{this.state.count} / 24</Title>
          </CardItem>

          <Form>
            <Item>
              <Text style={{ fontSize: 22 }}>
                {this.state.output1} + {this.state.output2} =
              </Text>

              <TextInput style={{ padding: 10, fontSize: 22 }} />

              <Text>
                {/* {this.state.correctAnswer} */}
                {this.state.answer}
                {this.state.message}
              </Text>
            </Item>
          </Form>
          {/* NUMBERS */}

          <CardItem style={styles.buttonsContainer}>
            <Button large rounded block style={styles.buttonNumbers}>
              <H3>1 </H3>
            </Button>

            <Button large rounded block style={styles.buttonNumbers}>
              <H3>2 </H3>
            </Button>

            <Button large rounded block style={styles.buttonNumbers}>
              <H3>3 </H3>
            </Button>
          </CardItem>

          <CardItem style={styles.buttonsContainer}>
            <Button large rounded block style={styles.buttonNumbers}>
              <H3>4 </H3>
            </Button>
            <Button large rounded block style={styles.buttonNumbers}>
              <H3>5 </H3>
            </Button>
            <Button large rounded block style={styles.buttonNumbers}>
              <H3>6 </H3>
            </Button>
          </CardItem>

          <CardItem style={styles.buttonsContainer}>
            <Button large rounded block style={styles.buttonNumbers}>
              <H3>7 </H3>
            </Button>
            <Button large rounded block style={styles.buttonNumbers}>
              <H3>8 </H3>
            </Button>
            <Button large rounded block style={styles.buttonNumbers}>
              <H3>9 </H3>
            </Button>
          </CardItem>

          <CardItem style={styles.buttonsContainer}>
            <Button large rounded block style={styles.buttonNumbers}>
              <H3>0 </H3>
            </Button>
            <Button large rounded block style={styles.buttonNumbers}>
              <H3>C </H3>
            </Button>
          </CardItem>
        </Card>
      </ImageBackground>
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
  imgBg: {
    width: '100%',
    height: '100%',
  },
  buttonsContainer: {
    display: 'flex',

    justifyContent: 'space-between',
  },
  buttonNumbers: {
    padding: 20,
    width: 70,
    backgroundColor: 'orange',
  },
});

//produce random 2 didgit math problem
// append to the first text
// capchure the answer

//event listerner on input
// compare the value of input
// with captured answer
// if there are uquqal, append correct to text
// else append incorrect

// clear input ??
// make a append and capture(answer) a new random math
