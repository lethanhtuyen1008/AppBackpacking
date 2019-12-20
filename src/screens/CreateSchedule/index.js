import React from 'react';
import {
  View,
  Text,
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Title,
  Thumbnail,
  StyleSheet,
} from 'native-base';
import TabTrip from './tabtrip';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const Index = () => {
  const uri =
    'https://chuyenxe.com/wp-content/uploads/2018/09/di-phuot-tai-huyen-can-gio.jpg';
  return (
    <View>
      <Header style={{height: 250}}>
        <Thumbnail
          square
          large
          source={{uri: uri}}
          style={{
            width: 500,
            height: 400,
          }}
        />
      </Header>

      <Header hasTabs />
      <Text>ok</Text>
      <Tabs>
        <Tab heading="Tab1">
          <TabTrip />
        </Tab>
      </Tabs>
    </View>
  );
};
export default Index;
