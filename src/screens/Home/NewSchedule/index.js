import React, { useState } from 'react';
import { ScrollView, ImageBackground, Image } from 'react-native';
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
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/AntDesign';
import Iicon from 'react-native-vector-icons/Ionicons';
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';
import CardSchedule from './CardSchedule';
import Title from '../Title';
const Index = (props) => {
  const data = [
    {
      avatar: 'https://aphoto.vn/wp-content/uploads/2018/02/anh-chup-dien-thoai-dep.jpg',
      name: 'Lê Thanh Tuyên',
      datetime: 'Thứ ba lúc 8 : 54',
      check: false,
      image: 'http://thuthuatphanmem.vn/uploads/2018/08/21/hinh-nen-thien-nhien-phong-canh-dep-8_043142233.jpg',
      like: 45,
      comments: 67,
    },
    {
      avatar: 'https://i-dulich.vnecdn.net/2019/03/16/1-3-1552732057_680x0.jpg',
      name: 'Nguyễn Minh',
      datetime: 'Thứ tư lúc 6 : 45',
      check: false,
      image: 'https://aphoto.vn/wp-content/uploads/2018/02/anh-chup-dien-thoai-dep.jpg',
      like: 12,
      comments: 47,
    },
    {
      avatar: 'https://i-dulich.vnecdn.net/2019/03/16/1-3-1552732057_680x0.jpg',
      name: 'Lê Nguyễn Thanh Thanh',
      datetime: 'Thứ bảy lúc 19 : 34',
      check: false,
      image: 'https://i.pinimg.com/originals/b1/94/0e/b1940eb27d12eadbcdaa86dca0f1037d.jpg',
      like: 23,
      comments: 47,
    },
    {
      avatar: 'https://i-dulich.vnecdn.net/2019/03/16/1-3-1552732057_680x0.jpg',
      name: 'Lê Thanh Tuyên',
      datetime: 'Thứ năm lúc 9 : 34',
      check: false,
      image: 'https://wallpaperplay.com/walls/full/f/f/1/122862.jpg',
      like: 56,
      comments: 27,
    },
    {
      avatar: 'https://i-dulich.vnecdn.net/2019/03/16/1-3-1552732057_680x0.jpg',
      name: 'Lê Thanh Tuyên',
      datetime: 'Thứ năm lúc 9 : 34',
      check: false,
      image: 'https://img3.goodfon.com/wallpaper/nbig/3/16/snake-river-teton-range-rocky.jpg',
      like: 56,
      comments: 27,
    },
    {
      avatar: 'https://i-dulich.vnecdn.net/2019/03/16/1-3-1552732057_680x0.jpg',
      name: 'Lê Thanh Tuyên',
      datetime: 'Thứ năm lúc 9 : 34',
      check: false,
      image: 'http://a9.vietbao.vn/images/vn999/22/2015/07/20150723-thac-ban-gioc-tien-canh-me-hon-giua-chon-tran-gian-1.jpg',
      like: 56,
      comments: 27,
    },
    {
      avatar: 'https://i-dulich.vnecdn.net/2019/03/16/1-3-1552732057_680x0.jpg',
      name: 'Lê Thanh Tuyên',
      datetime: 'Thứ năm lúc 9 : 34',
      check: false,
      image: 'https://hinhdep.com.vn/wp-content/uploads/2014/01/phong-canh-dep-6.jpg',
      like: 56,
      comments: 27,
    },
    {
      avatar: 'https://i-dulich.vnecdn.net/2019/03/16/1-3-1552732057_680x0.jpg',
      name: 'Lê Thanh Tuyên',
      datetime: 'Thứ năm lúc 9 : 34',
      check: false,
      image: 'https://images8.alphacoders.com/701/701633.jpg',
      like: 56,
      comments: 27,
    },
  ];
  return (
    <View>
      <Title title="Lịch trình được tạo gần đây" link="New" routerMap={props.routerMap} />
      <ScrollView horizontal={true}>
        {
          data.map((item, index)=>{
            return <CardSchedule data={item} key={index}/>
          })
        }
        
      </ScrollView>
    </View>
  );
};
export default Index;
