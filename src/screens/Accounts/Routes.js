import React from 'react';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './SignIn';
import SignUpScreen from './SignUp';
import {
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Text,
    Fab,
    Segment,
} from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';

const Accounts = createStackNavigator(
    {
        Login: LoginScreen,
        SignUp: SignUpScreen,
    },
    {
        initialRouteName: 'SignUp',
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
