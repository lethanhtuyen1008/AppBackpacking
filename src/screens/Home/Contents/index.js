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
import Search from '../Search';
import Category from '../Category';
import NewSchedule from '../NewSchedule';
import BeautifulBeach from '../BeautifulBeach';
import Hotels from '../Hotels';
const Index = props => {
  const [slide, setSlide] = useState(50);
  const routerMap = (name, params) => {
    props.navigation.navigate(name);
    console.log(name);
  };
  return (
    <Container>
      <Search />
      <Content>
        <ScrollView>
          <Row>
            <Image
              style={{ margin: 0, width: '100%', height: 298 }}
              source={{
                uri:
                  'https://vcdn-vnexpress.vnecdn.net/2019/07/30/3-1564483263_680x0.jpg',
              }}
            />
          </Row>
          <Category routerMap={routerMap} />
          <Content style={{ padding: 10 }}>
            <View>
              <NewSchedule routerMap={routerMap} />
              <BeautifulBeach routerMap={routerMap} />
              <Hotels />
            </View>
          </Content>
        </ScrollView>
      </Content>
    </Container>
  );
};
export default Index;
