import React from 'react';
import {View} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Search from '../Home/Search';
const Index = props => {
  return (
    <Container>
      <Search />
    </Container>
  );
};
export default Index;
