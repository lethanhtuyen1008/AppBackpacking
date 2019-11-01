import React, {useState} from 'react';
import {ScrollView, ImageBackground, Image} from 'react-native';
import {createAppContainer, navigationOptions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
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
  Left,
  Body,
  Right,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/AntDesign';
import Iicon from 'react-native-vector-icons/Ionicons';
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';

const Index = props => {
  const [showSearch, setshowSearch] = useState(true);
  const onClickItemMenu = name => {
    props.navigation.navigate(name);
  };
  const ColorMenu = 'red';
  return (
    <Header
      style={{
        backgroundColor: 'white',
        borderColor: 'white',
        padding: 5,
        paddingTop: 5,
      }}>
      <Left style={{borderColor: 'white'}}>
        <View style={{width: 340}}>
          <Eicon name="qq" size={40} color={ColorMenu} />
        </View>
      </Left>
      <Body>
        <View style={{backgroundColor: '#F2F2F2', borderRadius: 20, paddingLeft : 10}}>
          <Input
            placeholder="Search"
            style={{
              width: 260,
              display: showSearch ? 'none' : 'flex',
            }}
          />
        </View>
      </Body>
      <Right>
        <Button
          onPress={() => setshowSearch(!showSearch)}
          style={{
            width: 45,
            borderRadius: 30,
            backgroundColor: '#F2F2F2',
            display: showSearch ? 'flex' : 'none',
          }}>
          <Icon name="search1" color={ColorMenu} style={{padding: 10}} />
        </Button>
        <Button
          onPress={() => setshowSearch(!showSearch)}
          style={{
            width: 45,
            borderRadius: 30,
            backgroundColor: '#F2F2F2',
            display: showSearch ? 'none' : 'flex',
          }}>
          <Icon name="close" color={ColorMenu} style={{padding: 10}} />
        </Button>
      </Right>
    </Header>
  );
};
export default Index;
