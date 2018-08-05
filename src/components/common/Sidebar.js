import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Content, List, ListItem, Text, Icon, Left, Body, Right, Thumbnail, Footer, Container,
  FooterTab, Button, } from "native-base";

class Sidebar extends Component {
  render() {
    const { whiteColor, redColor, iconStyle, bodyStyle, listItemStyle, firstListItemStyle, lastListItemStyle, lastlistItemSetStyle } = styles;
    return (
      <Container style={{ backgroundColor: "#000", borderColor: "#000", paddingTop: 50 }}>
        <Content style={{ backgroundColor: "#000", borderColor: "#000", marginBottom: 0 }}>
          <List>
            <ListItem style={ firstListItemStyle }>
              <Body style={bodyStyle}>
                <Text style={whiteColor}>Emmanuel</Text>
                <Text style={redColor}>Your Profile</Text>
              </Body>
            </ListItem>
            <ListItem icon onPress={Actions.home} style={ listItemStyle }>
              <Left>
                <Icon name="library-music" type="MaterialIcons" style={{ fontSize: 25, color: "#fff" }} />
              </Left>
              <Body style={bodyStyle}>
                <Text style={whiteColor}>Home</Text>
              </Body>
            </ListItem>
            <ListItem icon onPress={Actions.explore} style={ listItemStyle }>
              <Left>
                <Icon ios="ios-compass" android="md-compass" style={iconStyle} />
              </Left>
              <Body style={bodyStyle}>
                <Text style={whiteColor}>Explore</Text>
              </Body>
            </ListItem>
            <ListItem icon onPress={Actions.artist} style={ listItemStyle }>
              <Left>
                <Icon ios="ios-people" android="md-people" style={iconStyle} />
              </Left>
              <Body style={bodyStyle}>
                <Text style={whiteColor}>Artist</Text>
              </Body>
            </ListItem>
            <ListItem icon onPress={Actions.notification} style={ listItemStyle }>
              <Left>
                <Icon ios="ios-notifications" android="md-notifications" style={iconStyle} />
              </Left>
              <Body style={bodyStyle}>
                <Text style={whiteColor}>Notifications</Text>
              </Body>
            </ListItem>
            <ListItem icon style={ lastlistItemSetStyle }>
              <Left>
                <Icon ios="ios-share-alt" android="md-share" style={iconStyle} />
              </Left>
              <Body style={bodyStyle}>
                <Text style={whiteColor}>Share app</Text>
              </Body>
            </ListItem>
            <ListItem icon onPress={Actions.about} style={ listItemStyle }>
              <Left>
                <Icon ios="ios-information-circle-outline" android="md-information-circle" style={iconStyle} />
              </Left>
              <Body style={bodyStyle}>
                <Text style={whiteColor}>About Madabox</Text>
              </Body>
            </ListItem>
            <ListItem style={ lastListItemStyle }>
              <Body style={bodyStyle}>
                <Text style={whiteColor}>Follow the culture</Text>
              </Body>
            </ListItem>
          </List>
        </Content> 
        <Footer style={{ borderColor: "#000" }}>
          <FooterTab style={{backgroundColor: "#000"}}>
              <Button
                  onPress={() => {
                      Linking.openURL("https://facebook.com");
                  }}
              >
                  <Icon type="FontAwesome" name="facebook" style={iconStyle}/>
              </Button>
              <Button
                  onPress={() => {
                      Linking.openURL("https://instagram.com/madabox_/");
                  }}
              >
                  <Icon type="FontAwesome" name="instagram" style={iconStyle}/>
              </Button>
              <Button
                  onPress={() => {
                      Linking.openURL("https://twitter.com/madabox_/");
                  }}
              >
                  <Icon name="logo-twitter" style={iconStyle}/>
              </Button>
          </FooterTab> 
        </Footer>
      </Container>
      
    );
  }
}
const styles = StyleSheet.create({
  whiteColor: {
    color: "#fff",
    fontFamily: "helvetica"
  },
  redColor: {
    color: "#d32f2f",
    fontFamily: "helvetica"
  },
  bodyStyle: {
    borderColor: "#000",
    borderBottomWidth: 0
  },
  iconStyle: {
    fontSize: 25,
    color: "#fff"
  }, 
  firstListItemStyle: {
    marginTop: 25,
    marginLeft: 25,
    marginBottom: 40,
    borderColor: "#000",
  },
  listItemStyle: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#000",
  },
  lastlistItemSetStyle: {
    marginTop: 50,
    marginBottom: 10,
  },
  lastListItemStyle: {
    marginTop: 150,
    borderColor: "#000",
  }
});

export default Sidebar;
