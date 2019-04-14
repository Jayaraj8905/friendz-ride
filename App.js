/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Friendz Ride</Title>
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
