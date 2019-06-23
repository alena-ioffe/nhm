import React from 'react';
import CountDown from 'react-native-countdown-component';
import { Actions } from 'react-native-router-flux';

const CountDown60 = () => {
  return (
    <CountDown
      until={5}
      onFinish={() => Actions.Result()}
      digitStyle={{
        backgroundColor: '#62BFE6',
        borderWidth: 2,
        borderColor: '#ffff',
      }}
      digitTxtStyle={{ color: '#fff' }}
      timeToShow={['M', 'S']}
      timeLabels={{ m: null, s: null }}
      showSeparator
      size={20}
      timeLabelStyle={{ color: '#fff', fontWeight: 'bold' }}
      separatorStyle={{ color: '#fff' }}
    />
  );
};

export default CountDown60;
