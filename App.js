/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { StyleProvider, Container, Header, Content, Button, Left, Right, Body, Icon, Text, Thumbnail } from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import AppSlider from './src/components/slider.js';
import { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
type Props = {};

export default class App extends Component<Props> {

  _fbLogin() {
    LoginManager.logInWithReadPermissions(["public_profile", "email", "user_birthday", "user_friends"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
          Alert.alert('Login Cancelled');
        } else {
          console.log(result);
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );

          let infoRequest = new GraphRequest('/me', {
            httpMethod: 'GET',
            version: 'v2.5',
            parameters: {
                'fields': {
                    'string' : 'email,name,friends,birthday'
                }
            }
          }, (err, res) => {
            Alert.alert(`Logged in from facebook as ${res.name}`);
            console.log(err, res);
          });

          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function(error) {
        Alert.alert('Login Failed');
        console.log("Login fail with error: " + error);
      }
    );
  }
  render() {
    const logo = require('./src/assets/images/logo.png');
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header style={styles.header}>
            <Body>
              <View style={styles.headerTitle}>
                <Thumbnail style={styles.logo} square small source={logo} />
              </View>
            </Body>
          </Header>
          <Content style={styles.content}>
            <View style={styles.headerextend}/>
            <View style={styles.slope}/>
            <AppSlider />
            <View style={styles.loginsection}>
              <Text note style={styles.loginTerms}>By tapping Log in, you agree with our Terms of Service and Privacy Policy</Text>
              <Button full iconLeft style={styles.loginbutton} onPress={this._fbLogin}>
                <Icon type="FontAwesome" name='facebook-f' />
                <Text>LOGIN</Text>
              </Button>
            </View>
            {/* <View>
              <LoginButton
                onLoginFinished={
                  (error, result) => {
                    if (error) {
                      Alert.alert('Login has error');
                      console.log(result);
                      console.log("login has error: " + result.error);
                    } else if (result.isCancelled) {
                      Alert.alert('Login has cancelled');
                      console.log("login is cancelled.");
                    } else {
                      AccessToken.getCurrentAccessToken().then(
                        (data) => {
                          Alert.alert('Login Success');
                          console.log(data.accessToken.toString())
                        }
                      )
                    }
                  }
                }
                onLogoutFinished={() => console.log("logout.")}/>
            </View> */}
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 75,
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
    height: 50
  },
  headerextend: {
    height: 20,
    backgroundColor: platform.toolbarDefaultBg,
  },
  slope: {
    overflow: 'hidden',
    borderStyle: 'solid',
    borderLeftWidth: 125,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderTopColor: platform.toolbarDefaultBg,
    borderRightWidth: 125,
    borderRightColor: 'transparent'
  },
  content: {
    // backgroundColor: '#EBF0F4',
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
    borderRadius: 12
  }
});
