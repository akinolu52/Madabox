import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, List, ListItem, Thumbnail, Text, Body, Right } from "native-base";
import Icon from "react-native-vector-icons/SimpleLineIcons";

export default class Playlist extends Component {
  render() {
    let SinglesList = [];
    for (let i = 0; i < 5; i++) {
      SinglesList.push(
        // <View>
          <ListItem style={{ borderColor: "#000", paddingTop: 12, paddingBottom: 0 }} key={i}>
            <Thumbnail
              square
              size={80}
              source={require("../../../../assets/artist2.jpg")}
            />
            <Body>
              <Text style={{ color: "#fff", fontFamily: "helvetica" }}>Satan be gone</Text>
              <Text style={{ color: "#fff", fontFamily: "helvetica" }} note>
                Asa
              </Text>
            </Body>
            <Right>
              <Text note>
                <Icon name="options-vertical" size={20} color="#FFF" />
              </Text>
            </Right>
          </ListItem>
        // </View>
      );
    }
    return (
      <Container style={{ backgroundColor: "#000", borderColor: "#000" }}>
        <Content style={{ backgroundColor: "#000", borderColor: "#000" }}>
          <Text style={{ color: "#FFF", padding: 10, paddingBottom: 0, fontFamily: "helvetica" }}>Recently played</Text>
          <List>{SinglesList}</List>
        </Content>
      </Container>
    );
  }
}
