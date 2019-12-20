import React, { useState } from 'react';
import IndexHome from './Contents';
import { createStackNavigator } from 'react-navigation-stack';
const RootStack = createStackNavigator(
  {
    HomeIndex: IndexHome,
  },
  {
    initialRouteName: "HomeIndex",
    defaultNavigationOptions: {
      headerStyle: {
        display: 'none',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
export default RootStack;
