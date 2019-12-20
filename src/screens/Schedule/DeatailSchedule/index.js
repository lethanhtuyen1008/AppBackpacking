import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, Image } from 'react-native';
import {
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Body,
    Tab, Tabs, ScrollableTab,
    TabHeading,
    Segment
} from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { firebaseApp } from '../../../../firebase/firebaseConfig.js'
import Icon from 'react-native-vector-icons/AntDesign';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EIcon from 'react-native-vector-icons/Entypo';
import ItemSch from './items/ItemSch';
import styles from './items/ItemSch/styles';
class ChuyenDiScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.itemRef = firebaseApp.database();
    }
    componentDidMount = () => {
        this.load();
    }
    load = () => {
        const list = [];
        this.itemRef.ref('ChiTietLT').on('child_added', function (datasnapShot) {
            console.log(datasnapShot.val().SoGio)
            list.push({
                MaLT: datasnapShot.val().MaLT,
                MaDD: datasnapShot.val().MaDD,
                SoGio: datasnapShot.val().SoGio,
                Hinh: datasnapShot.val().Hinh
            })
        })
        this.setState({
            data: list
        })
    }
    render() {
        // const data = [
        //     {
        //         id: 1,
        //         name: "Ngày 1",
        //         price: 7,
        //         hour: 3,
        //         image: 'https://s1.img.yan.vn/YanNews/2167221/201606/20160621-032042-w_600x399.jpg'
        //     },
        //     {
        //         id: 2,
        //         name: "Ngày 2",
        //         price: 5,
        //         hour: 3,
        //         image: 'https://vietnamhouse.vn/wp-content/uploads/2019/08/7d07d82db6.jpeg'
        //     },
        //     {
        //         id: 4,
        //         name: "Ngày 3",
        //         price: 9,
        //         hour: 3,
        //         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeStTKkb7gnlqqNnYGWNC2ikdtK5XucH2zqhq9pT0g8R6-bH2L'
        //     },
        // ]
        return (
            <Container style={{ padding: 5 }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lịch trình</Text>
                </View>
                <Content>
                    <ScrollView horizontal={true}>
                        {
                            this.state.data.map((item, index) => {
                                return <ItemSch data={item} key={index} />
                            })
                        }

                    </ScrollView>
                </Content>
            </Container>
        );
    }
}

class KhachSanScreen extends React.Component {
    render() {
        const data = [
            {
                id: 1,
                name: "Antonico Villa Da Lat",
                price: 50000,
                rate: 3,
                image: ''
            },
            {
                id: 2,
                name: "Mille Fleurs Hotel",
                price: 50000,
                rate: 3,
                image: ''
            },
            {
                id: 3,
                name: "Da Lat Vivan",
                price: 50000,
                rate: 3,
                image: ''
            },
        ]
        return (
            <Container style={{ padding: 5 }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lịch trình</Text>
                </View>
                <Content>
                    <ScrollView horizontal={true}>
                        {
                            // data.map((item, index) => {
                            //     return <ItemSch data={item} key={index} />
                            // })
                        }

                    </ScrollView>
                </Content>
            </Container>
        );
    }
}
class DacSanScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}
const TabNavigator = createMaterialTopTabNavigator({
    ChuyenDi: { screen: ChuyenDiScreen },
    KhachSan: { screen: KhachSanScreen },
    DacSan: { screen: DacSanScreen }
});
const AppContainer = createAppContainer(TabNavigator);
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        this.itemRef = firebaseApp.database();
    }
    listenForItem = () => {
        var dt = [];
        this.itemRef.ref('LichTrinh').on('child_added', (dataSnapshot) => {
            dt.push({
                nameT: dataSnapshot.val().TenT,
                des: dataSnapshot.val().MoTa,
                maT: dataSnapshot.val().MaT,
                key: dataSnapshot.key
            });
            this.setState({
                data: dt
            })
            console.log(this.state.data);
        })
    }
    componentDidMount = () => {
        this.listenForItem(this.itemRef);
    }
    render() {
        return (
            <Container>
                <Header
                    style={{
                        backgroundColor: 'white',
                        borderBottomColor: '#D8D8D8',
                        borderBottomWidth: 0,
                    }}>
                    <Left>
                        <EIcon
                            name="chevron-thin-left"
                            style={{ fontSize: 30 }}
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </Left>
                    <Body></Body>
                </Header>
                <ScrollView>
                    <Image
                        source={{
                            uri:
                                'https://i-dulich.vnecdn.net/2019/03/16/1-3-1552732057_680x0.jpg',
                        }}
                        style={{ height: 150, width: '100%' }}
                    />
                    <AppContainer />
                </ScrollView>
                {/*<View>
          <Text>tuyen {navigation.getParam('id')} {navigation.getParam('id2')} </Text>
        </View>*/}

            </Container >
        );
    };
}
export default index;;
