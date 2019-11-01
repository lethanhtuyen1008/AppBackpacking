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
  const ColorMenu = '#0F617A';
  return (
    <Header style={{backgroundColor: 'white', borderColor: 'white'}}>
      <Item style={{padding: 5, borderColor: 'white'}}>
        <View style={{width: 340, display: showSearch ? 'none' : 'flex'}}>
          <Input
            placeholder="Search"
            style={{
              borderRadius: 20,
              backgroundColor: '#F2F2F2',
              paddingLeft: 40,
            }}
          />
        </View>
      </Item>
      <Item style={{padding: 5}}>
        <View style={{width: 340, display: showSearch ? 'flex' : 'none'}}>
          <Eicon name="qq" size={40} color={ColorMenu} />
        </View>
      </Item>
      <Button
        onPress={() => setshowSearch(!showSearch)}
        style={{
          borderRadius: 25,
          backgroundColor: '#F2F2F2',
          display: showSearch ? 'flex' : 'none',
        }}>
        <Icon name="search1" color={ColorMenu} />
      </Button>
      <Button
        onPress={() => setshowSearch(!showSearch)}
        style={{
          borderRadius: 25,
          backgroundColor: '#F2F2F2',
          display: showSearch ? 'none' : 'flex',
        }}>
        <Icon name="close" color={ColorMenu} />
      </Button>
    </Header>
  );
};
export default Index;
