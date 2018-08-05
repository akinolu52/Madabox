import React, { Component } from "react";
import { StyleSheet, Image, ImageBackground, View, Text } from "react-native";
import { Container, Content, Form, Item, Input, CheckBox, Label, Button, ListItem, Body, Icon } from "native-base";
import { Col, Grid, Row } from "react-native-easy-grid";
import { Btn } from "../../components/common";
import { Actions } from "react-native-router-flux";

class Register extends Component {
  render() {
    const { center, logoStyle, formStyle, itemStyle, forgotPasswordStyle, passwordStyle, whiteColor } = styles;
    return (
      <ImageBackground source={require("../../assets/background.jpg")} style={{ width: "100%", flex: 1, justifyContent: 'center' }}>
        {/* <Content> */}
          {/* <Container> */}
            {/* <Grid style={center}>
              <Col> */}
                <View style={center}>
                  <Image source={require("../../assets/logo_white.jpg")} style={logoStyle} />
                </View>
                <Form style={formStyle}>
                  <Item floatingLabel style={itemStyle}>
                    <Label style={{ color: "#fff" }}>Username</Label>
                    <Input style={{ color: "#fff" }} />
                  </Item>
                  <Item floatingLabel style={itemStyle}>
                    <Label style={{ color: "#fff" }}>Email</Label>
                    <Input keyboardType="email-address" style={{ color: "#fff" }} />
                  </Item>
                  <Item floatingLabel style={itemStyle}>
                    <Label style={{ color: "#fff" }}>Password</Label>
                    <Input secureTextEntry style={passwordStyle} />
                  </Item>
                  <Item floatingLabel style={itemStyle}>
                    <Label style={{ color: "#fff" }}>Re-enter Password</Label>
                    <Input secureTextEntry style={passwordStyle} />
                  </Item>

                  {/* <View style={{ width: "99%", height: 40, marginLeft: 30, marginTop: 20, alignSelf: "center" }}>
                    <Grid>
                      <Col style={{ flexDirection: "row", alignItems: "center" }}>
                        <CheckBox checked={true} color="#d32f2f" style={{ left: 0, marginRight: 5 }} />
                        <Text style={whiteColor}>Keep me logged in</Text>
                      </Col>
                      <Col style={{ alignItems: "center" }}>
                        <Label style={forgotPasswordStyle}>Forget Password?</Label>
                      </Col>
                    </Grid>  
                  </View> */}

                  <Text style={{color: "#fff", width: "90%", marginTop: 5, marginLeft: 15, alignSelf: "center", textAlign: 'center' }}>
                    By signing up, you agree to our to our terms of use and privacy policy.
                  </Text>
                  
                  <View style={{ width: "40%", margin: 20, alignSelf: "center" }}>
                    <Btn buttonText="Sign Up" onPress={Actions.home} />
                  </View> 

                  <View style={{ width: "95%", alignSelf: "center", height: 50, }}>
                    <Grid >
                      <Row style={{ marginTop: 15, alignSelf: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 14, color: "#ABA8AE" }}>I have an account? </Text>
                        <Text
                          onPress={Actions.register}
                          style={{ fontSize: 14, color: "#FFF", borderColor: "#d9534f", borderBottomWidth: 2 }}>
                          Sign In
                        </Text>
                      </Row>
                    </Grid>
                  </View>
                </Form>
              {/* </Col>
            </Grid> */}
          {/* </Container> */}
        {/* </Content> */}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  logoStyle: {
    width: 250,
    height: 80
    // borderWidth: 1,
    // borderColor: '#d32f2f'
  },
  formStyle: {
    marginTop: 50,
    marginLeft: 45,
    marginRight: 45,
    // borderWidth: 1,
    // borderColor: '#d32f2f'
  },
  itemStyle: {
    // marginLeft: 0,
    // marginBottom: 5,
    // borderBottomColor: "#fff",
    // borderBottomWidth: 1
    margin: 0,
    padding: 0
  },
  passwordStyle: {
    color: "#fff",
    marginBottom: 0
    // paddingTop: 10
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
  }
});

export default Register;
