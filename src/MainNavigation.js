/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/* eslint-disable prettier/prettier */
import React from 'react';
import Home from './Home';
import MagesDescription from './MageDescription';
import SchoolDescription from './SchoolDescription';
import SchoolList from './SchoolList';
import ListSchoolSpell from './ListSchoolSpell';
import RoomsEffects from './RoomsEffects';
import Reference from './Reference';
import EvocationData from './EvocationData';
import ListEvocations from './ListEvocations'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { View } from 'react-native';
import RoomContent from './RoomContent';




const CustomTabBarBottom = props => {
  return (
    <View/>
  );
};

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Mages: {
    screen: MagesDescription,
  },
  SchoolDescription: {
    screen: SchoolDescription,
  },
  SchoolList: {
    screen: SchoolList,
  },
  ListSchoolSpell: {
    screen: ListSchoolSpell,
  },
  RoomsEffects: {
    screen: RoomsEffects,
  },
  Reference: {
    screen: Reference,
  },
  EvocationData: {
    screen: EvocationData,
  },
  ListEvocations: {
    screen: ListEvocations,
  },
  RoomContent: RoomContent,
},
{
  tabBarComponent: (props) => <CustomTabBarBottom  {...props} />,
});

const MainNavigation = createAppContainer(TabNavigator);

export default MainNavigation;
