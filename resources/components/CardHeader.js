/* eslint-disable prettier/prettier */
import React from 'react';
import {Heading} from 'native-base';
import {Colors} from '../constants/Colors';
export default function CardHeader({children}) {
  return (
    <Heading color={Colors.secondary500} fontWeight="500" my="3">
      {children}
    </Heading>
  );
}
