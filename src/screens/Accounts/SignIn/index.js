import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View} from 'react-native';
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
const Index = props => {
  return (
    <View>
      <Button
        style={{backgroundColor: 'white'}}
        light
        onPress={() => {
          props.navigation.navigate('SignUp');
        }}>
        <Icon name="stream" size={25} />
      </Button>
    </View>
  );
};
export default Index;
