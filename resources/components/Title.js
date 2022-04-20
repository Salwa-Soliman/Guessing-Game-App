/* eslint-disable prettier/prettier */
import React from 'react';
import {Heading} from 'native-base';
import {Spacing} from '../constants/Spacing';
import {useWindowDimensions, Platform} from 'react-native';

export default function Title({text}) {
  const {width} = useWindowDimensions();

  return (
    <Heading
      // w="100%"
      textAlign={'center'}
      color={'#fff'}
      // borderWidth={Platform.OS === 'android' ? 2 : 0}
      borderWidth={Platform.select({ios: 0, android: 2})}
      borderColor={'#fff'}
      p={Spacing.titlePadding}
      borderRadius="lg"
      fontSize={width < 350 ? 20 : 26}>
      {text}
    </Heading>
  );
}
