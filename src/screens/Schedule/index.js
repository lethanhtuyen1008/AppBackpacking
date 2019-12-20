import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import {
  Container,
  Header,
  Button,
  Text,
  Fab,
} from 'native-base';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EvIcon from 'react-native-vector-icons/EvilIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import { createAppContainer } from 'react-navigation';
import Root from './Routes.js';
import Tabs from './Tabs';

const Contents = createAppContainer(Root);
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

    return (
      <Container style={{ backgroundColor: '#E6E6E6' }}>
        <Header style={{ paddingTop: 10, backgroundColor: 'white' }}>
          <Text style={styles.cssPad}>Lịch trình của tôi</Text>
        </Header>
        <Tabs RoutesMap={this.RoutesMap} />
        <ScrollView>
          <Container>
            <Contents />
          </Container>
        </ScrollView>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#3399FF' }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="plus" />
          <Button style={{ backgroundColor: '#FFFFFF' }}>
            <EvIcon name="location" style={{ fontSize: 32, color: '#EE0000' }} />
          </Button>
          <Button style={{ backgroundColor: '#FFFFFF' }}>
            <EvIcon name="pencil" style={{ fontSize: 32, color: '#EE0000' }} />
          </Button>
          <Button disabled style={{ backgroundColor: '#FFFFFF' }}>
            <AIcon name="plus" style={{ fontSize: 32, color: '#EE0000' }} />
          </Button>
        </Fab>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  cssFormNho: {
    backgroundColor: '#fffafa',
  },
  cssPad: {
    paddingBottom: 20,
    fontFamily: 'Arial,Times New Roman',
    fontSize: 20,
  },
  cssPadBut: {
    paddingTop: 20,
  },

  cssP: {
    paddingTop: 460,
    paddingLeft: 320,
  },
  cssCor: {
    color: '#000000',
  },
  cssCor1: {
    color: '#3cb371',
  },
  cssCor2: {
    color: '#008080',
  },
  backCL: {
    justifyContent: 'center',
  },
  btn: {
    borderRadius: 30,
    width: 50,
  },
  btn1: {
    textAlign: 'center',
    paddingRight: 5,
    fontSize: 30,
  },
  btn: {
    borderRadius: 45,
    width: 45,
  },
  cssCorlor: {
    backgroundColor: '#e6e6fa',
  },
});
export default index;
