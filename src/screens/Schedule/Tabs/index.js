import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';
import { Col, Row } from 'react-native-easy-grid';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
        }
    }
    onCheckTabs = (name, check) => {
        this.props.RoutesMap(name);
        this.setState({
            activeTab: check
        })
        console.log(check);
    }
    render() {
        return (
            <Row
                style={{
                    paddingLeft: '10%',
                    paddingRight: '10%',
                    paddingTop: 10,
                    justifyContent: 'center',
                    // borderColor: '#CFCFCF',
                    // borderWidth: 1,
                    height: 70,
                }}>
                <Col>
                    <Button
                        block
                        light
                        onPress={() => this.onCheckTabs('Accounts', 0)}
                        style={{
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                            backgroundColor: this.state.activeTab == 0 ? '#3399FF' : '#FFFFFF',
                        }}>
                        <Text style={{ color: this.state.activeTab == 0 ? '#ffffff' : '#3399FF' }}>
                            Đang đi
                        </Text>
                    </Button>
                </Col>
                <Col>
                    <Button
                        onPress={() => this.onCheckTabs('Transit', 1)}
                        style={{ backgroundColor: this.state.activeTab == 1 ? '#3399FF' : '#FFFFFF' }}
                        block>
                        <Text style={{ color: this.state.activeTab == 1 ? '#FFFFFF' : '#3399FF' }}>
                            Sắp tới
                        </Text>
                    </Button>
                </Col>
                <Col>
                    <Button
                        light
                        onPress={() => this.onCheckTabs('Went', 2)}
                        block
                        style={{
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20,
                            backgroundColor: this.state.activeTab == 2 ? '#3399FF' : '#FFFFFF',
                        }}>
                        <Text style={{ color: this.state.activeTab == 2 ? '#FFFFFF' : '#3399FF' }}>
                            Đã đi
                        </Text>
                    </Button>
                </Col>
            </Row>
        );
    };
}
export default index;
