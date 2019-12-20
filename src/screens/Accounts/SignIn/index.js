import React, { useState } from 'react';
import * as firebase from 'firebase';
import { useSelector, useDispatch } from 'react-redux';
import { View, Alert, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Form,
  Item,
  Label,
  Input,
  CheckBox,
  ListItem,
  Spinner,
  Left,
  Body,
} from 'native-base';
import FIcon from 'react-native-vector-icons/Fontisto';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import EIcon from 'react-native-vector-icons/Entypo';
import { firebaseApp } from '../../../../firebase/firebaseConfig.js';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
const Index = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [check, setCheck] = useState(false);
  const signup = () => {
    console.log(email, 'dang ki', password);
    //<Spinner />;
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert(
          'Alert Title',
          'Đăng kí thành công ' + email,
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
          'Đăng kí thất bại',
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
  return (
    <Container>
      {/* <ImageBackground source={{
        uri:
          'http://fantasea.vn/wp-content/uploads/2018/09/Kusaki-Dam-Lake.jpg'
      }} style={{ width: '100%', height: '100%' }}> */}
        <Header
          style={{
            backgroundColor: 'white',
            //borderBottomColor: '#CFCFCF',
            borderBottomWidth: 1,
          }}>
          <Left>
            <EIcon
              name="chevron-thin-left"
              style={{ fontSize: 30 }}
              onPress={() => props.navigation.navigate('SignUp')}
            />
          </Left>
          <Body></Body>
        </Header>

        <ScrollView>
          <Content style={styles.cssPage}>
            <Text style={styles.cssSignUp}>Đăng ký</Text>
            <Form>
              {/* <View style={styles.cssPaddBott}>
              <Item style={styles.cssFormNho}>
                <Icon name="user-alt" style={styles.IconUser} />
                <Input
                  placeholder="Tên tài khoản"
                  style={styles.colortext2}
                  onChangeText={text => setEmail(text)}
                />
              </Item>
            </View> */}

              {/* <View>
              <Item style={styles.cssFormNho}>
                <Icon
                  active
                  name="phone"
                  style={(styles.Icon, styles.IconPassWord)}
                />
                <Input
                  placeholder="Điện thoại"
                  style={styles.colortext2}
                  onChangeText={text => setPassword(text)}
                />
              </Item>
            </View> */}

              <View>
                <Item style={styles.cssFormNho}>
                  <MIcon
                    active
                    name="email"
                    style={(styles.Icon, styles.IconPassWord)}
                  />
                  <Input
                    placeholder="Email"
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

              {/* <View>
              <Item style={styles.cssFormNho}>
                <Icon
                  active
                  name="lock"
                  style={(styles.Icon, styles.IconPassWord)}
                />
                <Input
                  placeholder=" Xác nhận mật khẩu"
                  style={styles.colortext2}
                  onChangeText={text => setPassword(text)}
                />
              </Item>
            </View> */}

              <View>
                <ListItem style={styles.cssDY}>
                  <CheckBox
                    checked={check}
                    color="green"
                    onPress={() => setCheck(!check)}
                    style={{ borderRadius: 20 }}
                  />
                  <Text style={styles.paddingT}>
                    Tôi đồng ý với các điều khoản
                </Text>
                </ListItem>
              </View>

              <View>
                <Row>
                  <Col style={styles.cssCol1}></Col>
                  <Col style={(styles.cssViewBtnDK, styles.cssCol2)}>
                    <Button
                      rounded
                      success
                      style={{ justifyContent: 'center' }}
                      onPress={signup}>
                      <Text>Tạo tài khoản</Text>
                    </Button>
                  </Col>
                  <Col style={styles.cssCol3}></Col>
                </Row>
              </View>
            </Form>
          </Content>
        </ScrollView>
      {/* </ImageBackground> */}
    </Container>
  );
};
export default Index;
