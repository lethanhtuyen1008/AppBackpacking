import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
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
import Iicon from 'react-native-vector-icons/Ionicons';
import Eicon from 'react-native-vector-icons/Entypo';

const App = props => {
  const [active, setActive] = useState(2);
  const ColorMenu = '#0F617A';
  return (
    <Footer>
      <FooterTab backgroundColor="white">
        <Button
          style={{backgroundColor: 'white'}}
          light
          onPress={() => {
            props.onClickItemMenu('Blog');
            setActive(1);
          }}>
          <Icon
            name="home"
            size={25}
            color={active === 1 ? ColorMenu : '#A4A4A4'}
          />
        </Button>
        <Button
          style={{backgroundColor: 'white'}}
          light
          onPress={() => {
            props.onClickItemMenu('Blog');
            setActive(2);
          }}>
          <Eicon
            name="direction"
            size={25}
            color={active == 2 ? ColorMenu : '#A4A4A4'}
          />
        </Button>
        <Button
          style={{backgroundColor: 'white'}}
          light
          onPress={() => {
            props.onClickItemMenu('Blog');
            setActive(3);
          }}>
          <Icon
            name="plus"
            size={25}
            color={active == 3 ? ColorMenu : '#A4A4A4'}
          />
          {/*<Text style={{fontSize: 8, color: active == 3 ? 'red' : 'black'}}>
            Tạo
        </Text>*/}
        </Button>
        <Button
          style={{backgroundColor: 'white'}}
          light
          onPress={() => {
            props.onClickItemMenu('Blog');
            setActive(4);
          }}>
          <Iicon
            name="ios-notifications"
            size={30}
            color={active == 4 ? ColorMenu : '#A4A4A4'}
          />
        </Button>
        <Button
          style={{backgroundColor: 'white'}}
          light
          onPress={() => {
            props.onClickItemMenu('Details');
            setActive(5);
          }}>
          <Icon
            name="stream"
            size={25}
            color={active == 5 ? ColorMenu : '#A4A4A4'}
          />
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default App;
