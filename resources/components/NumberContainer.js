/* eslint-disable prettier/prettier */
import React from 'react';
import {Center, Heading} from 'native-base';
import {Colors} from '../constants/Colors';
import {Spacing} from '../constants/Spacing';
export default function NumberContainer({children}) {
  return (
    <Center
      w="80%"
      borderColor={Colors.secondary500}
      bg={Colors.primary700 + '30'}
      borderRadius="xl"
      mt={Spacing.elementMargin}
      py={Spacing.titlePadding * 1.4}
      borderWidth={4}>
      <Heading color={Colors.secondary500} fontSize={40}>
        {children}
      </Heading>
    </Center>
  );
}
