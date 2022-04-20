/* eslint-disable prettier/prettier */
import React from 'react';
import {Heading} from 'native-base';
import {Colors} from '../constants/Colors';
import {Dimensions} from 'react-native';
import {Spacing} from '../constants/Spacing';

export default function CardHeader({children, landscape}) {
  const screenWidth = Dimensions.get('window').width;
  return (
    <Heading
      color={Colors.secondary500}
      fontWeight={landscape ? '700' : '500'}
      mt={screenWidth < 350 ? 1.5 : landscape ? Spacing.elementMargin : 3}
      mb={screenWidth < 350 ? 1.5 : landscape ? Spacing.elementMargin / 2 : 3}
      fontSize={screenWidth < 350 ? 18 : 24}>
      {children}
    </Heading>
  );
}
