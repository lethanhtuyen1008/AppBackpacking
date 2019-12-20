// import React, { useState, useEffect } from 'react';
// import { ScrollView, ImageBackground, Image } from 'react-native';
// import {
//     Content,
//     Button,
//     Text,
//     View,
//     Fab,
//     Item,
//     Input,
//     Card,
//     CardItem,
//     Body,
//     Thumbnail,
//     Left,
//     Right,
// } from 'native-base';
// import styles from './styles.js'
// import { Col, Row, Grid } from 'react-native-easy-grid';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Iicon from 'react-native-vector-icons/Ionicons';
// import Eicon from 'react-native-vector-icons/Entypo';
// import Evicon from 'react-native-vector-icons/EvilIcons';
// import { firebaseApp } from '../../../../../../firebase/firebaseConfig.js';
// const Index = (props) => {
//     const data = props.data;
//     const itemRef = firebaseApp.database();
//     const [ten, setTen] = useState('');
//     useEffect(() => {
//         itemRef.ref('DiaDiem').on('child_added', function (dataSnapShot) {
//             if (dataSnapShot.val().MaDD === data.MaDD) {
//                 setTen(dataSnapShot.val().TenDD);
//             }
//         })
//     });
//     return (
//         <View style={{ flex: 0 }}>
//             {/* <Text>tuyen</Text> */}
//             <CardItem>
//                 <Body>
//                     <Image
//                         source={{
//                             uri:
//                                 data.Hinh,
//                         }}
//                         style={{ height: 150, width: 200, flex: 1, borderRadius: 10 }}
//                     />
//                 </Body>
//             </CardItem>
//             <CardItem style={{ paddingTop: 0 }}>
//                 <Left>
//                     <Text>{ten}</Text>
//                 </Left>
//             </CardItem>
//             <CardItem style={{ paddingTop: 0 }}>
//                 <Left>
//                     <Text style={styles.cssTxt}>Địa điểm</Text>
//                     <Text style={styles.cssPrice}>{data.MaDD}</Text>
//                     <Text style={styles.cssTxt}>Số giờ</Text>
//                     <Text style={styles.cssPrice}>{data.SoGio}</Text>
//                 </Left>
//             </CardItem>
//         </View >
//     );
// };
// export default Index;

import React, {useState, useEffect} from 'react';
import {ScrollView, ImageBackground, Image} from 'react-native';
import {
  Content,
  Button,
  Text,
  View,
  Fab,
  Item,
  Input,
  Card,
  CardItem,
  Body,
  Thumbnail,
  Left,
  Right,
} from 'native-base';
import styles from './styles.js';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/AntDesign';
import Iicon from 'react-native-vector-icons/Ionicons';
import Eicon from 'react-native-vector-icons/Entypo';
import Evicon from 'react-native-vector-icons/EvilIcons';
import {firebaseApp} from '../../../../../../firebase/firebaseConfig.js';
const Index = props => {
  const data = props.data;
  const itemRef = firebaseApp.database();
  const [ten, setTen] = useState('');
  useEffect(() => {
    itemRef.ref('DiaDiem').on('child_added', function(dataSnapShot) {
      if (dataSnapShot.val().MaDD === data.MaDD) {
        setTen(dataSnapShot.val().TenDD);
      }
    });
  });
  return (
    <View style={{width: 230}}>
      {/* <Text>tuyen</Text> */}
      <CardItem>
        <Body>
          <Image
            source={{
              uri: data.Hinh,
            }}
            style={{height: 150, width: 200, flex: 1, borderRadius: 10}}
          />
        </Body>
      </CardItem>
      <CardItem
        style={{
          paddingTop: 0,
          //   borderColor: 'black',
          //   borderWidth: 1,
          height: 40,
        }}>
        <Left style={{width: 50}}>
          <Text>{ten}</Text>
        </Left>
      </CardItem>
      <CardItem style={{paddingTop: 0}}>
        <Left>
          <Text style={styles.cssTxt}>Địa điểm</Text>
          <Text style={styles.cssPrice}>{data.MaDD}</Text>
          <Text style={styles.cssTxt}>Số giờ</Text>
          <Text style={styles.cssPrice}>{data.SoGio}</Text>
        </Left>
      </CardItem>
    </View>
  );
};
export default Index;
