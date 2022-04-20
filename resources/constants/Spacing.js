/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Spacing = {
  btnPadding: screenWidth < 350 ? 2 : 3,
  titlePadding: screenWidth < 350 ? 2.5 : 5,
  elementMargin: screenWidth < 350 ? 4 : 7,
  screenPadding: screenWidth < 350 ? 3 : 5,
};
