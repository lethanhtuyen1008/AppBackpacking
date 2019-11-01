import React, {Component} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Menu from '../Menu';

const DetailsScreen = (props) => {
  const onClickItemMenu = name => {
    props.navigation.navigate(name);
  };
  return (
    <Container>
      <ScrollView>
        <Grid>
          <Col style={{backgroundColor: '#ff0', height: 1200}}></Col>
          <Col style={{backgroundColor: '#00CE9F', height: 1200}}></Col>
          <Col style={{backgroundColor: 'red', height: 1200}}></Col>
        </Grid>
      </ScrollView>
      {/*<View>
          <Text>tuyen {navigation.getParam('id')} {navigation.getParam('id2')} </Text>
        </View>*/}
    </Container>
  );
};
export default DetailsScreen;
