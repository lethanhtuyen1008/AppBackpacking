import React, { useEffect, useState } from 'react';
import { firebaseApp } from '../../../../firebase/firebaseConfig.js';
import { useSelector, useDispatch } from 'react-redux';
// import FastImage from 'react-native-fast-image';
import styles from './styles';
import {
  View,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
  Platform,
  AsyncStorage,
} from 'react-native';
import {
  Container,
  Content,
  Spinner,
  Button,
  Text,
  Form,
  Item,
  Input,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EIcon from 'react-native-vector-icons/Entypo';
//mport RNFetachBlob from 'react-native-fetch-blob';

const Index = props => {
  // var options = {
  //   title: 'Select Image',
  //   customButtons: [
  //     {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
  //   ],
  //   storageOptions: {
  //     skipBackup: true,
  //     path: 'images',
  //   },
  // };
  // const uploadImage = (uri, mine = 'application/octet-stream') => {
  //   return new Promise((resolve, reject) => {
  //     const upLoadUri =
  //       Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
  //     const sessionId = new Date().getTime();
  //     let uploadBlob = null;
  //     const imageRef = storage
  //       .ref('image_upoad_user')
  //       .child(`${sessionId}.jpg`);
  //     fs.readFile(upLoadUri, 'base64')
  //       .then(data => {
  //         return Blob.build(data, {typ: `${mine}; BASE64`});
  //       })
  //       .then(blob => {
  //         uploadBlob = blob;
  //         return imageRef.put(blob, {contentType: mine});
  //       })
  //       .then(() => {
  //         uploadBlob.close();
  //         return imageRef.getDownloadURL();
  //       })
  //       .then(url => {
  //         resolve(url);
  //       })
  //       .catch(error => {
  //         reject(error);
  //       });
  //   });
  // };
  // const [imageurl, setImageurl] = useState();
  // const pickImage = () => {
  //   ImagePicker.showImagePicker(options, response => {
  //     setImageurl('');
  //     if (response.didCancel) {
  //     } else if (response.error) {
  //     } else if (response.customButton) {
  //     } else {
  //       uploadImage(response.uri)
  //         .then(url => setImageurl(url))
  //         .catch(error => console.log(error));
  //       // let source = response;
  //       // // You can also display the image using data:
  //       // // let source = { uri: 'data:image/jpeg;base64,' + response.data };
  //       // setImageurl(source);
  //     }
  //   });
  // };
  // const storage = firebaseApp.storage();
  // const Blob = RNFetachBlob.polyfill.Blob;
  // const fs = RNFetachBlob.fs;
  // window.XMLHttpRequest = RNFetachBlob.polyfill.XMLHttpRequest;
  // window.Blob = Blob;
  // up hình
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const login = () => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert(
          'Alert Title',
          'Đăng nhập thành công ' + email,
          [
            {
              text: 'Ask me later',
              onPress: () => console.log('Ask me later pressed'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => props.navigation.navigate('Home') },
          ],
          { cancelable: false },
          setPassword(''),
          setEmail(''),
        );
      })
      .catch(function (error) {
        Alert.alert(
          'Alert Title',
          'Đăng nhập thất bại',
          [
            {
              text: 'Ask me later',
              onPress: () => console.log('Ask me later pressed'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        );
      });
  };
  const uri = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
  return (

    <ScrollView>
      <Content style={styles.cssPage}>
        <Text style={styles.cssLogin}>Đăng nhập</Text>
        <Text style={styles.cssQuick}>Backpacking</Text>
        <Form>
          <View style={styles.cssPaddBott}>
            <Item style={styles.cssFormNho}>
              <Icon name="user-alt" style={styles.IconUser} />
              <Input
                placeholder="Tên đăng nhập"
                style={styles.colortext2}
                onChangeText={text => setEmail(text)}
              />
            </Item>
          </View>
          <View>
            <Item style={styles.cssFormNho}>
              <Icon
                active
                name="lock"
                style={(styles.Icon, styles.IconPassWord)}
              />
              <Input
                placeholder="Mật khẩu"
                style={styles.colortext2}
                onChangeText={text => setPassword(text)}
              />
            </Item>
          </View>
          <View style={styles.cssViewFor}>
            <TouchableOpacity>
              <Text style={styles.cssPF}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Row>
              <Col style={styles.cssCol1}></Col>
              <Col style={(styles.cssViewBtnDN, styles.cssCol2)}>
                <Button
                  rounded
                  success
                  style={{ justifyContent: 'center' }}
                  onPress={login}>
                  <Text>Đăng nhập</Text>
                </Button>
                <Text style={styles.cssOrS}>Hoặc đăng nhập bằng</Text>
                <View style={styles.IconList}>
                  <View>
                    <EIcon
                      name="facebook-with-circle"
                      style={styles.IconFB}
                    />
                  </View>
                  <View>
                    <Icon name="google-plus" style={styles.IconGG} />
                  </View>
                  <View>
                    <Icon name="twitter" style={styles.IconTW} />
                  </View>
                </View>
                <View>
                  <Text style={styles.cssOrS}>Bạn chưa có tài khoản?</Text>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('Login');
                    }}>
                    <Text style={styles.btnDk}>Đăng ký</Text>
                  </TouchableOpacity>
                </View>
              </Col>
              <Col style={styles.cssCol3}></Col>
            </Row>
          </View>
        </Form>
      </Content>
    </ScrollView>

    //   <View>
    //     {(() => {
    //       switch (imageurl) {
    //         case null:
    //           return null;
    //         case '':
    //           return <ActivityIndicator />;
    //         default:
    //           return (
    //             <View>
    //               <FastImage
    //                 style={{width: 200, height: 200}}
    //                 source={{
    //                   uri: imageurl,
    //                   headers: {Authorization: 'someAuthToken'},
    //                   priority: FastImage.priority.normal,
    //                 }}
    //                 resizeMode={FastImage.resizeMode.contain}
    //               />
    //               <Text>{imageurl}</Text>
    //             </View>
    //           );
    //       }
    //     })()}
    //     <TouchableOpacity onPress={pickImage}>
    //       <Text>Up ảnh</Text>
    //     </TouchableOpacity>
    //   </View>
  );
};
export default Index;
