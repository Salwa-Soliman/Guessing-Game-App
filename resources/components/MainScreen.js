/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Center, ScrollView, VStack} from 'native-base';

import {Spacing} from '../constants/Spacing';
import {useWindowDimensions} from 'react-native';
export default function MainScreen({children, GameOverScreen}) {
  const {width, height} = useWindowDimensions();
  console.log(width, height);
  return (
    <Center
      p={Spacing.screenPadding}
      flex={'1'}
      style={{
        marginTop: width > height ? 10 : 50,
      }}>
      {children}
    </Center>
  );
}
