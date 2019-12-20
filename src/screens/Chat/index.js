import React from 'react';
import { List, Left, Body, Right, Thumbnail, Content, Container } from 'native-base';
import { Header } from 'native-base';
import { View, Text, Button } from 'react-native';
import Item from './Item';
import Icon from 'react-native-vector-icons/Entypo'
import { ScrollView } from 'react-native-gesture-handler';
const Index = props => {
  const data1 = [
    {
      avatar: 'https://i-dulich.vnecdn.net/2019/03/16/1-3-1552732057_680x0.jpg',
      name: 'Thùy Ngân',
      time: '2:20 pm',
      description: 'Bạn đang ở đâu ?',
    },
    {
      avatar: 'https://hinhnendep.xyz/wp-content/uploads/2017/11/hinh_nen_ngay_nang_4.jpg',
      name: 'Lê Thanh Tuyên',
      time: '5:20 pm',
      description: 'Hôm nay mình đi đâu đây ?',
    },
    {
      avatar: 'http://vuanhiepanh.com/uploads/news/ky-thuat-nhiep-anh/ky-thuat-chup-anh/chup-nguoc-sang/3-chup-nguoc-sang.jpg',
      name: 'Nguyễn Bảo Thân',
      time: '8:20 am',
      description: 'Một nơi rất đẹp ?',
    },
    {
      avatar: 'https://anhdephd.com/wp-content/uploads/2017/05/hinh-nen-phim-angry-bird-dep-nhat.jpg',
      name: 'Trương Hữu Thăng',
      time: '8:20 am',
      description: 'Chào mọi người ?',
    },
    {
      avatar: 'http://thuthuatphanmem.vn/uploads/2018/04/10/hinh-nen-bong-hong-dep_052333650.jpg',
      name: 'Đỗ Duy Trí',
      time: '8:20 am',
      description: 'Tôi biết một nơi rất đẹp ?',
    },
    {
      avatar: 'https://sudospaces.com/thanhtrungmobile-vn/2019/09/hinh-nen-dep-cho-dien-thoai-oppo-23.jpg',
      name: 'Lê Huỳnh Thạch',
      time: '8:20 am',
      description: 'Bạn đang ở đâu ?',
    },
    {
      avatar: 'https://chiasemeohay.com/wp-content/uploads/2018/10/20-bi-quyet-de-chup-hinh-dep-ban-nen-bo-tui-ngay-tu-bay-gio-7.jpg',
      name: 'Nguyễn Đức Tài',
      time: '8:20 am',
      description: 'Bạn đang ở đâu ?',
    },
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXsISRJa2FJULHMmHnHMQbo3cCzz0V83buFa6-SUFmsBPkqOTS&s',
      name: 'Lê Thanh Hoàng',
      time: '8:20 am',
      description: 'Bạn đang ở đâu ?',
    },
  ];
  return (
    <Container>
      <Header style={{ backgroundColor: 'white' }}>
        <Left>
          <Thumbnail
            source={{
              uri: 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_22/image003_4.jpg',
            }}

            style={{ borderRadius: 40, height: 50, width: 50 }}
          />
        </Left>
        <Body>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Chat</Text>
        </Body>
        <Right>
          <Icon name="chat" style={{ fontSize: 30 }} />
        </Right>
      </Header>
      <Content>
        <ScrollView>
          <List>
            {data1.map((item, index) => {
              return <Item data={item} key={index} />;
            })}
          </List>
        </ScrollView>
      </Content>
    </Container>
  );
};
export default Index;

// import React, { Component } from 'react';
// import {View, Text } from 'react-native';
// import {Header} from 'native-base';

// export default class index extends Component {
//   render() {
//     return (
//       <View>
//         <Header /><Text>tuyen</Text></View>
//     )
//   }
// }
