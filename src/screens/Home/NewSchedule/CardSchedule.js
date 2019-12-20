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
const Index = props => {
  return (
    <View style={{width: 350, padding: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 15,
          borderColor: '#BDBDBD',
          borderWidth: 1,
        }}>
        <Card
          transparent
          style={{
            flex: 0,
            BorderRadius: 20,
            shadowColor: 'red',
            shadowOpacity: 10,
          }}
          button
          onPress={() => alert('click card')}>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri: props.data.avatar,
                }}
                style={{borderRadius: 40}}
              />
              <Body>
                <Text>Lê Thanh Tuyên</Text>
                <Text note>Thứ Ba lúc 19 : 50</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem button onPress={() => alert('detail')}>
            <Body>
              {/* <Text>Nội dung giới thiệu</Text> */}
              <Image
                source={{
                  uri: props.data.image,
                }}
                style={{height: 200, width: '100%', flex: 1, borderRadius: 10}}
              />
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="like2" size={20} />
              </Button>
              <Text style={{paddingRight: 10}}>{props.data.like}</Text>
            </Left>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Evicon name="comment" size={20} />
              </Button>
              <Text>{props.data.comments}</Text>
            </Left>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="sharealt" size={20} />
              </Button>
              <Text>Share</Text>
            </Left>
          </CardItem>
        </Card>
      </View>
    </View>
  );
};
export default Index;
