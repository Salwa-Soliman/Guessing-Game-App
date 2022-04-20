/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Input,
  HStack,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'native-base';
import CustomButton from './../components/CustomButton';
import {Colors} from '../constants/Colors';
import {Spacing} from '../constants/Spacing';
import {Alert} from 'react-native';
import Title from '../components/Title';
import Card from './../components/Card';
import CardHeader from '../components/CardHeader';
import MainScreen from './../components/MainScreen';
export default function StartGameScreen({onPicked}) {
  const [enteredNumber, setEnteredNumber] = useState('');
  const _onChangeTextHandler = number => setEnteredNumber(number);

  return (
    <ScrollView flex="1">
      <KeyboardAvoidingView flex="1" behavior="position">
        <MainScreen>
          <Title text="Guess My Number" />
          <Card>
            <CardHeader>Enter a Number</CardHeader>
            <Input
              variant={'underlined'}
              keyboardType="number-pad"
              borderBottomColor={Colors.secondary500}
              color={Colors.secondary500}
              textAlign={'center'}
              w="50"
              fontSize="25"
              fontWeight="600"
              maxLength={2}
              // placeholder="00"
              // placeholderTextColor={'#77777780'}
              onChangeText={_onChangeTextHandler}
              value={enteredNumber}
            />
            {/* Buttons  */}
            <HStack
              w="100%"
              justifyContent="space-between"
              my={Spacing.elementMargin}>
              <View flex="1" mx="2">
                <CustomButton onPress={resetInput}>Reset</CustomButton>
              </View>
              <View flex="1" mx="2">
                <CustomButton onPress={startGame}>Start</CustomButton>
              </View>
            </HStack>
          </Card>
        </MainScreen>
      </KeyboardAvoidingView>
    </ScrollView>
  );

  function startGame() {
    let chosenNumber = parseInt(enteredNumber, 10);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number has to be between 1 and 99.', [
        {text: 'Okay', style: 'destructive', onPress: resetInput},
      ]);
      return;
    }
    console.log('Valid Number', chosenNumber);
    onPicked(chosenNumber);
  }

  function resetInput() {
    setEnteredNumber('');
  }
}
