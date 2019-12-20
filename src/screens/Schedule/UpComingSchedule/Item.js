import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';
import Evicon from 'react-native-vector-icons/EvilIcons';
import IoIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
const result = (props) => {
  const data = props.data;
  const [activeHeart, setActiveHeart] = useState(false);
  return (
    <View style={{ paddingBottom: 10 }}>
      <View style={{ backgroundColor: 'white', borderRadius: 15, borderColor: '#BDBDBD', borderWidth: 1, shadowColor: 'red', shadowOffset: 6 }}>
        <Card transparent style={{ flex: 0, BorderRadius: 20, shadowColor: 'red', shadowOpacity: 10 }} button onPress={() => alert("click card")}>
          <CardItem bordered  >
            <Left >
              <Thumbnail
                //style={{borderRadius :30}}
                source={require('./../../../../Images/hinh1.jpg')}
              />
              
              <Body bordered >
                <Text>{data.name}</Text>
                <Text note>{data.datetime}</Text>
              </Body>
              <Right>
                <IoIcon
                  name="ios-heart"
                  onPress={() => setActiveHeart(!activeHeart)}
                  style={{
                    fontSize: 30,
                    color: activeHeart == false ? 'lightgrey' : 'red',
                  }}
                />
              </Right>
            </Left>
          </CardItem>
          <CardItem button onPress={() => props.RoutesMap("Detail")}>
            <Body>
              <Image
                source={{
                  uri: data.image,
                }}
                style={{ height: 200, width: '100%', borderRadius: 10 }}
              />
            </Body>
          </CardItem>
          <CardItem button onPress={() => alert("click")}>
            <Text style={{ fontWeight: 'bold', fontSize: 15, fontStyle: 'italic' }}>3 ngày đi Hồ Chí Minh đến Đà Lạt</Text>
          </CardItem>
          <CardItem>

            <Evicon name="clock" style={{ fontSize: 30 }} />
            <Text>3 ngay |</Text>
            <Text> 27 km</Text>

          </CardItem>
        </Card>
      </View>
    </View>
  );
};
export default result;
