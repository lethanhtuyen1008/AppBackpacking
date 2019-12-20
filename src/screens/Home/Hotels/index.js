import React, {useState} from 'react';
import {ScrollView, ImageBackground, Image} from 'react-native';
import {
  Content,
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
  Container,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/AntDesign';
import Iicon from 'react-native-vector-icons/Ionicons';
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';
import ItemHotel from './item';
import Title from '../Title';
const Index = props => {
  const data = [
    {
      id: 1,
      name: 'Antonico Villa Da Lat',
      price: 50000,
      image: 'hinh6.jpg',
      rate: 3,
    },
    {
      id: 2,
      name: 'Mille Fleurs Hotel',
      price: 50000,
      image: 'hinh2.jpg',
      rate: 3,
    },
    {
      id: 4,
      name: 'Da Lat Vivan',
      price: 50000,
      image: 'hinh3.jpg',
      rate: 3,
    },
    {
      id: 4,
      name: 'Nha Trang VE',
      price: 50000,
      image: 'hinh4.jpg',
      rate: 3,
    },
    {
      id: 5,
      name: 'Khanh Hoa Mart',
      price: 50000,
      rate: 3,
      image: 'hinh5.jpg',
    },
  ];
  return (
    <View>
      <Title title="Khách sạn HOT" link="Hotels" routerMap={props.routerMap} />
      <ScrollView horizontal={true}>
        {data.map((item, index) => {
          return <ItemHotel data={item} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};
export default Index;
