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
  Icon,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import IconA from 'react-native-vector-icons/AntDesign';
import Iicon from 'react-native-vector-icons/Ionicons';
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';
import {database} from 'firebase';
const Index = props => {
  const showStar = n => {
    const x = [];
    for (var i = 0; i < n; i++) {
      x.push(<Icon name="star" style={{color: '#FFBF00', fontSize: 20}} />);
    }
    return x;
  };
  return (
    <View style={{flex: 0, width: 200}}>
      <CardItem>
        <Body>
          <Image
            source={{
              uri: props.data.image,
            }}
            style={{height: 120, width: '100%', flex: 1, borderRadius: 10}}
          />
        </Body>
      </CardItem>
      <CardItem style={{paddingTop: 0}}>
        <Left>
          <Text>{props.data.name}</Text>
        </Left>
      </CardItem>
      <CardItem style={{paddingTop: 0}}>
        <Left>{showStar(props.data.rate)}</Left>
      </CardItem>
    </View>
  );
};
export default Index;
