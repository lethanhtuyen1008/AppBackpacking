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
} from 'native-base';
import styles from './styles.js';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/AntDesign';
import Iicon from 'react-native-vector-icons/Ionicons';
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';
const Index = props => {
  const data = props.data;
    var a = '../../../../../Images/hotels/'+ data.image;
  return (
    <View style={{flex: 0}}>
      <CardItem>
        <Body>
          <Image
            source={require('../../../../image/1.jpg')}
            //source={require()}
            style={{height: 150, width: 200, flex: 1, borderRadius: 10}}
          />
        </Body>
      </CardItem>
      <CardItem style={{paddingTop: 0}}>
        <Left>
          <Text>{data.name}</Text>
        </Left>
      </CardItem>
      <CardItem style={{paddingTop: 0}}>
        <Left>
          <Text style={styles.cssTxt}>Mỗi đêm</Text>
          <Text style={styles.cssPrice}>{data.price}</Text>
          <Text style={{textDecorationLine: 'underline'}}>đ</Text>
        </Left>
      </CardItem>
    </View>
  );
};
export default Index;
