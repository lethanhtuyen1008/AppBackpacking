import * as React from 'react';
import { Button, View, Text } from 'react-native';

import BlogScreen from './screens/Blog';
import AccountScreen from './screens/Accounts';
import HomeScreen from './screens/Home';
import ScheduleScreen from './screens/Schedule/Routes.js';
import GroupScreen from './screens/Group';
import ChatScreen from './screens/Chat';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Iicon from 'react-native-vector-icons/Ionicons';
import Eicon from 'react-native-vector-icons/Entypo';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  let iconName;
  switch (routeName) {
    case 'Home': {
      iconName = 'home';
      break;
    }
    // case 'Blog': {
    //   iconName = 'blog';
    //   break;
    // }
    case 'Schedules': {
      iconName = 'calendar';
      break;
    }
    case 'Group': {
      iconName = 'users';
      break;
    }
    case 'Chat': {
      iconName = 'rocketchat';
      break;
    }
    case 'Accounts': {
      iconName = 'stream';
      break;
    }
  }
  return <IconComponent name={iconName} size={20} color={tintColor} />;
};

const RootStack = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    // Blog: {screen: BlogScreen},
    Schedules: { screen: ScheduleScreen },
    Group: { screen: GroupScreen },
    Chat: { screen: ChatScreen },
    Accounts: { screen: AccountScreen },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
      tabBarLabel: <View />,
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: '#BDBDBD',
    },
  },
);

export default RootStack;
