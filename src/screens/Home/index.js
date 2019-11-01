import React, {useState} from 'react';
import {View, Slider, Image, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Card,
  CardItem,
  Body,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Search from './Search';
import CardBack from '../Blog/CardBack'

const Index = props => {
  const [slide, setSlide] = useState(50);
  return (
    <Container>
      <Search />
      <Content>
        <ScrollView>
          <Row style={{}}>
            <Image
              style={{margin: 0, width: 412, height: 300}}
              source={{
                uri:
                  'https://png.pngtree.com/element_our/md/20180710/md_5b444bc316ce7.png',
              }}
            />
          </Row>
          <Content style={{padding: 10}}>
            <View style={{margin: 20}}>
              <Row>
                <Col>
                  <Card>
                    <CardItem button footer>
                      <Icon name="route" size={20} />
                      <Text style={{paddingLeft: 10, fontSize: 10}}>
                        Khám phá
                      </Text>
                    </CardItem>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardItem button footer>
                      <Icon name="plane-departure" size={20} />
                      <Text style={{paddingLeft: 10, fontSize: 10}}>
                        Lịch trình
                      </Text>
                    </CardItem>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardItem button footer>
                      <Icon name="procedures" size={20} />
                      <Text style={{paddingLeft: 10, fontSize: 10}}>
                        Khách sạn
                      </Text>
                    </CardItem>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card>
                    <CardItem button footer>
                      <Icon name="mug-hot" size={20} />
                      <Text style={{paddingLeft: 10, fontSize: 10}}>
                        Ẩm thực
                      </Text>
                    </CardItem>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardItem button footer>
                      <Icon name="envira" size={20} />
                      <Text style={{paddingLeft: 10, fontSize: 10}}>
                        Bài viết
                      </Text>
                    </CardItem>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <CardItem button footer>
                      <Icon name="map-marked-alt" size={20} />
                      <Text style={{paddingLeft: 10, fontSize: 10}}>
                        Bản đồ
                      </Text>
                    </CardItem>
                  </Card>
                </Col>
              </Row>
            </View>
            <View>
              <Text>Địa điểm du lịch HOT</Text>
              <ScrollView horizontal={true}>
                <CardBack />
                <CardBack />
                <CardBack />
                <CardBack />
                <CardBack />
              </ScrollView>
            </View>
            <View>
              <Text>Địa điểm du lịch HOT</Text>
              <ScrollView horizontal={true}>
                <CardBack />
                <CardBack />
                <CardBack />
                <CardBack />
                <CardBack />
              </ScrollView>
            </View>
            <View>
              <Text>Địa điểm du lịch HOT</Text>
              <ScrollView horizontal={true}>
                <CardBack />
                <CardBack />
                <CardBack />
                <CardBack />
                <CardBack />
              </ScrollView>
            </View>
          </Content>
        </ScrollView>
      </Content>
    </Container>
  );
};
export default Index;
