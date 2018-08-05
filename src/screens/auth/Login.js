import React, { Component } from "react";
import { StyleSheet, Image, ImageBackground, View, Text } from "react-native";
import { Container, Content, Form, Item, Input, Label, Body, Button, Icon, CheckBox } from "native-base";
import { Col, Grid, Row } from "react-native-easy-grid";
import { Actions } from "react-native-router-flux";
import { Btn } from "../../components/common";

class Login extends Component {
  render() {
    const { centerItems, logoStyle, formStyle, itemStyle, forgotPasswordStyle, passwordStyle, whiteColor, borderStyle } = styles;
    return (
      <ImageBackground source={require("../../assets/background.jpg")} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Content style={{ borderColor: 'red', borderWidth: 1, width: '100%' }}>
            <Container style={centerItems}>
              <Grid>
                <Col> */}
                  <View>
                    <Image source={require("../../assets/logo_white.jpg")} style={logoStyle} />
                  </View>
                  <Form style={[formStyle, centerItems]}>
                    <Item floatingLabel style={itemStyle}>
                      <Label style={{ color: "#fff" }}>Email</Label>
                      <Input keyboardType="email-address" style={whiteColor} />
                    </Item>
                    <Item floatingLabel style={itemStyle}>
                      <Label style={{ color: "#fff" }}>Password</Label>
                      <Input secureTextEntry style={passwordStyle} />
                    </Item>

                    <View style={{ width: "99%", height: 40, marginLeft: 30, marginTop: 20, alignSelf: "center" }}>
                      <Grid>
                        <Col style={{ flexDirection: "row", alignItems: "center" }}>
                        {/* checked={true}  */}
                          <CheckBox color="#d32f2f" style={{ left: 0, marginRight: 5 }} />
                          <Text style={{ color: "#fff" }}>Keep me logged in</Text>
                        </Col>
                        <Col style={{ alignItems: "center" }}>
                          <Label style={forgotPasswordStyle}>Forget Password?</Label>
                        </Col>
                      </Grid>
                    </View>

                    <View style={{ width: "40%", margin: 20, alignSelf: "center" }}>
                      <Btn buttonText="Sign In" onPress={Actions.home} />
                    </View>

                  <View style={{ width: "95%", height: 50, marginTop: 10, alignSelf: "center" }}>
                    <Grid>
                    {/* style={{ borderWidth: 1, borderColor: '#d32f2f'}} */}
                      <Row style={{ alignSelf: "center", justifyContent: "center"}}>
                        <Button iconLeft transparent style={{alignSelf: "center", justifyContent: "center",}}>
                          <Icon name="logo-facebook" style={{ fontSize: 20, color: '#FFF' }}/>
                          <Text style={{fontSize: 13, padding: 5, color: '#fff'}}>
                              Sign in with facebook
                          </Text>
                        </Button>
                      </Row>
                      <Row style={{ marginTop: 15, alignSelf: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 14, color: "#ABA8AE" }}>Don't have an account? </Text>
                        <Text
                          onPress={Actions.register}
                          style={{ fontSize: 14, color: "#FFF", borderColor: "#d9534f", borderBottomWidth: 2 }}>
                          Sign Up
                        </Text>
                      </Row>
                    </Grid>
                  </View>
                </Form>

                {/* </Col>
              </Grid>
            </Container>
        </Content> */}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  centerItems: {
    justifyContent: "center",
    alignItems: "center"
  },
  logoStyle: {
    width: 250,
    height: 80
  },
  formStyle: {
    marginTop: 40,
    // marginLeft: 45,
    // marginRight: 45,
    width: '78%',

    // borderWidth: 1,
    // borderColor: '#d32f2f'
  },
  itemStyle: {
    margin: 0,
    padding: 0
  },
  passwordStyle: {
    color: "#fff",
    // paddingTop: 10,
    marginBottom: 0
  },
  forgotPasswordStyle: {
    color: "#fff",
    marginTop: 10,
    fontSize: 14
    // marginBottom: 30
  },
  // : {},
  whiteColor: {
    color: "#fff"
  },
  borderStyle: {
    borderColor: 'red', 
    borderWidth: 1, 
  }
});

export default Login;
