/* eslint-disable prettier/prettier */
import React from 'react';
import {Heading} from 'native-base';
import {Spacing} from '../constants/Spacing';
export default function Title({text}) {
  return (
    <Heading
      // w="100%"
      textAlign={'center'}
      color={'#fff'}
      borderWidth={2}
      borderColor={'#fff'}
      p={Spacing.titlePadding}
      borderRadius="lg">
      {text}
    </Heading>
  );
}
