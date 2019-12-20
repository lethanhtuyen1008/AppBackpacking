import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
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
const result = () => {
  const [activeHeart, setActiveHeart] = useState(false);
  return (
    <View>
      <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  'https://i-dulich.vnecdn.net/2019/03/16/1-3-1552732057_680x0.jpg',
              }}
              resizeMode="contain"
            />
            <Body>
              <Text>Lê Thanh Tuyên</Text>
              <Text note>Thứ Ba lúc 19 : 50</Text>
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
        <CardItem>
          <Body>
            <Image
              source={{
                uri:
                  'https://i-dulich.vnecdn.net/2019/03/16/1-3-1552732057_680x0.jpg',
              }}
              style={{height: 200, width: '100%'}}
            />
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Icon name="like2" size={20} />
            </Button>
            <Text style={{paddingRight: 10}}>23</Text>
          </Left>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Evicon name="comment" size={20} />
            </Button>
            <Text>50</Text>
          </Left>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Icon name="sharealt" size={20} />
            </Button>
            <Text>Share</Text>
          </Left>
        </CardItem>
      </Card>
    </View>
  );
};
export default result;
