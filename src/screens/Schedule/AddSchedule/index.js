import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';
import { firebaseApp } from '../../../../firebase/firebaseConfig.js'
import { Container, Header, Left, Body, Right, Content, ListItem, Item, DatePicker, Button } from 'native-base';
import {Actions} from 'react-navigation'
import EIcon from 'react-native-vector-icons/Entypo';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tinh: [],
      check: 0,
      modalVisible: false,
      MaTinh: '',
      TenTinh: '',
      TenTinhD: '',
      MaTinhD: '',
      NgayDi: new Date(),
      NgayVe: new Date()
    }
    this.itemRef = firebaseApp.database();
  }
  setNgayVe = (newDate) => {
    this.setState({ NgayVe: newDate });
  }
  setNgayDi = (newDate) => {
    this.setState({ NgayDi: newDate });
  }
  setModalVisible = (visible, x) => {
    this.setState({ modalVisible: visible });
    this.setState({ check: x });
  }
  listenForItem = () => {
    var dt = [];
    this.itemRef.ref('Tinh').on('child_added', (dataSnapshot) => {
      dt.push({
        nameT: dataSnapshot.val().TenT,
        des: dataSnapshot.val().MoTa,
        maT: dataSnapshot.val().MaT,
        key: dataSnapshot.key
      });
      this.setState({
        Tinh: dt
      })
      //console.log(this.state.Tinh);
    })
  }
  componentDidMount = () => {
    this.listenForItem(this.itemRef);
  }
  SelectItem = (ma, name) => {
    this.setModalVisible(!this.state.modalVisible);
    if (this.state.check === 1) {
      this.setState({
        TenTinh: name,
        MaTinh: ma
      })
    }
    else {
      this.setState({
        TenTinhD: name,
        MaTinhD: ma
      })
    }

  }
  addSchedule = () => {
    if (this.state.MaTinh === '' || this.state.MaTinhD === '') {
      Alert.alert("Chưa nhập đủ thông tin")
    }
    else {
      this.itemRef
        .ref('LichTrinh')
        .push({
          MaLT: "LT011",
          ThoiGianKH: this.state.NgayDi.toString().substr(4, 12),
          ThoiGianKT: this.state.NgayVe.toString().substr(4, 12),
          TinhXP: this.state.MaTinh,
          TinhD: this.state.MaTinhD,
        });
      this.props.navigation.navigate("Detail");
    }
  }
  RoutesMap = (name) => {
    this.props.navigation.navigate(name);
    //console.log(name);
  }
  render() {
    return (
      <Container>
        <Header
          style={{
            backgroundColor: 'white',
            borderBottomColor: 'white',
          }}>
          <Left>
            <EIcon
              name="chevron-thin-left"
              style={{ fontSize: 30 }}
              onPress={() => this.props.navigation.navigate('Transit')}
            />
          </Left>
          <Body style={{ justifyContent: 'center', alignItems: "center", fontSize: 30, color: 'red' }}>
            <Text style={{ fontSize: 17, paddingRight: 100 }}>Lên lịch trình</Text>
          </Body>
        </Header>
        <Content>
          <View style={{ marginTop: 22 }}>
            <Modal
              animationType="slide"
              transparent={false}
              //presentationStyle='pageSheet'
              //hardwareAccelerated={true}
              visible={this.state.modalVisible}
            >
              {
                this.state.Tinh.map((item, index) => {
                  // if (this.state.check === 1) {
                  //   if (item.MaT !== this.state.MaTinh) {
                  return (
                    <ListItem style={{ paddingBottom: 1 }} onPress={() => this.SelectItem(item.maT, item.nameT)}>
                      <Left>
                        <EIcon name="location-pin" style={{ fontSize: 30, paddingRight: 15, color: 'red' }} />
                        <Text style={{ fontSize: 17 }}>{item.nameT}</Text>
                      </Left>
                      <Right>
                        <Text style={{ color: '#848484', fontSize: 15, paddingBottom: 6 }}>{item.des}</Text>
                      </Right>
                    </ListItem>
                  )
                  //   }
                  // }
                })
              }
            </Modal>

            <TouchableHighlight>
              <Item style={{ paddingBottom: 10 }} onPress={() => {
                this.setModalVisible(true, 1);
              }}>
                <Left>
                  <EIcon name="location" style={{ color: 'black', fontSize: 20 }} />
                  <Text>Địa điểm xuất phát</Text>
                  <Text>{this.state.TenTinh}</Text>
                </Left>
              </Item>
            </TouchableHighlight>
            <TouchableHighlight>
              <Item style={{ paddingBottom: 10 }} onPress={() => {
                this.setModalVisible(true, 2);
              }}>
                <Left>
                  <EIcon name="location" style={{ color: 'black', fontSize: 20 }} />
                  <Text>Địa điểm đến</Text>
                  <Text>{this.state.TenTinhD}</Text>
                </Left>
              </Item>
            </TouchableHighlight>
            <DatePicker
              defaultDate={new Date(2019, 12, 20)}
              minimumDate={new Date(2019, 12, 9)}
              maximumDate={new Date(2030, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              backgroundColor="#3399FF"
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Ngày đi"
              textStyle={{ color: "red" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={this.setNgayDi}
              disabled={false}
            />
            <Text>
              Ngày đi: {this.state.NgayDi.toString().substr(4, 12)}
            </Text>
            <DatePicker
              defaultDate={new Date(2019, 12, 22)}
              minimumDate={new Date(2019, 12, 9)}
              maximumDate={new Date(2030, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Ngày về"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={this.setNgayVe}
              disabled={false}
            />
            <Text>
              Ngày về: {this.state.NgayVe.toString().substr(4, 12)}
            </Text>
          </View>
          <View style={{ padding: 20 }}>
            <Button onPress={this.addSchedule} style={{ justifyContent: 'center', backgroundColor: '#DF013A', borderRadius: 5 }}><Text style={{ color: 'white' }}>Tạo lịch trình</Text></Button>
          </View>
          {/* <Button onPress={() => this.props.navigation.push("Home")}><Text>Hello</Text></Button> */}
        </Content>

      </Container>
    );
  }
}

export default index;
