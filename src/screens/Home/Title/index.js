import React, {useState} from 'react';
import {View, Slider, Image, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Card,
  CardItem,
  Body,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Index = props => {
  return (
    <Row
      style={{
        fontFamily: 'Helvetica',
        fontSize: 20,
        padding: 5,
        fontWeight: 'bold',
      }}>
      <Col>
        <Text
          style={{
            fontFamily: 'Helvetica',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {props.title}
        </Text>
      </Col>
      <Col style={{width: 50}}>
        <Text
          style={{color: '#00BFFF'}}
          onPress={() => props.routerMap(props.link)}>
          Tất cả
        </Text>
      </Col>
    </Row>
  );
};
export default Index;
