import React from 'react';
import { ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import { View, Text } from 'react-native';
const Index = props => {
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail
          source={{
            uri: props.data.avatar,
          }}
          style={{ borderRadius: 40 }}
        />
      </Left>
      <Body>
        <Text>{props.data.name}</Text>
        <Text note>{props.data.description}</Text>
      </Body>
      <Right>
        <Text>{props.data.time}</Text>
      </Right>
    </ListItem>
  );
};
export default Index;
