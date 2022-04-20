/* eslint-disable prettier/prettier */

import React from 'react';
import {Image, Text, ScrollView} from 'native-base';
import Title from '../components/Title';
import {Colors} from './../constants/Colors';
import {Spacing} from './../constants/Spacing';
import MainScreen from './../components/MainScreen';
import CustomButton from '../components/CustomButton';
// import {Dimensions} from 'react-native';
import {useWindowDimensions} from 'react-native';
export default function GameOverScreen({
  userNumber,
  roundsNumber,
  onStartNewGame,
}) {
  // const screenWidth = Dimensions.get('window').width;
  const {width, height} = useWindowDimensions();

  return (
    <ScrollView flex={1}>
      <MainScreen>
        <Title text={'Game Over'} />
        <Image
          source={require('../assets/images/success.png')}
          alt="success"
          size={width > height ? 20 : width * 0.6}
          // maxW="300"
          // maxH="300"
          borderRadius="full"
          borderWidth={3}
          borderColor={Colors.primary700}
          resizeMode="contain"
          my={Spacing.elementMargin}
        />

        <Text
          fontSize={width < 350 ? 18 : 24}
          textAlign="center"
          mb={Spacing.elementMargin}>
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
    </ScrollView>
  );
}
