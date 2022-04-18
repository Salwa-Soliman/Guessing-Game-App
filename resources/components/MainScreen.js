/* eslint-disable prettier/prettier */
import React from 'react';
import {Center} from 'native-base';
import {Spacing} from '../constants/Spacing';
export default function MainScreen({children}) {
  return (
    <Center mt="10" p={Spacing.screenPadding} w="100%" flex="1">
      {children}
    </Center>
  );
}
