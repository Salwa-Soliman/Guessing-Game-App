/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'native-base';
import {Colors} from '../constants/Colors';
import {Spacing} from '../constants/Spacing';
import {Dimensions} from 'react-native';

export default function GuessItem({index, guessedNumber}) {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View
      bg={Colors.primary400 + '80'}
      p={3}
      borderRadius="xl"
      mb={Spacing.elementMargin / 2}>
      <Text color="#fff" fontSize={screenWidth < 350 ? 15 : 20}>
        #{index} Guessed Number is {guessedNumber}
      </Text>
    </View>
  );
}
