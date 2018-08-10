import React from 'react';
import {TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import {
  createStackNavigator,
  createBottomTabNavigator,
  SwitchNavigator,
  AsyncStorage
} from 'react-navigation'; // Version can be specified in package.json
import { NavigationActions,StackActions } from 'react-navigation'

import StartScreen from './components/StartScreen';
import OnboardingScreen from './components/OnboardingScreen';
import HomeScreen from './components/HomeScreen';
import CameraScreen from './components/CameraScreen';
import DetailsScreen from './components/DetialsScreen';

console.disableYellowBox = true;

const status = false;

const Router = createStackNavigator(
  {
    Start: { screen: StartScreen },
    Onboarding: { screen: OnboardingScreen },
    Details: { screen: DetailsScreen },
    Home: {screen: HomeScreen},
    Camera: {screen: CameraScreen}
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default Router;
