import React, {useState} from 'react';
import {ScrollView, ImageBackground, Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  View,
  Fab,
  Item,
  Input,
  Card,
  CardItem,
  Body,
  Thumbnail,
  Left,
  Right,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/AntDesign';
import Iicon from 'react-native-vector-icons/Ionicons';
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';

import Menu from '../Menu';
import CardBack from './CardBack';

const Index = props => {
  return (
    <Card style={{height: 200, borderColor: 'white', borderRadius: 10}}>
      <View style={{borderColor: 'black'}}>
        <CardItem header>
          <Text style={{fontSize: 10, opacity: 0.5}}>{props.NewItem.name}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              source={{
                uri: props.NewItem.image,
              }}
              style={{height: 300, width: 100}}
            />
          </Body>
        </CardItem>
      </View>
    </Card>
  );
};
export default Index;
