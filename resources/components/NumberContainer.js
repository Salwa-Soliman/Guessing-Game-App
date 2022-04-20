/* eslint-disable prettier/prettier */
import React from 'react';
import {Center, Heading} from 'native-base';
import {Colors} from '../constants/Colors';
import {Spacing} from '../constants/Spacing';
import {Dimensions} from 'react-native';
export default function NumberContainer({children, landScape}) {
  let screenWidth = Dimensions.get('window').width;
  return (
    <Center
      w="40%"
      borderColor={Colors.secondary500}
      bg={Colors.primary700 + '30'}
      borderRadius="xl"
      mt={landScape ? 0 : Spacing.elementMargin}
      py={
        screenWidth < 350
          ? Spacing.titlePadding * 1.2
          : Spacing.titlePadding * 1.6
      }
      borderWidth={4}>
      <Heading
        color={Colors.secondary500}
        fontSize={screenWidth < 350 ? 30 : 40}>
        {children}
      </Heading>
    </Center>
  );
}
