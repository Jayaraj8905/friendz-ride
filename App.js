/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import { Container, Header, Content, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail,  } from 'native-base';
import Carousel from 'react-native-snap-carousel';

type Props = {};

const ENTRIES1 = [
  {
      info: 'Friendzride - For Nicer and Naughtier',
      image: require('./images/model/01.jpg')
  },
  {
      info: 'Earlier this morning, NYC',
      image: require('./images/model/02.jpg')
  },
  {
      info: 'White Pocket Sunset',
      image: require('./images/model/03.jpg')
  },
  {
      info: 'Acrocorinth, Greece',
      image: require('./images/model/04.jpg')
  },
  {
      info: 'The lone tree, majestic landscape of New Zealand',
      image: require('./images/model/05.jpg')
  },
  {
      info: 'Middle Earth, Germany',
      image: require('./images/model/06.jpg')
  }
];

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const sliderWidth = viewportWidth;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const itemWidth = slideWidth + itemHorizontalMargin * 2;
export default class App extends Component<Props> {
  
  _renderItem ({item, index}) {
    return (
          <Card style={styles.card}>
            <CardItem cardBody>
              <Image source={item.image} style={{height: 400, width: null, flex: 1}}/>
            </CardItem>
            <CardItem cardBody style={styles.info}>
              <Text note>{item.info}</Text>
            </CardItem>
          </Card>
    );
  }
  render() {
    const logo = require('./images/logo.png');
    
    // const uri = 'https://www.bensprostate.com/wp-content/uploads/2017/02/male-female-symbol.png';
    return (
      <Container>
        <Header androidStatusBarColor="#bf42f4" style={styles.header}>
          <Left style={styles.headerLeft}/>
          <Body>
            <View style={styles.headerTitle}>
              <Thumbnail style={styles.logo} square small source={logo} />
            </View>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <View style={styles.headerextend}/>
          <View style={styles.slope}/>
          {/* <Card style={styles.card}>
            <CardItem cardBody>
              <Image source={model1} style={{height: 400, width: null, flex: 1}}/>
            </CardItem>
            <CardItem cardBody style={styles.info}>
              <Text note>Friendzride - For Nicer and Naughtier</Text>
            </CardItem>
          </Card> */}
          <View style={styles.carouselHold}>
            <Carousel
                // style={styles.card}
                layout={'stack'} layoutCardOffset={18}
                ref={(c) => { this._carousel = c; }}
                data={ENTRIES1}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                loop={true}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
              />
            </View>
          {/* <Carousel layout={'stack'} layoutCardOffset={`18`} /> */}
          <View style={styles.loginsection}>
            {/* <Text></Text> */}
            <Text note style={styles.loginTerms}>By tapping Log in, you agree with our Terms of Service and Privacy Policy</Text>
            <Button full iconLeft style={styles.loginbutton}>
              <Icon type="FontAwesome" name='facebook-f' />
              <Text>LOGIN</Text>
            </Button>
          </View>
        </Content>
        {/* <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 75,
    backgroundColor: '#bf42f4',
  },
  headerLeft: {
    flex: 1
  },
  headerTitle: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  logo: {
    width: 50,
    height: 44
  },
  headerextend: {
    height: 20,
    backgroundColor: '#bf42f4',
  },
  slope: {
    overflow: 'hidden',
    borderStyle: 'solid',
    borderLeftWidth: 125,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderTopColor: '#bf42f4',
    borderRightWidth: 125,
    borderRightColor: 'transparent'
  },
  content: {
    backgroundColor: '#EBF0F4',
  },
  carouselHold: {
    marginTop: -40,
    marginBottom: 5,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden'
  },
  info: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center'
  },
  loginsection: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 25,
    paddingBottom: 25
  },
  loginTerms: {
    textAlign: 'center',
    marginBottom: 20
  },
  loginbutton: {
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: '#bf42f4',
    borderRadius: 12
  }
});
