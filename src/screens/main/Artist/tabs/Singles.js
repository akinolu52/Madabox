import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, List, ListItem, Thumbnail, Text, Body, Right } from "native-base";
// import Icon from "react-native-vector-icons/SimpleLineIcons";
import { SongOptions } from "../../../../components/common";

export default class Singles extends Component {
  render() {
    let SinglesList = [];
    for (let i = 0; i < 5; i++) {
      SinglesList.push(
          <ListItem style={{ borderColor: "#000", paddingTop: 5, paddingBottom: 0 }} key={i}>
            <Thumbnail
              square
              size={80}
              style={{ borderRadius: 5 }}
              source={require("../../../../assets/artist.jpg")}
            />
            <Body>
              <Text style={{ color: "#fff", fontFamily: "helvetica" }}>Satan be gone</Text>
              <Text style={{ color: "#fff", fontFamily: "helvetica" }} note>
                Asa
              </Text>
            </Body>
            <Right>
              <SongOptions />
            </Right>
          </ListItem>
      );
    }
    return (      
      <Container style={{ backgroundColor: "#000", borderColor: "#000" }}>
        <Content style={{ backgroundColor: "#000", borderColor: "#000" }}>
          <List>{SinglesList}</List>
        </Content>
      </Container>
    );
  }
}
