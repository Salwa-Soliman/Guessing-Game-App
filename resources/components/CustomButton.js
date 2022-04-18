/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, View, Text} from 'native-base';
import {Colors} from './../constants/Colors';
import {Spacing} from '../constants/Spacing';

export default function CustomButton({children, onPress, gameScreen}) {
  return (
    <View
      bg={Colors.primary400}
      borderRadius="full"
      minW="65"
      shadow={9}
      overflow="hidden">
      <Pressable android_ripple={{color: Colors.primary500}} onPress={onPress}>
        <Text
          color={Colors.textColor}
          textAlign="center"
          fontSize={gameScreen ? 30 : 16}
          p={gameScreen ? 2 : Spacing.btnPadding}
          fontWeight={gameScreen ? '900' : '500'}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
}
