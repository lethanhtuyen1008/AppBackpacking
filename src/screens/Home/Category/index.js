import React, { useState } from 'react';
import { View, Slider, Image, ScrollView } from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Card,
  CardItem,
  Body,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Index = (props) => {
  const data = [
    {
      id: 1,
      name: "Khám phá",
      icon: "route",
      color: '#0174DF',
      link: "NewMap"
    },
    {
      id: 2,
      name: "Lịch trình",
      icon: "plane-departure",
      color: '#FF4000',
      link: "Schedules"
    },
    {
      id: 3,
      name: "Khách sạn",
      icon: "procedures",
      color: '#04B431',
      link: "Hotels"
    },
    {
      id: 4,
      name: "Ârm thực",
      icon: "mug-hot",
      color: '#9A2EFE',
      link: "Food"
    },
    {
      id: 5,
      name: "Bài viết",
      icon: "envira",
      color: '#0B3B17',
      link: "Blog"
    },
    {
      id: 6,
      name: "Bản đồ",
      icon: "map-marked-alt",
      color: '#01A9DB',
      link: "Map"
    },

  ]
  return (
    <View style={{ margin: 20 }}>
      <Row>
        {
          data.map((item, index) => {
            if (item.id < 4)
              return (
                <Col key={item.id}>
                  <Card>
                    <CardItem button footer onPress={() => props.routerMap(item.link)}>
                      <Icon
                        name={item.icon}
                        size={18}
                        style={{
                          color: 'white',
                          backgroundColor: item.color,
                          borderRadius: 20,
                          width: 30,
                          height: 30,
                          padding: 5,
                        }}
                      />
                      <Text style={{ paddingLeft: 10, fontSize: 10 }}>{item.name}</Text>
                    </CardItem>
                  </Card>
                </Col>
              )
          })
        }
      </Row>
      <Row>
        {
          data.map((item, index) => {
            if (item.id > 3)
              return (
                <Col key={item.id}>
                  <Card>
                    <CardItem button footer>
                      <Icon
                        name={item.icon}
                        size={18}
                        style={{
                          color: 'white',
                          backgroundColor: item.color,
                          borderRadius: 20,
                          width: 30,
                          height: 30,
                          padding: 5,
                        }}
                      />
                      <Text style={{ paddingLeft: 10, fontSize: 10 }}>{item.name}</Text>
                    </CardItem>
                  </Card>
                </Col>
              )
          })
        }
      </Row>
    </View>
  );
};
export default Index;
