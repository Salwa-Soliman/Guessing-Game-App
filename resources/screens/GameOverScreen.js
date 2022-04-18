/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Image, Text} from 'native-base';
import Title from '../components/Title';
import {Colors} from './../constants/Colors';
import {Center} from 'native-base';
import {Spacing} from './../constants/Spacing';
import MainScreen from './../components/MainScreen';
import CustomButton from '../components/CustomButton';
export default function GameOverScreen({
  userNumber,
  roundsNumber,
  onStartNewGame,
}) {
  return (
    <MainScreen>
      <Title text={'Game Over'} />
      <Image
        source={require('../assets/images/success.png')}
        alt="success"
        size={250}
        borderRadius="full"
        borderWidth={3}
        borderColor={Colors.primary700}
        resizeMode="contain"
        my={Spacing.elementMargin}
      />
      <Text fontSize={24} textAlign="center" mb={Spacing.elementMargin}>
        Your device took{' '}
        <Text color={Colors.primary400} fontWeight={'bold'}>
          {roundsNumber}
        </Text>{' '}
        rounds to guess the number{' '}
        <Text color={Colors.primary400} fontWeight={'bold'}>
          {userNumber}
        </Text>
        .
      </Text>
      <CustomButton onPress={onStartNewGame}>Start a New Game</CustomButton>
    </MainScreen>
  );
}
