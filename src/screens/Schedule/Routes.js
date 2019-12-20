import React from 'react';
import TransitScreen from './TransitSchedule';
import UpComingScreen from './UpComingSchedule';
import WentScreen from './WentSchedule';
import AddScheduleScreen from './AddSchedule'
import DetailScreen from './DeatailSchedule';
import { createStackNavigator } from 'react-navigation-stack';

const Accounts = createStackNavigator(
    {
        UpComing: UpComingScreen,
        Transit: TransitScreen,
        Went: WentScreen,
        Detail: DetailScreen,
        AddSchedule: AddScheduleScreen
    },
    {
        initialRouteName: "UpComing",
        defaultNavigationOptions: {
            headerStyle: {
                display: 'none',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
);
export default Accounts;