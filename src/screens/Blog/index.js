import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView, ImageBackground, Image} from 'react-native';
import {createAppContainer, navigationOptions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
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
import {getToursList} from './redux/actions';
import Menu from '../Menu';
import CardBack from './CardBack';
import NewCard from './NewBack';
import Search from '..//Home/Search';

const Index = props => {
  const listNew = [
    {
      id: 0,
      name: 'Lê Thanh Tuyên',
      image:
        'https://png.pngtree.com/element_our/md/20180404/md_5ac49da6b9095.png',
    },
    {
      id: 1,
      name: 'Lê Nguyễn Mai Hương',
      image:
        'https://cdn.pixabay.com/photo/2015/10/27/08/51/autumn-1008520__340.png',
    },
    {
      id: 2,
      name: 'Trần Minh Tân',
      image:
        'https://png.pngtree.com/element_our/md/20180710/md_5b4443b09619e.png',
    },
    {
      id: 3,
      name: 'Lê Thị Thanh Tú',
      image:
        'https://png.pngtree.com/element_our/md/20180710/md_5b444bc316ce7.png',
    },
    {
      id: 4,
      name: 'Trần Minh Thuận',
      image:
        'https://png.pngtree.com/element_our/md/20180710/md_5b4443b09619e.png',
    },
  ];
  const ColorMenu = '#0F617A';
  const product = useSelector(state => state.ProductReducer.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToursList());
  });
  //console.log("tuyen", product)
  const data = product;
  return (
    <Container>
      <Search />
      <ScrollView style={{backgroundColor: 'white'}}>
        <Content>
          <View>
            <ScrollView horizontal={true}>
              {listNew.map((NewItem, index) => {
                return <NewCard NewItem={NewItem} key={index} />;
              })}
            </ScrollView>
          </View>
          <View>
            {data.map((itemdata, index) => {
              return (
                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail
                        source={{
                          uri:
                            'https://evening-refuge-27360.herokuapp.com/api/images/' +
                            itemdata.image,
                        }}
                        resizeMode="contain"
                      />
                      <Body>
                        <Text>{itemdata.name_tour}</Text>
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
                            'https://evening-refuge-27360.herokuapp.com/api/images/' +
                            itemdata.image,
                        }}
                        resizeMode="contain"
                        style={{height: 200, width: 370}}
                      />
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Icon name="like2" size={20} />
                      </Button>
                      <Text style={{paddingRight: 10}}>{itemdata.rate}</Text>
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
            })}
          </View>
        </Content>
      </ScrollView>
      <ScrollView>
        <Row>
          <Col></Col>
        </Row>
      </ScrollView>
    </Container>
  );
};
export default Index;
