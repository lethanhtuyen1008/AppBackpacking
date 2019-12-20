import React, { Component } from 'react';
import { Container, Content, Text, StyleProvider, Label, View } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { createAppContainer } from 'react-navigation';
import RootStack from './src/Routes';
import configureStore from './src/redux/store';
import { Provider } from 'react-redux';
const AppContainer = createAppContainer(RootStack);
export default class ThemeExample extends Component {
  render() {
    return (
      <Container>
        <StyleProvider style={getTheme(material)}>
          <AppContainer />
        </StyleProvider>
      </Container>
    );
  }
}