/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {HStack, View, Text, FlatList} from 'native-base';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import CustomButton from '../components/CustomButton';
import {Spacing} from './../constants/Spacing';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import MainScreen from './../components/MainScreen';
import {Colors} from './../constants/Colors';
export default function GameScreen({chosenNumber, onGameOver, onNewGuess}) {
  const [boundaries, setBoundaries] = useState({max: 100, min: 1});
  const initialGuess = generateRandomNumberBetween(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessingArr, setGuessingArr] = useState([]);

  useEffect(() => {
    if (chosenNumber === currentGuess) {
      onGameOver();
    }
    return onNewGuess(guessingArr.length);
  }, [chosenNumber, currentGuess, onGameOver, onNewGuess, guessingArr]);
  return (
    <MainScreen>
      <Title text="Openent's Guess" />
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <CardHeader>Lower or Higher?</CardHeader>
        <HStack w="80%" justifyContent={'space-between'} my={3}>
          <CustomButton
            onPress={nextGuessHandler.bind(this, 'lower')}
            gameScreen>
            -
          </CustomButton>
          <CustomButton
            onPress={nextGuessHandler.bind(this, 'higher')}
            gameScreen>
            +
          </CustomButton>
        </HStack>
      </Card>
      <View flex="1">
        <FlatList
          data={guessingArr}
          renderItem={itemData => (
            <View
              bg={Colors.primary400 + '80'}
              p={3}
              borderRadius="xl"
              mb={Spacing.elementMargin / 2}>
              <Text color="#fff" fontSize={20}>
                #{guessingArr.length - itemData.index} Guessed Number is{' '}
                {itemData.item}
              </Text>
            </View>
          )}
        />
      </View>
    </MainScreen>
  );

  function nextGuessHandler(lowerOrHigher) {
    if (
      (lowerOrHigher === 'lower' && currentGuess < chosenNumber) ||
      (lowerOrHigher === 'higher' && currentGuess > chosenNumber)
    ) {
      Alert.alert("Don't Lie!", 'You know this is wrong ...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if (lowerOrHigher === 'lower') {
      boundaries.max = currentGuess;
    } else {
      boundaries.min = currentGuess + 1;
    }

    setBoundaries({...boundaries});

    const newGuess = generateRandomNumberBetween(
      boundaries.min,
      boundaries.max,
      currentGuess,
    );
    setCurrentGuess(newGuess);
    setGuessingArr([currentGuess, ...guessingArr]);
  }

  function generateRandomNumberBetween(min, max, excluded) {
    let generatedNumber = Math.floor(Math.random() * (max - min)) + min;
    if (generatedNumber === excluded) {
      return generateRandomNumberBetween(min, max, chosenNumber);
    } else {
      return generatedNumber;
    }
  }
}
