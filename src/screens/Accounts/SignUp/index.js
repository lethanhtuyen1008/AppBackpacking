import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Image, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getToursList} from '../redux/actions';
const Index = props => {
  const product = useSelector(state => state.ProductReducer.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToursList());
  });
  //console.log("tuyen", product)
  const data = product;
  return (
    <View>
      <Button
        style={{backgroundColor: 'white'}}
        light
        onPress={() => {
          props.navigation.navigate('Login');
        }}>
        <Icon name="home" size={25} />
      </Button>
      <ScrollView>
        {data.map((tour, index) => {
          return (
            <View key = {index}>
              <Text>{tour.name_tour}</Text>
              <Text>{tour.rate}</Text>
              <Image
                style={{width: 100, height: 100}}
                source={{
                  uri: 'https://evening-refuge-27360.herokuapp.com/api/images/'+tour.image,
                }}
                resizeMode = "contain"
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default Index;
