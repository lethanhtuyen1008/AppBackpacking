import React, { Component, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Button,
  Container, Header,
  Fab,
} from 'native-base';
import { Col, Row } from 'react-native-easy-grid';
import EvIcon from 'react-native-vector-icons/EvilIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import Tabs from '../Tabs';
import Item from './Item';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      activeTab: 0,
      actiressult: ''
    }
  }
  RoutesMap = (name) => {
    this.props.navigation.navigate(name);
    //console.log(name);
  }
  render() {
    const data = [
      {
        avatar: 'https://i-dulich.vnecdn.net/2019/03/16/1-3-1552732057_680x0.jpg',
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
        image: 'http://thuthuatphanmem.vn/uploads/2018/08/21/hinh-nen-thien-nhien-phong-canh-dep-8_043142233.jpg',
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
      <Container style={{ backgroundColor: 'white' }}>
        <Header style={{ paddingTop: 10, backgroundColor: 'white' }}>
          <Text style={styles.cssPad}>Lịch trình của tôi</Text>
        </Header>
        <Row
          style={{
            paddingLeft: '10%',
            paddingRight: '10%',
            paddingTop: 10,
            justifyContent: 'center',
            // borderColor: '#CFCFCF',
            // borderWidth: 1,
            height: 70,
          }}>
          <Col>
            <Button
              block
              light
              onPress={() => this.RoutesMap('UpComing')}
              style={{
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: this.state.activeTab == 0 ? '#3399FF' : '#FFFFFF',
              }}>
              <Text style={{ color: this.state.activeTab == 0 ? '#ffffff' : '#3399FF' }}>
                Đang đi
              </Text>
            </Button>
          </Col>
          <Col>
            <Button
              onPress={() => this.RoutesMap('Transit')}
              style={{ backgroundColor: this.state.activeTab == 1 ? '#3399FF' : '#FFFFFF' }}
              block>
              <Text style={{ color: this.state.activeTab == 1 ? '#FFFFFF' : '#3399FF' }}>
                Sắp tới
              </Text>
            </Button>
          </Col>
          <Col>
            <Button
              light
              onPress={() => this.RoutesMap('Went')}
              block
              style={{
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                backgroundColor: this.state.activeTab == 2 ? '#3399FF' : '#FFFFFF',
              }}>
              <Text style={{ color: this.state.activeTab == 2 ? '#FFFFFF' : '#3399FF' }}>
                Đã đi
              </Text>
            </Button>
          </Col>
        </Row>
        <ScrollView style={{ padding: 5, borderRadius: 20, backgroundColor: 'white' }}>
          <View style={{ padding: 5 }}>
            {data.map((item, index) => {
              return <Item data={item} key={index} RoutesMap={this.RoutesMap} />;
            })}
          </View>
        </ScrollView>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#3399FF' }}
          position="bottomRight"
          onPress={() => this.RoutesMap("AddSchedule")}>
          <Icon name="plus" />
        </Fab>
      </Container >
    );
  };
}
export default index;
