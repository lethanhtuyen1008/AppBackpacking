import React from 'react';
import {View, TextInput} from 'react-native';
import {Container, Button, Text} from 'native-base';
import {firebaseApp} from '../../firebase/firebaseConfig.js';
// import {Col, Row, Grid} from 'react-native-easy-grid';
import * as firebase from 'firebase';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import Search from '../Home/Search';
const Index = props => {
  const itemRef = firebaseApp.database();
  //set lai bangr hoac data cua id
  const setDB = () => {
    itemRef.ref('Tinh').set({
      1: 'Quang Ngai',
      2: 'Binh Dinh',
      3: 'Nghe An 1',
    });
  };

  // them moi mot data, hoac bang
  const putDB = () => {
    itemRef.ref('DacSan').push({
      1: 'Mach Nha',
    });
  };
  // them moi data vao bang, hoac them bang moi child
  const pushChild = () => {
    itemRef
      .ref('DacSan')
      .child('ThongTinDacSan')
      .push({
        Ten: 'Mach Nha',
        Gia: 5000,
        DiaChi: '150 QL 1A',
      });
    console.log('hello add');
  };
  const addDB = () => {
    itemRef
      .ref('Tinh')
      .child('DD001')
      .on('value', function(snapshot) {
        alert(snapshot.val());
      });
    console.log('hello');
  };
  return (
    <Container>
      {/* <Search /> */}
      <Button onPress={() => setDB()}>
        <Text>set data</Text>
      </Button>
      <Button onPress={() => putDB()}>
        <Text>Them data</Text>
      </Button>
      <Button onPress={() => pushChild()}>
        <Text>Them data child</Text>
      </Button>
      <Button onPress={() => addDB()}>
        <Text>add data child</Text>
      </Button>
      <View>
        <TextInput style={{backgroundColor: 'black'}}></TextInput>
      </View>
    </Container>
  );
};
export default Index;
