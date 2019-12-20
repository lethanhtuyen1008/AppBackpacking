import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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

import Account from './Routes'
const ContenIndex = createAppContainer(Account);

class index extends Component {
  render() {
    return (
      <Container>
        <ContenIndex />
      </Container>
    );
  }
}

export default index;
