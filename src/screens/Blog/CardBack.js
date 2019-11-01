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
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/AntDesign';
import Iicon from 'react-native-vector-icons/Ionicons';
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';
const Index = ({tuyen}) => {
  return (
    <Card style={{flex: 0}}>
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri:
                'https://evening-refuge-27360.herokuapp.com/api/images/' 
            }}
            resizeMode="contain"
          />
          <Body>
            <Text>Lê Thanh Tuyên</Text>
            <Text note>Thứ Ba lúc 19 : 50</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Text>Nội dung giới thiệu</Text>
          <Image
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2017/09/14/11/13/water-2748657__340.png',
            }}
            style={{height: 200, width: 370, flex: 1}}
          />
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent textStyle={{color: '#87838B'}}>
            <Icon name="like2" size={20} />
          </Button>
          <Text style={{paddingRight: 10}}>23</Text>
        </Left>
        <Left>
          <Button transparent textStyle={{color: '#87838B'}}>
            <Evicon name="comment" size={20} />
          </Button>
          <Text>50</Text>
        </Left>
        <Left>
          <Button transparent textStyle={{color: '#87838B'}}>
            <Icon name="sharealt" size={20} />
          </Button>
          <Text>Share</Text>
        </Left>
      </CardItem>
    </Card>
  );
};
export default Index;
