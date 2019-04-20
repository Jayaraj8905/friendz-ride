/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Left, Right, Body, Icon, Text, Thumbnail } from 'native-base';
import AppSlider from './src/components/slider.js';
type Props = {};

export default class App extends Component<Props> {
  render() {
    const logo = require('./src/assets/images/logo.png');
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
          <AppSlider />
          <View style={styles.loginsection}>
            <Text note style={styles.loginTerms}>By tapping Log in, you agree with our Terms of Service and Privacy Policy</Text>
            <Button full iconLeft style={styles.loginbutton}>
              <Icon type="FontAwesome" name='facebook-f' />
              <Text>LOGIN</Text>
            </Button>
          </View>
        </Content>
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
