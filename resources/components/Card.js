/* eslint-disable prettier/prettier */
import React from 'react';
import {Center} from 'native-base';
import {Spacing} from '../constants/Spacing';
import {Colors} from '../constants/Colors';

export default function Card({children}) {
  return (
    <Center
      padding={Spacing.screenPadding}
      bg={Colors.primary700}
      w="100%"
      maxW={430}
      my={Spacing.elementMargin}
      borderRadius="xl">
      {children}
    </Center>
  );
}
