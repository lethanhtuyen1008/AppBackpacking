import React from 'react';
import {View, ScrollView} from 'react-native';
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
import Title from '../Title';
import CardBeach from './CardBeach';
const Index = props => {
  const data = [
    {
      id: 1,
      name: 'Mũi né',
      image:
        'https://wiki-travel.com.vn/Uploads/picture/myyen97-194118094127-bai-sao-phu-quoc.jpg',
      rate: 2,
    },
    {
      id: 2,
      name: 'Lan khê',
      image:
        'https://lamvubds.com/wp-content/uploads/2019/07/b%C3%A3i-d%C3%A0i-cam-ranh.jpg',
      rate: 4,
    },
    {
      id: 3,
      name: 'Mỹ Khê',
      image:
        'https://dulich.petrotimes.vn/stores/news_dataimages/minhquan/052018/11/09/in_article/3954_5.2.jpg',
      rate: 3,
    },
    {
      id: 4,
      name: 'Vũng tàu',
      image: 'https://media1-reatimes.cdn.vccloud.vn/media/uploaded/3/2018/10/11/dl.jpg',
      rate: 4,
    },
    {
      id: 5,
      name: 'Đà nẵng',
      image:
        'https://tourninhthuan.com.vn/wp-content/uploads/2018/06/goi-y-nhung-bai-bien-dep-o-viet-nam-trong-mua-he-nay-6-770x430.jpg',
      rate: 3,
    },
    {
      id: 6,
      name: 'Phan thiết',
      image:
        'http://kenhthoitiet.vn/wp-content/uploads/2018/11/bai-bien-mua-dong.jpg',
      rate: 3,
    },
    {
      id: 7,
      name: 'Nha trang',
      image:
        'https://hinhdep.com.vn/wp-content/uploads/2014/01/phong-canh-dep-6.jpg',
      rate: 4,
    },
  ];
  return (
    <View>
      <Title
        title="Bãi biển đẹp gần đây"
        link="Group"
        routerMap={props.routerMap}
      />
      <ScrollView horizontal={true}>
        {data.map((item, index) => {
          return <CardBeach data={item} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};
export default Index;
