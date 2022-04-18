/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import {Box, NativeBaseProvider} from 'native-base';
import {Colors} from './resources/constants/Colors';
import {Spacing} from './resources/constants/Spacing';

import LinearGradient from 'react-native-linear-gradient';
import StartGameScreen from './resources/screens/StartGameScreen';
import GameScreen from './resources/screens/GameScreen';
import GameOverScreen from './resources/screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState('');
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessesNumber, setGuessesNumber] = useState(0);
  const handlePickedNumber = number => setUserNumber(number);

  let renderedScreen = <StartGameScreen onPicked={handlePickedNumber} />;

  if (userNumber) {
    // setGameIsOver(false);
    renderedScreen = (
      <GameScreen
        chosenNumber={userNumber}
        onGameOver={onGameOverHandler}
        onNewGuess={updateGuessesNumber}
      />
    );
  }

  if (gameIsOver && userNumber) {
    renderedScreen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessesNumber}
        onStartNewGame={startNewGame}
      />
    );
  }

  function onGameOverHandler() {
    setGameIsOver(true);
  }

  function startNewGame() {
    setUserNumber('');
    setGuessesNumber(0);
    setGameIsOver(false);
  }

  function updateGuessesNumber(num) {
    setGuessesNumber(num);
  }
  return (
    <NativeBaseProvider>
      <LinearGradient
        colors={[Colors.primary600, Colors.secondary500]}
        style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1}}
          source={require('./resources/assets/images/background.png')}
          resizeMode="cover"
          imageStyle={{opacity: 0.25}}>
          <Box safeArea px={Spacing.screenPadding} flex="1">
            {/* <StartGameScreen /> */}
            {renderedScreen}
          </Box>
        </ImageBackground>
      </LinearGradient>
    </NativeBaseProvider>
  );
}
