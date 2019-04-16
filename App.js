/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail,  } from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const image = require('./images/logo.png');
    // const uri = 'https://www.bensprostate.com/wp-content/uploads/2017/02/male-female-symbol.png';
    return (
      <Container>
        <Header androidStatusBarColor="#835FFD" style={styles.header}>
          <Left style={styles.headerLeft}/>
          <Body>
            <View style={styles.headerTitle}>
              <Thumbnail style={styles.logo} square small source={image} />
            </View>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <View style={styles.headerextend}/>
          <View style={styles.slope}/>
          <Card style={styles.card}>
            <CardItem>
              <Body>
                <Text>
                  Your text here
                  Your text here
                  Your text here
                  Your text here
                  Your text here
                  Your text here
                  Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
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
    backgroundColor: '#835FFD',
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
    backgroundColor: '#835FFD',
  },
  slope: {
    overflow: 'hidden',
    borderStyle: 'solid',
    borderLeftWidth: 125,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderTopColor: '#835FFD',
    borderRightWidth: 125,
    borderRightColor: 'transparent'
  },
  content: {
    backgroundColor: '#EBF0F4',
  },
  card: {
    marginTop: -50,
    marginBottom: 5,
    marginLeft: 40,
    marginRight: 40,
  }
});
